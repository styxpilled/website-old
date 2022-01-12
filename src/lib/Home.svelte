<div class="hey">
	<img src="/1f44b.svg" class="hand" alt="me waving the hand" />
	<h1>I'm Styx.</h1>
</div>

<style lang="scss">
	.hey {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.hand {
		animation: wave 15s infinite 5s;
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
