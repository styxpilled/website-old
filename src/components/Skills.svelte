<script lang="ts">
  import { generate, javascript, pokemon, python } from 'apate';

  const config = {
  dictionaries: [
    javascript.frontend,
    pokemon.all,
    python.lib,
  ],
  separator: ', ',
  mode: 'string',
  length: 30,
};

  let skills = generate(config);
</script>

{ skills }