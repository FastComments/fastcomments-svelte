<script lang="ts">
    import JSComponent from '$lib/actions.ts';
    import type { FastCommentsCommentCountConfig } from 'fastcomments-typescript';

    export let config: FastCommentsCommentCountConfig;

    let componentConfig = {
        name: 'fastcomments-count-widget',
        windowName: 'FastCommentsCommentCount',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/widget-comment-count.min.js' : 'https://cdn.fastcomments.com/js/widget-comment-count.min.js',
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
