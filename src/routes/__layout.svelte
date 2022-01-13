<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.scss';

	import Icon from '@iconify/svelte';
	import twitter from '@iconify/icons-mdi/twitter';
	import github from '@iconify/icons-mdi/github';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div>
		<p>Contact:
			<a href="twitter.com/styxpilled" ><Icon class="icon" icon={twitter}/></a>
			<a href="github.com/styxpilled" ><Icon class="icon" icon={github} /></a>
		</p>
	</div>
	<p>Powered by SvelteKit and unprofessionalism.</p>
</footer>

<style lang="scss">
	div :global(.icon) {
		color: black;
		transition: color 0.2s;
		&:hover {
			// random colour
			color: #00aced;
		}
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding: 10px;
	}
</style>
