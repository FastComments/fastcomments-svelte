<script lang="ts">
  import ImageChatWidget from "$lib/ImageChatWidget.svelte";
  import type { FastCommentsImageChatWidgetConfig } from "fastcomments-typescript";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  let config: FastCommentsImageChatWidgetConfig = $state({
    tenantId: "demo",
    urlId: "svelte-test-image-chat"
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });

  const snippet = `<script lang="ts">
  import { ImageChatWidget } from "fastcomments-svelte";
  import type { FastCommentsImageChatWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsImageChatWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-image-chat"
  };
<\/script>

<ImageChatWidget {config} />`;
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Widgets <em>/ Image Chat</em></div>
      <h1 class="fc-demo__title">Image Chat</h1>
      <p class="fc-demo__subtitle">Drag to select any region of an image and open a discussion pinned to that area.
        Built for design reviews, bug triage, and creative collaboration.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Tenant · demo</span>
      <span class="fc-tag">urlId · svelte-test-image-chat</span>
    </div>
  </header>

  <div class="fc-stage__panel fc-stage__panel--light">
    <ImageChatWidget config={config} />
  </div>

  <CodePanel label="image-chat-example · +page.svelte" code={snippet} />
</div>
