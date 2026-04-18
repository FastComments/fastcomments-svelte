<script lang="ts">
  import ReviewsSummaryWidget from "$lib/ReviewsSummaryWidget.svelte";
  import type { FastCommentsReviewsSummaryConfig } from "$lib/ReviewsSummaryWidget.svelte";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  let config: FastCommentsReviewsSummaryConfig = $state({
    tenantId: "demo",
    urlId: "demo-ratings"
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });

  const snippet = `<script lang="ts">
  import { ReviewsSummaryWidget } from "fastcomments-svelte";

  let config = {
    tenantId: "demo",
    urlId: "demo-ratings"
  };
<\/script>

<ReviewsSummaryWidget {config} />`;
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Widgets <em>/ Reviews Summary</em></div>
      <h1 class="fc-demo__title">Reviews Summary</h1>
      <p class="fc-demo__subtitle">A compact star-rating aggregate with per-rating breakdown. Drops into product
        pages, listing previews, and marketing components wherever aggregate sentiment matters more than individual
        comments.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Tenant · demo</span>
    </div>
  </header>

  <div class="fc-stage__panel fc-stage__panel--light">
    <ReviewsSummaryWidget config={config} />
  </div>

  <CodePanel label="reviews-summary-example · +page.svelte" code={snippet} />
</div>
