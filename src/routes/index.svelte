<script lang='ts'>
	import Intro from '$lib/Intro.svelte';
	import Home from '$lib/Home.svelte';

	import { onMount } from 'svelte';
	import { intro } from '../stores';

	onMount(() => {
		setTimeout(() => ($intro = true), 20000);
	});

	function toggleIntro() {
		$intro = !$intro;
	}
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
