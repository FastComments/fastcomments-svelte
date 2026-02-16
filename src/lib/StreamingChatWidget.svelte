<script lang="ts">
    import JSComponent from '$lib/actions.js';
    import type { FastCommentsLiveChatWidgetConfig } from 'fastcomments-typescript';

    interface Props { config: FastCommentsLiveChatWidgetConfig; }
    let { config }: Props = $props();

    let componentConfig = $derived({
        name: 'fastcomments-live-chat-widget',
        windowName: 'FastCommentsLiveChat',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/embed-live-chat.min.js' : 'https://cdn.fastcomments.com/js/embed-live-chat.min.js',
        widgetConfig: config
    });
</script>

<div use:JSComponent={componentConfig}></div>
