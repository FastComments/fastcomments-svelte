<script lang="ts">
  type Entry = { href: string; label: string; kind: string; hint: string };

  const widgets: Entry[] = [
    { href: "/comment-widget-example", label: "Live Comment Widget", kind: "widget", hint: "The full live commenting widget with replies, voting, moderation, and media." },
    { href: "/comment-count-example", label: "Comment Count", kind: "widget", hint: "Lightweight count badge you can drop into lists and feeds." },
    { href: "/streaming-chat-example", label: "Streaming Chat", kind: "widget", hint: "Firehose live feed for high-volume conversations." },
    { href: "/collab-chat-example", label: "Collab Chat", kind: "widget", hint: "Document-anchored realtime chat with presence." },
    { href: "/image-chat-example", label: "Image Chat", kind: "widget", hint: "Pin comments to specific regions of an image." },
    { href: "/reviews-summary-example", label: "Reviews Summary", kind: "widget", hint: "Star-rating aggregate with per-rating breakdown." },
    { href: "/user-activity-feed-example", label: "Activity Feed", kind: "widget", hint: "Per-user timeline of comments and interactions." }
  ];

  const flows: Entry[] = [
    { href: "/callbacks-example", label: "Event Callbacks", kind: "flow", hint: "Hook into widget lifecycle and comment events." },
    { href: "/dark-mode-example", label: "Dark Mode", kind: "flow", hint: "Runtime theme switching driven from your shell." },
    { href: "/eu-example", label: "EU Region", kind: "flow", hint: "Pin data to the EU region for residency requirements." },
    { href: "/paginated-example", label: "Thread Pagination", kind: "flow", hint: "Swap urlId / product at runtime without remount." },
    { href: "/simple-sso-example", label: "Simple SSO", kind: "flow", hint: "Unsigned user identity for rapid prototyping." },
    { href: "/secure-sso-example", label: "Secure SSO", kind: "flow", hint: "HMAC-signed identity for production deployments." }
  ];
</script>

<div class="fc-hero">
  <div>
    <div class="fc-hero__label">fastcomments / svelte · showcase</div>
    <h1 class="fc-hero__title">
      Comment<br />infrastructure<br /><em>for Svelte.</em>
    </h1>
    <p class="fc-hero__body">
      Every widget and integration flow the Svelte library ships with. Running live against the public demo
      tenant. Use the rail to jump between examples; each route is a pristine implementation you can copy straight
      into production.
    </p>
  </div>

  <div class="fc-hero__meta">
    <div class="fc-meta-card">
      <div class="fc-meta-card__key">Widgets</div>
      <div class="fc-meta-card__value fc-meta-card__value--gradient">{widgets.length}</div>
    </div>
    <div class="fc-meta-card">
      <div class="fc-meta-card__key">Flows</div>
      <div class="fc-meta-card__value">{flows.length}</div>
    </div>
    <div class="fc-meta-card">
      <div class="fc-meta-card__key">Package</div>
      <div class="fc-meta-card__value" style="font-family: var(--fc-mono); font-size: 14px; margin-top: 10px;">
        fastcomments-svelte
      </div>
    </div>
    <div class="fc-meta-card">
      <div class="fc-meta-card__key">Runtime</div>
      <div class="fc-meta-card__value" style="font-family: var(--fc-mono); font-size: 14px; margin-top: 10px;">
        SvelteKit &middot; Vite
      </div>
    </div>
  </div>
</div>

<div class="fc-section-title">
  <span>01</span>
  <h2>Widgets</h2>
  <div class="fc-rule"></div>
  <span>{widgets.length} components</span>
</div>
<div class="fc-grid">
  {#each widgets as item, i}
    <a class="fc-card" href={item.href} style="animation: fc-rise 480ms ease both; animation-delay: {i * 40}ms;">
      <span class="fc-card__kind">{item.kind}</span>
      <span class="fc-card__title">{item.label}</span>
      <span class="fc-card__hint">{item.hint}</span>
      <span class="fc-card__cta">Open example</span>
    </a>
  {/each}
</div>

<div class="fc-section-title">
  <span>02</span>
  <h2>Flows &amp; configuration</h2>
  <div class="fc-rule"></div>
  <span>{flows.length} recipes</span>
</div>
<div class="fc-grid">
  {#each flows as item, i}
    <a class="fc-card" href={item.href} style="animation: fc-rise 480ms ease both; animation-delay: {i * 40}ms;">
      <span class="fc-card__kind">{item.kind}</span>
      <span class="fc-card__title">{item.label}</span>
      <span class="fc-card__hint">{item.hint}</span>
      <span class="fc-card__cta">Open example</span>
    </a>
  {/each}
</div>

<style>
  @keyframes -global-fc-rise {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
