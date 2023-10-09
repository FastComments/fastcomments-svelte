<script lang="ts">
  import JSComponent from "$lib/actions.ts";
  import type { FastCommentsCollabChatWidgetConfig } from "fastcomments-typescript";
  import { onMount } from "svelte";
  import type { JSComponentConfig } from "./actions.js";

  let componentRoot;
  export let config: FastCommentsCollabChatWidgetConfig;

  let componentConfig: JSComponentConfig = {
    name: "fastcomments-collab-chat-widget",
    windowName: "FastCommentsCollabChat",
    src: config.region === "eu" ? "https://cdn-eu.fastcomments.com/js/embed-collab-chat.min.js" : "http://localhost:3001/js/embed-collab-chat.min.js",
    widgetConfig: config,
    waitForCustomTarget: true
  };

  // Use a reactive assignment to update componentConfig when config changes
  $: {
    componentConfig = {
      ...componentConfig,
      widgetConfig: config
    };
  }

  onMount(function handleMount() {
    componentConfig.customTarget = componentRoot.querySelector(".content-slot");
    componentConfig.widgetConfig.toolbarTarget = componentRoot.querySelector(".toolbar-slot");
  });
</script>

<div use:JSComponent={componentConfig} bind:this={componentRoot}>
  <slot name="toolbar" class="toolbar-slot"></slot>
  <slot name="content" class="content-slot"></slot>
</div>
