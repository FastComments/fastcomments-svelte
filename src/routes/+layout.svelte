<script lang="ts">
  import { page } from "$app/stores";
  import { theme, setTheme } from "./theme";
  import "./fastcomments-showcase.css";

  type Entry = { href: string; label: string; kind: "widget" | "flow"; hint: string };

  const widgets: Entry[] = [
    { href: "/comment-widget-example", label: "Live Comment Widget", kind: "widget", hint: "Live Commenting" },
    { href: "/comment-count-example", label: "Comment Count", kind: "widget", hint: "Inline count badge" },
    { href: "/streaming-chat-example", label: "Streaming Chat", kind: "widget", hint: "Firehose live feed" },
    { href: "/collab-chat-example", label: "Collab Chat", kind: "widget", hint: "Realtime document chat" },
    { href: "/image-chat-example", label: "Image Chat", kind: "widget", hint: "Spatial image comments" },
    { href: "/reviews-summary-example", label: "Reviews Summary", kind: "widget", hint: "Star ratings overview" },
    { href: "/user-activity-feed-example", label: "Activity Feed", kind: "widget", hint: "Per-user timeline" }
  ];

  const flows: Entry[] = [
    { href: "/callbacks-example", label: "Event Callbacks", kind: "flow", hint: "React to widget lifecycle" },
    { href: "/dark-mode-example", label: "Dark Mode", kind: "flow", hint: "Theme switching" },
    { href: "/eu-example", label: "EU Region", kind: "flow", hint: "Data residency" },
    { href: "/paginated-example", label: "Thread Pagination", kind: "flow", hint: "Change page / product / url" },
    { href: "/simple-sso-example", label: "Simple SSO", kind: "flow", hint: "Unsigned identity" },
    { href: "/secure-sso-example", label: "Secure SSO", kind: "flow", hint: "HMAC-signed identity" }
  ];

  $: currentPath = $page.url.pathname;
</script>

<div class="fc-shell">
  <aside class="fc-rail">
    <a class="fc-brand" href="/">
      <img class="fc-brand__logo fc-brand__logo--light" src="https://fastcomments.com/images/svg/v2/logo.svg" alt="FastComments" />
      <img class="fc-brand__logo fc-brand__logo--dark" src="https://fastcomments.com/images/svg/v2/logo_white.svg" alt="" aria-hidden="true" />
      <span class="fc-brand__wordmark">
        <span class="fc-brand__name">FastComments</span>
        <span class="fc-brand__slug">svelte · showcase</span>
      </span>
    </a>

    <nav class="fc-nav" aria-label="Examples">
      <div class="fc-nav__group">
        <div class="fc-nav__heading"><span>01</span><em>Widgets</em></div>
        {#each widgets as item}
          <a
            class="fc-nav__item"
            class:is-active={currentPath === item.href}
            href={item.href}
          >
            <span class="fc-nav__item-label">{item.label}</span>
            <span class="fc-nav__item-hint">{item.hint}</span>
          </a>
        {/each}
      </div>

      <div class="fc-nav__group">
        <div class="fc-nav__heading"><span>02</span><em>Flows &amp; Configuration</em></div>
        {#each flows as item}
          <a
            class="fc-nav__item"
            class:is-active={currentPath === item.href}
            href={item.href}
          >
            <span class="fc-nav__item-label">{item.label}</span>
            <span class="fc-nav__item-hint">{item.hint}</span>
          </a>
        {/each}
      </div>
    </nav>

    <footer class="fc-rail__foot">
      <div class="fc-theme-toggle" role="group" aria-label="Theme">
        <button type="button" class="fc-theme-toggle__btn" class:is-active={$theme === "light"} on:click={() => setTheme("light")}>Light</button>
        <button type="button" class="fc-theme-toggle__btn" class:is-active={$theme === "dark"} on:click={() => setTheme("dark")}>Dark</button>
      </div>
      <div>
        <code>npm i fastcomments-svelte</code>
      </div>
      <a href="https://fastcomments.com" rel="noopener">fastcomments.com &nearr;</a>
    </footer>
  </aside>

  <main class="fc-stage">
    <slot />
  </main>
</div>
