<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig, FastCommentsSSOSimple } from "fastcomments-typescript";
  import { onMount } from "svelte";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  const snippet = `<script lang="ts">
  import { CommentWidget } from "fastcomments-svelte";
  import type { FastCommentsSSOSimple } from "fastcomments-typescript";
  import { onMount } from "svelte";

  let config = $state({
    tenantId: "demo",
    urlId: "svelte-test-simple-sso",
    simpleSSO: {
      loginURL: "https://example.com/login",
      logoutURL: "https://example.com/logout"
    }
  });

  async function getUser(): Promise<FastCommentsSSOSimple> {
    return {
      username: "Someone",
      email: "someone@somewhere.com",
      avatar: "https://example.com/avatar.jpg"
    };
  }

  onMount(async () => {
    const user = await getUser();
    config.simpleSSO = { ...config.simpleSSO, ...user };
  });
<\/script>

<CommentWidget {config} />`;

  let config: FastCommentsCommentWidgetConfig = $state({
    tenantId: "demo",
    urlId: "svelte-test-simple-sso",
    simpleSSO: {
      loginURL: "https://example.com/login",
      logoutURL: "https://example.com/logout"
    }
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });

  let loaded = $state(false);

  async function getLoggedInUserInfo(): Promise<FastCommentsSSOSimple> {
    return Promise.resolve({
      avatar: "https://staticm.fastcomments.com/1582299581264-69384190_3015192525174365_476457575596949504_o.jpg",
      email: "someone@somewhere.com",
      username: "Someone",
      websiteUrl: "https://blog.fastcomments.com"
    });
  }

  onMount(async () => {
    const userInfo = await getLoggedInUserInfo();
    config.simpleSSO = { ...config.simpleSSO, ...userInfo };
    loaded = true;
  });
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Flows <em>/ Simple SSO</em></div>
      <h1 class="fc-demo__title">Simple SSO</h1>
      <p class="fc-demo__subtitle">The zero-backend identity flow. Just hand the widget a user object with a
        username and optional metadata. The account is created or updated automatically on first comment.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Mode · Simple</span>
      <span class="fc-tag">User · {config.simpleSSO?.username ?? "…"}</span>
    </div>
  </header>

  <div class="fc-stage__panel fc-stage__panel--light">
    <CommentWidget config={config} />
  </div>

  <CodePanel label="simple-sso-example · +page.svelte" code={snippet} />
</div>
