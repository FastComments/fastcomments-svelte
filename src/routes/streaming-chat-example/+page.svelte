<script lang="ts">
  import StreamingChatWidget from "$lib/StreamingChatWidget.svelte";
  import type { FastCommentsLiveChatWidgetConfig } from "fastcomments-typescript";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  let config: FastCommentsLiveChatWidgetConfig = $state({
    tenantId: "demo",
    urlId: "svelte-test-image-chat"
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });

  const snippet = `<script lang="ts">
  import { StreamingChatWidget } from "fastcomments-svelte";
  import type { FastCommentsLiveChatWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsLiveChatWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-streaming"
  };
<\/script>

<StreamingChatWidget {config} />`;
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Widgets <em>/ Streaming Chat</em></div>
      <h1 class="fc-demo__title">Streaming Chat</h1>
      <p class="fc-demo__subtitle">The live-stream flavor of the core widget. Same config surface, tuned for
        high-velocity conversations like live events, launches, and broadcasts.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Tenant · demo</span>
      <span class="fc-tag">Live · streaming</span>
    </div>
  </header>

  <div class="fc-stage__panel fc-stage__panel--light">
    <StreamingChatWidget config={config} />
  </div>

  <CodePanel label="streaming-chat-example · +page.svelte" code={snippet} />
</div>
