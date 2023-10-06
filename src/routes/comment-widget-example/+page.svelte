<div class="content">
  <div class="welcome">
    <h2>Comment Widget</h2>
    <p>The basic live comment widget.</p>
  </div>
</div>

<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsCommentWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test"
  };

</script>
<CommentWidget config={config}></CommentWidget>

<style>
    .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .welcome {
        margin: 40px auto;
        width: fit-content;
    }
</style>
