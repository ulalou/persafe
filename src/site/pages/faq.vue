<template>
	<!-- eslint-disable max-len -->
	<div class="container has-text-left">
		<h2 class="subtitle">
			What is persafe?
		</h2>
		<article class="message">
			<div class="message-body">
				persafe (per(sonal) safe, I know its terrible) is a fork of <a target="_blank" href="https://github.com/WeebDev/chibisafe">chibisafe<a />, running on this website.
				</a>
			</div>
		</article>

		<h2 class="subtitle">
			Can I selfhost this?
		</h2>
		<article class="message">
			<div class="message-body">
				Of course, it's open source. You can either host <a target="_blank" href="https://github.com/ulalou/persafe">this fork<a /> or <a target="_blank" href="https://github.com/WeebDev/chibisafe">the original</a>. Also, it's pretty easy.
				</a>
			</div>
		</article>

		<h2 class="subtitle">
			What's the difference between this and the original?
		</h2>
		<article class="message">
			<div class="message-body">
				For now, not much except the branding, but my plan is to expand this as a passion project to expand my webdev skills, and maybe add some features.
			</div>
		</article>

		<h2 class="subtitle">
			Okay, but can I use THIS instance?
		</h2>
		<article class="message">
			<div class="message-body">
				Sure, but for now, without logging in your uploads will get deleted in 14 weeks, however if you want to make an account, they will be kept until my HDD caps out + 14 days. If I can find your info, you will be notified.
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: 'Faq',
	data() {
		return {};
	},
	head() {
		return {
			title: 'FAQ'
		};
	}
};
</script>

<style lang="scss" scoped>
	@import '~/assets/styles/_colors.scss';
	article.message { background-color: #ffffff; }
</style>
