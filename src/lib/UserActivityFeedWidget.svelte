
<script lang="ts">
    import JSComponent from '$lib/actions.ts';
    import type { FastCommentsImageChatWidgetConfig } from 'fastcomments-typescript';

    export let config: FastCommentsImageChatWidgetConfig;

    let componentConfig = {
        name: 'fastcomments-user-activity-widget',
        windowName: 'FastCommentsUserActivity',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/embed-user-activity.min.js' : 'https://cdn.fastcomments.com/js/embed-user-activity.min.js',
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
