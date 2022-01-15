<script lang="ts">
	import Panel from '$components/Panel.svelte';

	import Icon from '@iconify/svelte';
	import wavingHand from '@iconify/icons-twemoji/waving-hand';
</script>

<div class="grid">
	<div class="logo">
		<Panel direction="left">
			<code lang="ts">export const variable: string = "gaming"</code>
		</Panel>
	</div>
	<div class="main">
			<Icon class="hand" icon={wavingHand} />
			<h1>I'm Styx.</h1>
	</div>
	<div class="code">
		<Panel direction="right">
			<code lang="ts">export const variable: string = "gaming"</code>
		</Panel>
	</div>
	<div class="accounts">
		<Panel direction="left">
			<code lang="ts">export const variable: string = "gaming"</code>
		</Panel>
	</div>
	<div class="prophecy">
		if you stan musk you're cringe and fatherless
	</div>
	<div class="projects">
		<Panel direction="right">
			<code lang="ts">export const variable: string = "gaming"</code>
		</Panel>
	</div>
</div>

<style lang="scss">
	.grid {
		width: 100%;
		height: 45rem;
		display: grid;
		grid-template-columns: 0.8fr 1.4fr 0.8fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-template-areas:
			'logo main code'
			'accounts prophecy projects'
			'. . .';
		.code, .projects {
			display: flex;
			justify-content: flex-end;
		}
	}
	.main {
		grid-area: main;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.code {
		grid-area: code;
	}
	.projects {
		grid-area: projects;
	}
	.logo {
		grid-area: logo;
	}
	.accounts {
		grid-area: accounts;
	}
	.prophecy {
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
