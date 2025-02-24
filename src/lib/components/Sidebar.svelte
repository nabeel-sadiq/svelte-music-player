<script>
  import { onMount } from "svelte";

  let songs = $state([]);
  let props = $props();

  onMount(async () => {
    const res = await fetch("/api/music");
    songs = await res.json();
  });
</script>

<div class={`bg-base-200 h-screen overflow-y-scroll ${props.class}`}>
  {#each songs as song, index}
    <a href={`/${song}`}>
      <div class="py-5 px-8 border-b-[1px] group flex gap-2">
        <span
          class="hidden transform transition-transform duration-200 group-hover:block"
          >&rarr;</span
        >
        <p
          class="block transform transition-transform duration-200 group-hover:translate-x-5"
        >
          {song}
        </p>
      </div>
    </a>
  {/each}
</div>
