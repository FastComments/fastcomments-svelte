<div class="content">
  <div class="welcome">
    <h2>Image Chat</h2>
    <p>Create live discussions around images. Select an area of an image to create a discussion.</p>
  </div>
</div>

<script lang="ts">
  import ImageChatWidget from "$lib/ImageChatWidget.svelte";
  import type { FastCommentsImageChatWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsImageChatWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-image-chat"
  };

</script>
<ImageChatWidget config={config}></ImageChatWidget>

<style>
    .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .welcome {
        margin: 40px auto;
        width: fit-content;
    }
</style>
