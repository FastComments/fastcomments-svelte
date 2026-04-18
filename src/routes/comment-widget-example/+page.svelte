<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  let config: FastCommentsCommentWidgetConfig = $state({
    tenantId: "demo",
    urlId: "svelte-test"
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });

  const snippet = `<script lang="ts">
  import CommentWidget from "fastcomments-svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsCommentWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test"
  };
<\/script>

<CommentWidget {config} />`;
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Widgets <em>/ Live Comment Widget</em></div>
      <h1 class="fc-demo__title">Live Comment Widget</h1>
      <p class="fc-demo__subtitle">The flagship live commenting widget. Replies, voting, moderation, media
        attachments, and realtime sync all out of the box.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Tenant · demo</span>
      <span class="fc-tag">urlId · svelte-test</span>
    </div>
  </header>

  <div class="fc-stage__panel fc-stage__panel--light">
    <CommentWidget config={config} />
  </div>

  <CodePanel label="comment-widget-example · +page.svelte" code={snippet} />
</div>
