<script lang='ts'>
	import Intro from '$lib/components/Intro.svelte';
	import Home from '$lib/components/Home.svelte';

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
	{#if !$intro}
		<Intro />
	{:else}
		<Home />
	{/if}
</section>

<style lang='scss'>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
