<script lang="ts">
    import Icon from '@iconify/svelte';
	import wavingHand from '@iconify/icons-twemoji/waving-hand';
</script>

<Icon class="hand" icon={wavingHand} />
<h1>I'm Styx.</h1>

<style lang="postcss">
	:global(.hand) {
		animation: wave 15s infinite 5s;
		font-size: 10rem;
	}

	@keyframes wave {
		8% {
			transform: rotate(60deg);
		}

		16% {
			transform: rotate(0deg);
		}
	}
</style>