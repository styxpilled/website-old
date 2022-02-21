<script lang="ts">
  import { onMount } from "svelte";

  import mdiGithub from "@iconify/icons-mdi/github";
  import Icon from "@iconify/svelte";

  const url: string =
    "https://api.github.com/repos/styxpilled/website/commits/main";
  let sha: string;

  function getcommit() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => (sha = data.sha.substring(0, 7)))
      .catch((error) => console.log(error));
  }
  onMount(() => {
    getcommit();
  });
</script>

<span>
  <a href="https://github.com/styxpilled/website">
    <Icon class="icon" icon={mdiGithub} />
  </a>
  <code lang="undefined">{sha}:</code> cool femboy facts! do you think god will forgive
  you for your sins
</span>

<style lang="postcss">
  a {
    margin-bottom: -5%;
    line-height: 0.01rem;
  }
  span {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
</style>
