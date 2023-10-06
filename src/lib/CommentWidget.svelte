<script lang="ts">
    import JSComponent from '$lib/actions.ts';
    import type { FastCommentsCommentWidgetConfig } from 'fastcomments-typescript';

    export let config: FastCommentsCommentWidgetConfig;

    let componentConfig = {
        name: 'fastcomments-widget',
        windowName: 'FastCommentsUI',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/embed-v2.min.js' : 'https://cdn.fastcomments.com/js/embed-v2.min.js',
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
