<div class="content">
  <div class="welcome">
    <h2>Dark Mode</h2>
    <p>An example toggling dark mode.</p>
  </div>
</div>

<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsCommentWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-dark-mode"
  };

  function toggleDarkMode() {
    config.hasDarkBackground = !config.hasDarkBackground;
  }

</script>
<div class="wrapper {config.hasDarkBackground ? 'dark' : ''}">
  <button on:click={toggleDarkMode}>Toggle Dark Mode</button>
  <CommentWidget config={config}></CommentWidget>
</div>

<style>
    .wrapper {
        padding: 10px;
    }

    .dark {
        background: #181a1b;
        color: #fff;
    }

    .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .welcome {
        margin: 40px auto;
        width: fit-content;
    }
</style>
