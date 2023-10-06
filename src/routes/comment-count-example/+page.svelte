<div class="content">
  <div class="welcome">
    <h2>Comment Count</h2>
    <p>Shows the comment count for a single page.</p>
  </div>
</div>

<script lang="ts">
  import CommentCountWidget from "$lib/CommentCountWidget.svelte";
  import type { FastCommentsCommentCountConfig } from "fastcomments-typescript";

  let config: FastCommentsCommentCountConfig = {
    tenantId: "demo",
    urlId: "svelte-test"
  };

</script>
<CommentCountWidget config={config}></CommentCountWidget>

<style>
    .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .welcome {
        margin: 40px auto;
        width: fit-content;
    }
</style>
