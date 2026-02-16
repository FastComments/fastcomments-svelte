<div class="content">
  <div class="welcome">
    <h2>Collab Chat</h2>
    <p>Create live discussions around content. Highlight and discuss text.</p>
  </div>
</div>

<script lang="ts">
  import CollabChatWidget from "$lib/CollabChatWidget.svelte";
  import type { FastCommentsCollabChatWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsCollabChatWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-collab-chat"
  };

</script>
<CollabChatWidget config={config}>
  {#snippet toolbar()}
  {/snippet}
  {#snippet content()}
    This is some text that can be highlighted and discussed.
  {/snippet}
</CollabChatWidget>

<style>
    .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .welcome {
        margin: 40px auto;
        width: fit-content;
    }
</style>
