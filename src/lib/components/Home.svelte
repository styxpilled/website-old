<script lang="ts">
	import Icon from '@iconify/svelte';
    import wavingHand from '@iconify/icons-twemoji/waving-hand';
</script>

<div class="hey">
	<Icon class="hand" icon={wavingHand} />
	<h1>I'm Styx.</h1>
</div>

<style lang="scss">
	div :global(.hand) {
		animation: wave 15s infinite 5s;
		font-size: 10rem;
	}

	.hey {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
