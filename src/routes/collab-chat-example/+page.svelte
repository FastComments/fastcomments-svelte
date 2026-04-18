<script lang="ts">
  import CollabChatWidget from "$lib/CollabChatWidget.svelte";
  import type { FastCommentsCollabChatWidgetConfig } from "fastcomments-typescript";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  let config: FastCommentsCollabChatWidgetConfig = $state({
    tenantId: "demo",
    urlId: "svelte-test-collab-chat"
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });

  const snippet = `<script lang="ts">
  import { CollabChatWidget } from "fastcomments-svelte";
  import type { FastCommentsCollabChatWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsCollabChatWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-collab-chat"
  };
<\/script>

<CollabChatWidget {config}>
  {#snippet content()}
    <p>Highlight any passage to pin a discussion to the selection.</p>
  {/snippet}
</CollabChatWidget>`;
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Widgets <em>/ Collab Chat</em></div>
      <h1 class="fc-demo__title">Collab Chat</h1>
      <p class="fc-demo__subtitle">Document-anchored realtime chat. Readers highlight any passage and open a thread
        pinned to that exact selection. Perfect for docs, drafts, and review flows.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Tenant · demo</span>
      <span class="fc-tag">urlId · svelte-test-collab-chat</span>
    </div>
  </header>

  <div class="fc-stage__panel fc-stage__panel--light">
    <CollabChatWidget config={config}>
      {#snippet toolbar()}
      {/snippet}
      {#snippet content()}
        <p style="font-family: Georgia, serif; font-size: 17px; line-height: 1.7; color: var(--fc-light-panel-ink); max-width: 64ch;">
          Highlight any passage of this sample document to anchor a discussion to the selection. Collab Chat pins the
          conversation to the exact text, so every reviewer sees the same context when they reply. Try selecting this
          sentence to open a thread.
        </p>
      {/snippet}
    </CollabChatWidget>
  </div>

  <CodePanel label="collab-chat-example · +page.svelte" code={snippet} />
</div>
