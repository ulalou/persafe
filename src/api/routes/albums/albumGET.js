const Route = require('../../structures/Route');
const Util = require('../../utils/Util');

class albumGET extends Route {
	constructor() {
		super('/album/:identifier', 'get', { bypassAuth: true });
	}

	async run(req, res, db) {
		const { identifier } = req.params;
		if (!identifier) return res.status(400).json({ message: 'Invalid identifier supplied' });

		/*
			Make sure it exists and it's enabled
		*/
		const link = await db.table('links').where({ identifier, enabled: true }).first();
		if (!link) return res.status(404).json({ message: 'The identifier supplied could not be found' });

		/*
			Same with the album, just to make sure is not a deleted album and a leftover link
		*/
		const album = await db.table('albums').where('id', link.albumId).first();
		if (!album) return res.status(404).json({ message: 'Album not found' });

		/*
			Grab the files in a very unoptimized way. (This should be a join between both tables)
		*/
		const fileList = await db.table('albumsFiles').where('albumId', link.albumId).select('fileId');
		const fileIds = fileList.map(el => el.fileId);
		const files = await db.table('files')
			.whereIn('id', fileIds)
			.orderBy('id', 'desc')
			.select('name');

		/*
			Create the links for each file
		*/
		for (let file of files) {
			file = Util.constructFilePublicLink(file);
		}

		/*
			Add 1 more view to the link
		*/
		await db.table('links').where({ identifier }).update('views', Number(link.views) + 1);

		return res.json({
			message: 'Successfully retrieved files',
			name: album.name,
			downloadEnabled: link.enableDownload,
			files
		});
	}
}

module.exports = albumGET;
