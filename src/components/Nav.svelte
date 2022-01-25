<script>
    export let segment;
</script>

<div class="nav">
  <a href="/" class='{segment === undefined ? "current" : ""}'>Home</a>
  <a href="/about" class='{segment === "about" ? "current" : ""}'>About</a>
</div>

<style lang="postcss">
	@import "variables.pcss";

  .nav {
    display: flex;
    justify-content: center;
  }
  .current {
    text-decoration: underline;
  }
  a {
    padding: 20px;
    background-color: $bg-dark;
  }
</style>