<script lang="ts">
    import JSComponent from '$lib/actions.js';
    import type { FastCommentsCommentWidgetConfig } from 'fastcomments-typescript';

    interface Props { config: FastCommentsCommentWidgetConfig; }
    let { config }: Props = $props();

    let componentConfig = $derived({
        name: 'fastcomments-widget',
        windowName: 'FastCommentsUI',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/embed-v2.min.js' : 'https://cdn.fastcomments.com/js/embed-v2.min.js',
        widgetConfig: config
    });
</script>

<div use:JSComponent={componentConfig}></div>
