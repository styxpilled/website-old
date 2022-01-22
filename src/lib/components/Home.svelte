<script lang="ts">
	import { fly } from 'svelte/transition';

	import Panel from './Panel.svelte';
	import Credit from './Credit.svelte';
	import Prophecy from './Prophecy.svelte';
	import Commit from './Commit.svelte';
	import Hey from './Hey.svelte';
</script>

<div class="grid" in:fly={{ x: -200, duration: 400, delay: 600 }}>
	<Panel classname="panel random" direction="left">
		<Credit />
	</Panel>
	<div class="main">
		<Hey />
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
	@use 'src/scss/home.scss';
</style>
