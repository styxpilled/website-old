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
		<br>
		(maybe I should use MDsveX...)
	</p>
</div>

<style lang='scss'>
	.content {
		padding: 1em;
		text-align: center;
	}
</style>