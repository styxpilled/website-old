<script lang="ts">
	import { fly } from 'svelte/transition';

	import Panel from '$components/Panel.svelte';
	import Credit from '$components/Credit.svelte';
	import Prophecy from '$components/Prophecy.svelte';
	import Commit from '$components/Commit.svelte';
	import Hey from '$components/Hey.svelte';
  import Skills from '$components/Skills.svelte';
</script>

<div class="grid" in:fly={{ x: -200, duration: 400, delay: 600 }}>
	<Panel classname="panel random" direction="left" >
		<Credit />
	</Panel>
	<div class="main">
		<Hey />
	</div>
	<div class="panel code">
	<Panel classname="panel code" direction="right">
		<Prophecy />
	</Panel>
	<Panel classname="panel code" direction="right">
		<code lang="ts">export const variable: string = "gaming"</code>
	</Panel>
	</div>

	<Panel classname="panel accounts" direction="left">
    <p>I am familiar with:</p>
		<Skills />
	</Panel>
	<!-- <div class="prophecy">
		<Prophecy />
	</div> -->
	<Panel classname="panel projects" direction="right" expandable=true>
    <p slot="extra">named slot</p>
		projects are here
		<Commit />
	</Panel>
</div>

<style lang="postcss">
  @import "home.pcss";
</style>
