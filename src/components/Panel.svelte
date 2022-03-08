<script lang="ts">
	export let direction: string;
	export let classname: string;
	export let expandable: boolean;
	let expanded: boolean;

	import Icon from '@iconify/svelte';
	import chevronDown from '@iconify/icons-mdi/chevron-down';
	import chevronUp from '@iconify/icons-mdi/chevron-up';

	function toggle() {
		expanded = !expanded;
	}
</script>


<div class="{classname} slide-in" id="slide-{direction}">
	<slot />
	{#if expandable}
    {#if expanded}
      <slot name="extra"/>
    {/if}
		<button on:click={ toggle }>
			<Icon icon={expanded ? chevronUp : chevronDown} />
		</button>
	{/if}
</div>

<style lang="postcss">
	@import "variables.pcss";

	#slide-left {
		transform: translateX(-250%);
	}

	#slide-right {
		transform: translateX(250%);
	}

	.slide-in{
		padding: 2rem;
		background: $bg-dark;
		animation: slide-in 0.5s forwards 3s;
	}

	button {
		font-size: 1.5rem;
		background-color: $bg-dark;
		display: flex;
		align-self: flex-end;
		/* outline: none; */
		border: none;
	}

	@keyframes slide-in {
		100% {
			transform: translateX(0%);
		}
	}
</style>