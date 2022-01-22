<script lang="ts">
	import Nav from '$components/Nav.svelte';
	import PageTransition from "$components/PageTransition.svelte";
	import { page } from '$app/stores';
	import '$scss/app.scss';

	import Icon from '@iconify/svelte';
	import mdiTwitter from '@iconify/icons-mdi/twitter';
	import mdiGithub from '@iconify/icons-mdi/github';
	import midDiscord from '@iconify/icons-mdi/discord'
</script>

<Nav segment={$page.url}/>

<main>
	<PageTransition refresh={$page.url}>
		<slot/>
	</PageTransition>
</main>

<footer>
	<div>
		<p>Contact:
			<a href="https://twitter.com/styxpilled" ><Icon class="icon" icon={mdiTwitter}/></a>
			<a href="https://github.com/styxpilled" ><Icon class="icon" icon={mdiGithub} /></a>
			<a href="https://discord.com/" ><Icon class="icon" icon={midDiscord} /></a>
		</p>
	</div>
	<p>Powered by <a href="https://kit.svelte.dev/">SvelteKit</a> and <a href="https://github.com/styxpilled">unprofessionalism</a>.</p>
</footer>

<style lang="scss">
	@use 'src/scss/variables.scss' as *;

	:global(.icon) {
		color: black;
		transition: color 0.2s;
		&:hover {
			color: $link-fg;
		}
		font-size: 1.15rem;
		position: relative;
		top: 0.15rem;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
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
