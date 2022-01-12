<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';

	import Icon from 'mdi-svelte';
    import { mdiTwitter, mdiGithub } from '@mdi/js';

	// TODO: FIX @MDI/JS ERROR
	// TODO: MAKE MDI ICONS CHANGE COLOUR ON HOVER
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div>
		<p class="icon" >Contact:
			<a href="twitter.com/styxpilled" ><Icon class="icon" path={mdiTwitter} color="black" /></a>
			<a href="github.com/styxpilled" ><Icon class="icon" path={mdiGithub} color="black" /></a>
		</p>
	</div>
	<p>Powered by SvelteKit and unprofessionalism.</p>
</footer>

<style lang="scss">
	.icon {
		fill: black;
		transition: fill 0.2s;
		cursor: pointer;
		margin: 0 0.5rem;
		&:hover {
			fill: #00aced;
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

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
