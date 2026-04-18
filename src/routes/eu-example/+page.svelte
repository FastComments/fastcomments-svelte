<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  let config: FastCommentsCommentWidgetConfig = $state({
    tenantId: "demo",
    urlId: "svelte-test",
    region: "eu"
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });

  const snippet = `<script lang="ts">
  import { CommentWidget } from "fastcomments-svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsCommentWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test",
    region: "eu"
  };
<\/script>

<CommentWidget {config} />`;
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Flows <em>/ EU Region</em></div>
      <h1 class="fc-demo__title">EU Region</h1>
      <p class="fc-demo__subtitle">Pin widget reads and writes to the EU datacenter to satisfy data-residency
        requirements. A single
        <code style="font-family: var(--fc-mono); color: var(--fc-ink);">region: "eu"</code>
        flag routes everything through the EU cluster.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Region · EU</span>
      <span class="fc-tag">GDPR-friendly</span>
    </div>
  </header>

  <div class="fc-stage__panel fc-stage__panel--light">
    <CommentWidget config={config} />
  </div>

  <CodePanel label="eu-example · +page.svelte" code={snippet} />
</div>
