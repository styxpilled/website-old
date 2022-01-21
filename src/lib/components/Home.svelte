<script lang="ts">
	import { fly } from 'svelte/transition';

	import Panel from './Panel.svelte';
	import Credit from './Credit.svelte';
	import Prophecy from './Prophecy.svelte';
	import Commit from './Commit.svelte';

	import Icon from '@iconify/svelte';
	import wavingHand from '@iconify/icons-twemoji/waving-hand';
</script>

<div class="grid" in:fly={{ x: -200, duration: 400, delay: 600 }}>
	<Panel classname="panel random" direction="left">
		<Credit />
	</Panel>
	<div class="main">
		<Icon class="hand" icon={wavingHand} />
		<h1>I'm Styx.</h1>
	</div>

	<div class="panel code">
	<Panel classname="panel code" direction="right">
		<Commit />
	</Panel>
	<Panel classname="panel code" direction="right">
		<code lang="ts">export const variable: string = "gaming"</code>
	</Panel>
	</div>
	<Panel classname="panel accounts" direction="left">
		<code lang="ts">export const variable: string = "gaming"</code>
	</Panel>
	<div class="prophecy">
		<Prophecy />
	</div>
	<Panel classname="panel projects" direction="right">
		<code lang="ts">export const variable: string = "gaming"</code>
	</Panel>
</div>

<style lang="scss">
	.grid {
		height: 80rem;
		min-height: 45rem;
		display: grid;
		grid-template-columns: 0.8fr 1.4fr 0.8fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-template-areas:
			'random main code'
			'accounts prophecy projects'
			'. . .';
	}
	.main {
		grid-area: main;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	div :global(.panel) {
		margin-bottom: 1rem;
		display: inline-block;
		height: min-content;
	}
	div :global(.code) {
		grid-area: code;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	div :global(.projects) {
		grid-area: projects;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	div :global(.random) {
		grid-area: random;
		width: min-content;
	}
	div :global(.accounts) {
		grid-area: accounts;
	}
	div :global(.prophecy) {
		grid-area: prophecy;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	div :global(.hand) {
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
