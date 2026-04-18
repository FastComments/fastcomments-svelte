<script lang="ts">
  import UserActivityFeedWidget from "$lib/UserActivityFeedWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  interface FastCommentsUserActivityFeedWidgetConfig extends FastCommentsCommentWidgetConfig {
    userId: string;
  }

  let config: FastCommentsUserActivityFeedWidgetConfig = $derived({
    tenantId: "demo",
    userId: "demo:someone@somewhere.com",
    hasDarkBackground: $theme === "dark"
  });

  const snippet = `<script lang="ts">
  import { UserActivityFeedWidget } from "fastcomments-svelte";

  // SSO userId format: \`\${tenantId}:\${appUserId}\`
  let config = {
    tenantId: "demo",
    userId: "demo:someone@somewhere.com"
  };
<\/script>

<UserActivityFeedWidget {config} />`;
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Widgets <em>/ Activity Feed</em></div>
      <h1 class="fc-demo__title">User Activity Feed</h1>
      <p class="fc-demo__subtitle">A chronological stream of everything a user has posted or reacted to. Drop it
        onto profile pages, moderation dashboards, or user-activity reports.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Tenant · demo</span>
      <span class="fc-tag">userId · demo:someone@somewhere.com</span>
    </div>
  </header>

  <div class="fc-stage__panel fc-stage__panel--light">
    <UserActivityFeedWidget config={config} />
  </div>

  <CodePanel label="user-activity-feed-example · +page.svelte" code={snippet} />
</div>
