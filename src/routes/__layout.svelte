<script lang="ts">
  import Nav from "$components/Nav.svelte";
  import PageTransition from "$components/PageTransition.svelte";
  import { page } from "$app/stores";
  import "$styles/app.pcss";
</script>

<Nav segment="{$page.url}/" />
<main>
  <PageTransition refresh={$page.url}>
    <slot />
  </PageTransition>
</main>

<style lang="postcss">
  @import "variables.pcss";

  :global(.icon) {
    color: black;
    transition: color 0.2s;
    &:hover {
      color: $link-fg;
    }
    font-size: 1.15rem;
    position: relative;
    top: 0.15rem;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
