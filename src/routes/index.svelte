<script lang="ts">
	import Intro from '$lib/components/Intro.svelte';
	import Home from '$lib/components/Home.svelte';
	import Panel from '$components/Panel.svelte';

	import { onMount } from 'svelte';
	import { intro } from '../stores';

	onMount(() => {
		setTimeout(() => ($intro = true), 20000);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="logo">
		i am logo
	</div>
	<div class="main">
		ayo?
	</div>
	<div class="code">
		<Panel />
	</div>
	<!-- {#if !$intro}
		<Intro />
	{:else}
		<Home />
	{/if} -->
</section>

<style lang="scss">
	section {
		width: 100%;
		display: grid;
		// flex-direction: column;
		// justify-content: center;
		// align-items: center;
		grid-template-columns: 0.8fr 1.4fr 0.8fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-template-areas:
			'logo main code'
			'accounts something projects'
			'. . .';
	}
	.main {
		grid-area: main;
	}
	.code {
		display: flex;
		// align to right
		justify-content: flex-end;
		grid-area: code;
	}
	.projects {
		grid-area: projects;
	}
	.logo {
		grid-area: logo;
	}
	.accounts {
		grid-area: accounts;
	}
	.something {
		grid-area: something;
	}
</style>
