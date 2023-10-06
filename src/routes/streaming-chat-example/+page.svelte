<div class="content">
  <div class="welcome">
    <h2>Streaming Chat</h2>
    <p>A live stream type widget. Is just the regular comment widget with some extensions, so it takes the same configuration.</p>
  </div>
</div>

<script lang="ts">
  import StreamingChatWidget from "$lib/StreamingChatWidget.svelte";
  import type { FastCommentsLiveChatWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsLiveChatWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-image-chat"
  };

</script>
<StreamingChatWidget config={config}></StreamingChatWidget>

<style>
    .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .welcome {
        margin: 40px auto;
        width: fit-content;
    }
</style>
