<script lang="ts">
	export let direction: string;
</script>


<div class="slide-in" id="slide-{direction}">
	<slot>

	</slot>
</div>

<style lang="scss">
	@use 'src/scss/variables.scss' as *;

	#slide-left {
		transform: translateX(-250%);
	}

	#slide-right {
		transform: translateX(250%);
	}

	.slide-in{
		position: absolute;
		padding: 2rem;
		background: $bg-dark;
		animation: slide-in 0.5s forwards 3s; //10s
	}

	@keyframes slide-in {
		100% {
			transform: translateX(0%);
		}
	}
</style>