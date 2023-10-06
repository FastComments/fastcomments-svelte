<div class="content">
  <div class="welcome">
    <h2>User Activity Feed</h2>
    <p>Shows the recent activity for a user.</p>
  </div>
</div>

<script lang="ts">
  import UserActivityFeedWidget from "$lib/UserActivityFeedWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";

  export interface FastCommentsUserActivityFeedWidgetConfig extends FastCommentsCommentWidgetConfig {
    /** With SSO, this will be tenantId + ':' + userId. With Simple SSO this will be tenantId + ':' + userEmail. **/
    userId: string;
  }

  let config: FastCommentsUserActivityFeedWidgetConfig = {
    tenantId: "demo",
    userId: "demo"
  };

</script>
<UserActivityFeedWidget config={config}></UserActivityFeedWidget>

<style>
    .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .welcome {
        margin: 40px auto;
        width: fit-content;
    }
</style>
