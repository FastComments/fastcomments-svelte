<script lang="ts">
  import JSComponent from "$lib/actions.ts";
  import type { FastCommentsImageChatWidgetConfig } from "fastcomments-typescript";
  import { onMount } from "svelte";
  import type { JSComponentConfig } from "./actions.js";

  let componentRoot;
  export let config: FastCommentsImageChatWidgetConfig;

  let componentConfig: JSComponentConfig = {
    name: "fastcomments-image-chat-widget",
    windowName: "FastCommentsImageChat",
    src: config.region === "eu" ? "https://cdn-eu.fastcomments.com/js/embed-image-chat.min.js" : "https://cdn.fastcomments.com/js/embed-image-chat.min.js",
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
    componentConfig.customTarget = componentRoot.querySelector(".image-slot");
  });
</script>

<div use:JSComponent={componentConfig} bind:this={componentRoot}>
  <slot name="image" class="image-slot">
    <img src="https://fastcomments.com/images/image-chat-demo-1.jpg" alt="A Stream" />
  </slot>
</div>
