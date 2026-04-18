<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  const getProductPageURLID = (productId: number) => "svelt-product" + productId;

  let productId = $state(0);
  let config: FastCommentsCommentWidgetConfig = $state({
    tenantId: "demo",
    urlId: getProductPageURLID(0)
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });

  function paginate(direction: -1 | 1) {
    productId += direction;
    config.urlId = getProductPageURLID(productId);
  }

  const snippet = `<script lang="ts">
  import { CommentWidget } from "fastcomments-svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";

  let productId = $state(0);
  let config: FastCommentsCommentWidgetConfig = $state({
    tenantId: "demo",
    urlId: \`product-\${productId}\`
  });

  function paginate(direction) {
    productId += direction;
    config.urlId = \`product-\${productId}\`;
  }
<\/script>

<button onclick={() => paginate(-1)}>Prev</button>
<button onclick={() => paginate(1)}>Next</button>
<CommentWidget {config} />`;
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Flows <em>/ Thread Pagination</em></div>
      <h1 class="fc-demo__title">Thread Pagination</h1>
      <p class="fc-demo__subtitle">Swap the widget's
        <code style="font-family: var(--fc-mono); color: var(--fc-ink);">urlId</code>
        at runtime to jump between products, posts, or pages. Threads are provisioned lazily. No pre-creation
        needed.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Product #{productId}</span>
      <span class="fc-tag">urlId · {config.urlId}</span>
    </div>
  </header>

  <div class="fc-stage__panel" style="padding: 20px;">
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-bottom: 14px; box-shadow: inset 0 -1px 0 0 var(--fc-border); margin-bottom: 20px; flex-wrap: wrap;">
      <div class="fc-chip-row">
        <button class="fc-btn" onclick={() => paginate(-1)}>← prev product</button>
        <button class="fc-btn fc-btn--primary" onclick={() => paginate(1)}>next product →</button>
      </div>
      <div style="font-family: var(--fc-mono); font-size: 13px; color: var(--fc-ink-dim);">
        <span style="color: var(--fc-ink-mute);">now viewing</span>
        &nbsp;<span style="color: var(--fc-ink);">product #{productId}</span>
      </div>
    </div>
    <div class="fc-stage__panel fc-stage__panel--light" style="padding: 20px;">
      <CommentWidget config={config}></CommentWidget>
    </div>
  </div>

  <CodePanel label="paginated-example · +page.svelte" code={snippet} />
</div>
