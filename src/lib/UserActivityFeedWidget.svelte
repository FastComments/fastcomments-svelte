<script lang="ts">
    import JSComponent from '$lib/actions.js';
    import type { FastCommentsImageChatWidgetConfig } from 'fastcomments-typescript';

    interface Props { config: FastCommentsImageChatWidgetConfig; }
    let { config }: Props = $props();

    let componentConfig = $derived({
        name: 'fastcomments-user-activity-widget',
        windowName: 'FastCommentsUserActivity',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/embed-user-activity.min.js' : 'https://cdn.fastcomments.com/js/embed-user-activity.min.js',
        widgetConfig: config
    });
</script>

<div use:JSComponent={componentConfig}></div>
