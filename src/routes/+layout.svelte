<script>
  import "../app.css";
  import Sidebar from "$lib/components/Sidebar.svelte";
  let { children } = $props();
  import { onDestroy, onMount } from "svelte";

  let sidebarOpen = $state(true);

  function toggleSidebar(event) {
    if (event.ctrlKey && event.key === "b") {
      event.preventDefault();
      sidebarOpen = !sidebarOpen;
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      // ✅ Ensure we're in the browser
      window.addEventListener("keydown", toggleSidebar);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", toggleSidebar);
    }
  });
</script>

<Sidebar
  class="{sidebarOpen
    ? 'w-1/4'
    : 'w-0'} transition-all duration-300 overflow-hidden"
/>
<div
  class="fixed right-0 top-0 {sidebarOpen
    ? 'w-3/4'
    : 'w-full scale-125'} transition-all duration-300 overflow-hidden"
>
  {@render children()}
</div>
