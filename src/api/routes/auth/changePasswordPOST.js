const Route = require('../../structures/Route');
const config = require('../../../../config');
const log = require('../../utils/Log');
const db = require('knex')(config.server.database);
const bcrypt = require('bcrypt');
const moment = require('moment');

class changePasswordPOST extends Route {
	constructor() {
		super('/auth/password/change', 'post');
	}

	async run(req, res, user) {
		if (!req.body) return res.status(400).json({ message: 'No body provided' });
		const { password, newPassword } = req.body;
		if (!password || !newPassword) return res.status(401).json({ message: 'Invalid body provided' });

		if (newPassword.length < 6 || newPassword.length > 64) {
			return res.status(400).json({ message: 'Password must have 6-64 characters' });
		}

		let hash;
		try {
			hash = await bcrypt.hash(newPassword, 10);
		} catch (error) {
			log.error('Error generating password hash');
			log.error(error);
			return res.status(401).json({ message: 'There was a problem processing your account' });
		}

		const now = moment.utc().toDate();
		await db.table('users').where('id', user.id).update({
			password: hash,
			passwordEditedAt: now
		});

		return res.json({ message: 'The password was changed successfully' });
	}
}

module.exports = changePasswordPOST;