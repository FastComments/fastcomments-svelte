<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig, FastCommentsSSO } from "fastcomments-typescript";
  import { onMount } from "svelte";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  const snippet = `<script lang="ts">
  import { CommentWidget } from "fastcomments-svelte";
  import type { FastCommentsSSO } from "fastcomments-typescript";
  import { onMount } from "svelte";

  let config = $state({
    tenantId: "demo",
    urlId: "svelte-test-secure-sso",
    sso: {
      loginURL: "https://example.com/login",
      logoutURL: "https://example.com/logout"
    }
  });

  async function getUser() {
    // Your server signs a base64 payload with HMAC
    const res = await fetch("/sso-user-info");
    return await res.json();
  }

  onMount(async () => {
    const info = await getUser();
    config.sso = { ...config.sso, ...info };
  });
<\/script>

<CommentWidget {config} />`;

  let config: FastCommentsCommentWidgetConfig = $state({
    tenantId: "demo",
    urlId: "svelte-test-secure-sso",
    sso: {
      loginURL: "https://example.com/login",
      logoutURL: "https://example.com/logout"
    }
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });

  let status = $state<"idle" | "loading" | "ready" | "error">("idle");
  let errorMsg = $state("");

  async function getLoggedInUserInfo(): Promise<Pick<FastCommentsSSO, "userDataJSONBase64" | "verificationHash" | "timestamp">> {
    const response = await fetch("http://localhost:3003/sso-user-info", {
      headers: { Accept: "application/json" }
    });
    return await response.json();
  }

  onMount(async () => {
    status = "loading";
    try {
      const userInfo = await getLoggedInUserInfo();
      config.sso = { ...config.sso, ...userInfo };
      status = "ready";
    } catch (e) {
      status = "error";
      errorMsg = String(e);
    }
  });
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Flows <em>/ Secure SSO</em></div>
      <h1 class="fc-demo__title">Secure SSO</h1>
      <p class="fc-demo__subtitle">Production-grade identity. Your server HMAC-signs a base64 payload of the user
        record; the widget verifies it before trusting any session. Pair with the
        <a href="https://github.com/fastcomments/fastcomments-code-examples/tree/master/sso/node-express" target="_blank" rel="noopener" style="color: var(--fc-accent-c); text-decoration: underline dashed;">node-express reference server</a>.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Mode · HMAC</span>
      <span class="fc-tag">Status · {status}</span>
    </div>
  </header>

  {#if status === "error"}
    <div class="fc-stage__panel" style="border-color: rgba(255, 59, 48, 0.5); background: rgba(255, 59, 48, 0.05);">
      <div style="font-family: var(--fc-mono); font-size: 13px; color: #ff8b85;">
        Couldn't reach the example SSO server.<br />
        <span style="color: var(--fc-ink-mute);">Run
          <code>node-express</code> from
          <a href="https://github.com/fastcomments/fastcomments-code-examples" target="_blank" rel="noopener" style="color: var(--fc-accent-c); text-decoration: underline dashed;">fastcomments-code-examples</a> on port 3003 to continue.
        </span>
      </div>
    </div>
  {/if}

  <div class="fc-stage__panel fc-stage__panel--light">
    <CommentWidget config={config} />
  </div>

  <CodePanel label="secure-sso-example · +page.svelte" code={snippet} />
</div>
