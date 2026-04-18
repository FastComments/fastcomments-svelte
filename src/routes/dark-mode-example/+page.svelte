<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  let isDark = $state($theme === "dark");

  let config: FastCommentsCommentWidgetConfig = $state({
    tenantId: "demo",
    urlId: "svelte-test-dark-mode"
  });

  $effect(() => { config.hasDarkBackground = isDark; });

  function setDark(next: boolean) {
    isDark = next;
  }

  const snippet = `<script lang="ts">
  import { CommentWidget } from "fastcomments-svelte";

  let isDark = $state(false);
  let config = $state({
    tenantId: "demo",
    urlId: "svelte-test-dark-mode"
  });

  $effect(() => { config.hasDarkBackground = isDark; });
<\/script>

<button onclick={() => isDark = false}>Light</button>
<button onclick={() => isDark = true}>Dark</button>

<CommentWidget {config} />`;
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Flows <em>/ Dark Mode</em></div>
      <h1 class="fc-demo__title">Dark Mode</h1>
      <p class="fc-demo__subtitle">Toggle the widget theme at runtime. The comment widget responds to
        <code style="font-family: var(--fc-mono); color: var(--fc-ink);">hasDarkBackground</code> and re-renders
        immediately.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Active · {isDark ? "dark" : "light"}</span>
    </div>
  </header>

  <div class="fc-stage__panel" style="padding: 20px;">
    <div style="display: flex; gap: 10px; padding-bottom: 16px; box-shadow: inset 0 -1px 0 0 var(--fc-border); margin-bottom: 20px;">
      <button class="fc-btn" class:fc-btn--primary={!isDark} onclick={() => setDark(false)}>Light</button>
      <button class="fc-btn" class:fc-btn--primary={isDark} onclick={() => setDark(true)}>Dark</button>
    </div>
    <div style="padding: 24px; border-radius: 12px; transition: background 250ms ease, color 250ms ease; background: {isDark ? '#0b0b0b' : '#ffffff'}; color: {isDark ? '#fff' : '#111'};">
      <CommentWidget config={config}></CommentWidget>
    </div>
  </div>

  <CodePanel label="dark-mode-example · +page.svelte" code={snippet} />
</div>
