<script lang="ts">
	import Intro from '$components/Intro.svelte';
	import Home from '$components/Home.svelte';

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
	<Home />
	<!-- {#if !$intro}
		<Intro />
	{:else}
		<Home />
	{/if} -->
</section>