<script>
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { onMount } from "svelte";

  let songs = $state([]);

  onMount(async () => {
    const res = await fetch("/api/music");
    songs = await res.json();
  });
</script>

<div class="flex justify-center items-center min-h-screen">
  <h1 class="text-3xl">&larr; Click on the songs to play them</h1>
</div>