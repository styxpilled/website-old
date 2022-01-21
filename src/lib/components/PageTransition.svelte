<script lang="ts">
	import { fly } from 'svelte/transition';
	export let refresh: URL;
</script>

{#key refresh}
	<section in:fly={{ x: -5, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500 }}>
		<slot />
	</section>
{/key}
