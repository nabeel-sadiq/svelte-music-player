<script>
  import { browser } from "$app/environment";
  import { AudioPlayer } from "svelte-mp3";

  let { data } = $props();
</script>

{#if browser}
  <div class="px-20 flex flex-col gap-6 justify-center items-center min-h-screen">
    <h1 class="text-3xl">{data.song}</h1>
    <div class="relative w-full max-w-md overflow-hidden">
      <AudioPlayer class="svelte-mp3-player" urls={[`music/${data.song}`]} />
    </div>
  </div>
{/if}

<style>
  :global(.svelte-mp3-player svg, button) {
    fill: rgb(85, 136, 182) !important;
    stroke: rgb(10, 43, 100) !important;
  }
</style>