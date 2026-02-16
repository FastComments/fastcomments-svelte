<script lang="ts">
  import JSComponent from "$lib/actions.js";
  import type { FastCommentsImageChatWidgetConfig } from "fastcomments-typescript";
  import { onMount } from "svelte";
  import type { JSComponentConfig } from "./actions.js";
  import type { Snippet } from "svelte";

  interface Props {
    config: FastCommentsImageChatWidgetConfig;
    image?: Snippet;
  }
  let { config, image }: Props = $props();

  let componentRoot: HTMLDivElement;

  let componentConfig: JSComponentConfig = $derived({
    name: "fastcomments-image-chat-widget",
    windowName: "FastCommentsImageChat",
    src: config.region === "eu" ? "https://cdn-eu.fastcomments.com/js/embed-image-chat.min.js" : "https://cdn.fastcomments.com/js/embed-image-chat.min.js",
    widgetConfig: config,
    waitForCustomTarget: true
  });

  onMount(function handleMount() {
    componentConfig.customTarget = componentRoot.querySelector(".image-slot") as HTMLElement;
  });
</script>

<div use:JSComponent={componentConfig} bind:this={componentRoot}>
  <div class="image-slot">
    {#if image}
      {@render image()}
    {:else}
      <img src="https://fastcomments.com/images/image-chat-demo-1.jpg" alt="A Stream" />
    {/if}
  </div>
</div>
