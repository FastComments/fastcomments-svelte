<script lang="ts">
    import JSComponent from '$lib/actions.js';
    import type { FastCommentsCommentCountConfig } from 'fastcomments-typescript';

    interface Props { config: FastCommentsCommentCountConfig; }
    let { config }: Props = $props();

    let componentConfig = $derived({
        name: 'fastcomments-count-widget',
        windowName: 'FastCommentsCommentCount',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/widget-comment-count.min.js' : 'https://cdn.fastcomments.com/js/widget-comment-count.min.js',
        widgetConfig: config
    });
</script>

<div use:JSComponent={componentConfig}></div>
