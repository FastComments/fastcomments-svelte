<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";
  import { theme } from "../theme";
  import CodePanel from "../CodePanel.svelte";

  const snippet = `<script lang="ts">
  import { CommentWidget } from "fastcomments-svelte";

  let config = $state({
    tenantId: "demo",
    urlId: "svelte-test-callbacks",
    onInit: () => console.log("onInit"),
    onRender: () => console.log("onRender"),
    onCommentsRendered: (comments) => console.log("rendered", comments.length),
    commentCountUpdated: (count) => console.log("count", count),
    onAuthenticationChange: (event, data) => console.log(event, data),
    onReplySuccess: (comment) => console.log("reply", comment),
    onVoteSuccess: (c, voteId, direction) => console.log("vote", direction),
    onCommentSubmitStart: (comment, continueFn) => continueFn()
  });
<\/script>

<CommentWidget {config} />`;

  let events = $state<Array<{ id: number; name: string; payload: string; at: string }>>([]);
  let seq = 0;

  function track(name: string, payload: unknown) {
    const pretty = typeof payload === "string" ? payload : JSON.stringify(payload).slice(0, 220);
    events = [{ id: ++seq, name, payload: pretty, at: new Date().toLocaleTimeString() }, ...events].slice(0, 40);
    console.log(`Callback: ${name}`, payload);
  }

  let config: FastCommentsCommentWidgetConfig = $state({
    tenantId: "demo",
    urlId: "svelte-test-callbacks",
    onInit: () => track("onInit", ""),
    onRender: () => track("onRender", ""),
    onCommentsRendered: (comments) => track("onCommentsRendered", `${comments.length} comments`),
    commentCountUpdated: (count) => track("commentCountUpdated", `count=${count}`),
    onAuthenticationChange: (event, data) => track("onAuthenticationChange", { event, data }),
    onReplySuccess: (comment) => track("onReplySuccess", comment),
    onVoteSuccess: (comment, voteId, direction, status) =>
      track("onVoteSuccess", { voteId, direction, status }),
    onImageClicked: (src) => track("onImageClicked", src),
    onOpenProfile: (userId) => {
      track("onOpenProfile", userId);
      return false;
    },
    onUserBlocked: (userId, _comment, isBlocked) => track("onUserBlocked", { userId, isBlocked }),
    onCommentFlagged: (userId, _comment, isFlagged) => track("onCommentFlagged", { userId, isFlagged }),
    onCommentEdited: (userId, comment) => track("onCommentEdited", { userId, id: comment?._id }),
    onCommentDeleted: (userId, comment) => track("onCommentDeleted", { userId, id: comment?._id }),
    onCommentSubmitStart: (comment, continueSubmitFn) => {
      track("onCommentSubmitStart", comment);
      continueSubmitFn();
    }
  });

  $effect(() => { config.hasDarkBackground = $theme === "dark"; });
</script>

<div class="fc-demo">
  <header class="fc-demo__head">
    <div>
      <div class="fc-demo__breadcrumb">Flows <em>/ Event Callbacks</em></div>
      <h1 class="fc-demo__title">Event Callbacks</h1>
      <p class="fc-demo__subtitle">Every lifecycle and user-action hook the widget fires, mirrored live in an event
        log. Handy for wiring analytics, audit trails, or custom submission gates.</p>
    </div>
    <div class="fc-demo__actions">
      <span class="fc-tag fc-tag--brand">Tenant · demo</span>
      <span class="fc-tag">Events captured · {events.length}</span>
    </div>
  </header>

  <div style="display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.9fr); gap: 18px;">
    <div class="fc-stage__panel fc-stage__panel--light" style="min-width: 0;">
      <CommentWidget config={config}></CommentWidget>
    </div>
    <div class="fc-stage__panel" style="display: flex; flex-direction: column; gap: 14px;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span style="font-family: var(--fc-mono); font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--fc-ink-mute);"><span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #27be69; margin-right: 8px;"></span>Event log</span>
        <button class="fc-btn" style="padding: 6px 12px; font-size: 11px;" on:click={() => (events = [])}>
          clear
        </button>
      </div>
      <div class="fc-log">
        {#if events.length === 0}
          <span class="fc-log__line">&gt; waiting for events...</span>
        {/if}
        {#each events as e}
          <span class="fc-log__line fc-log__line--in">[{e.at}] {e.name} <span style="color: var(--fc-ink-mute);">&middot; {e.payload}</span></span>
        {/each}
      </div>
    </div>
  </div>

  <CodePanel label="callbacks-example · +page.svelte" code={snippet} />
</div>

<style>
  @media (max-width: 1080px) {
    .fc-demo > div[style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
    }
  }
</style>
