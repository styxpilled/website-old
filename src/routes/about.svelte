<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import Icon from '@iconify/svelte';
	import mdiTwitter from '@iconify/icons-mdi/twitter';
	import mdiGithub from '@iconify/icons-mdi/github';
	import midDiscord from '@iconify/icons-mdi/discord'
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>Hey!</h1>

	<p>
		This is a really early version of this website (I think. This should get deleted).
		<br>
		So enjoy the construction shitshow! Hoooraaay!!
	</p>
	<div>
		<p>Contact:
			<a href="https://twitter.com/styxpilled" ><Icon class="icon" icon={mdiTwitter}/></a>
			<a href="https://github.com/styxpilled" ><Icon class="icon" icon={mdiGithub} /></a>
			<a href="https://discord.com/" ><Icon class="icon" icon={midDiscord} /></a>
		</p>
	</div>
	<p>Powered by <a href="https://kit.svelte.dev/">SvelteKit</a> and <a href="https://github.com/styxpilled">unprofessionalism</a>.</p>
</div>

<style lang='scss'>
	@use 'src/scss/variables.scss' as *;

	.content {
		padding: 1em;
		text-align: center;
	}
	footer {
		background-color: $bg-dark;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding: 10px;
	}
</style>