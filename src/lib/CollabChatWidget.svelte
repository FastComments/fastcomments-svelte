<script lang="ts">
  import JSComponent from "$lib/actions.js";
  import type { FastCommentsCollabChatWidgetConfig } from "fastcomments-typescript";
  import { onMount } from "svelte";
  import type { JSComponentConfig } from "./actions.js";
  import type { Snippet } from "svelte";

  interface Props {
    config: FastCommentsCollabChatWidgetConfig;
    toolbar?: Snippet;
    content?: Snippet;
  }
  let { config, toolbar, content }: Props = $props();

  let componentRoot: HTMLDivElement;

  let componentConfig: JSComponentConfig = $derived({
    name: "fastcomments-collab-chat-widget",
    windowName: "FastCommentsCollabChat",
    src: config.region === "eu" ? "https://cdn-eu.fastcomments.com/js/embed-collab-chat.min.js" : "https://cdn.fastcomments.com/js/embed-collab-chat.min.js",
    widgetConfig: config,
    waitForCustomTarget: true
  });

  onMount(function handleMount() {
    componentConfig.customTarget = componentRoot.querySelector(".content-slot") as HTMLElement;
    (componentConfig.widgetConfig as Record<string, unknown>).toolbarTarget = componentRoot.querySelector(".toolbar-slot") as HTMLElement;
  });
</script>

<div use:JSComponent={componentConfig} bind:this={componentRoot}>
  <div class="toolbar-slot">
    {#if toolbar}
      {@render toolbar()}
    {/if}
  </div>
  <div class="content-slot">
    {#if content}
      {@render content()}
    {/if}
  </div>
</div>
