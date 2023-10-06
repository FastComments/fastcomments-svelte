<script lang="ts">
    import JSComponent from '$lib/actions.ts';
    import type { FastCommentsLiveChatWidgetConfig } from 'fastcomments-typescript';

    export let config: FastCommentsLiveChatWidgetConfig;

    let componentConfig = {
        name: 'fastcomments-live-chat-widget',
        windowName: 'FastCommentsLiveChat',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/embed-live-chat.min.js' : 'https://cdn.fastcomments.com/js/embed-live-chat.min.js',
        widgetConfig: config
    };

    // Use a reactive assignment to update componentConfig when config changes
    $: {
        componentConfig = {
            ...componentConfig,
            widgetConfig: config
        };
    }
</script>

<div use:JSComponent={componentConfig}></div>
