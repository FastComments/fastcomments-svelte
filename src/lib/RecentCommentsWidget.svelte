<script lang="ts">
    import JSComponent from '$lib/actions.js';

    export interface FastCommentsRecentCommentsConfig {
        tenantId: string;
        urlId?: string;
        count?: number;
        hasDarkBackground?: boolean;
        translations?: Record<string, string>;
        region?: 'eu' | string;
        apiHost?: string;
    }

    interface Props { config: FastCommentsRecentCommentsConfig; }
    let { config }: Props = $props();

    let componentConfig = $derived({
        name: 'fastcomments-recent-comments',
        windowName: 'FastCommentsRecentCommentsV2',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/widget-recent-comments-v2.min.js' : 'https://cdn.fastcomments.com/js/widget-recent-comments-v2.min.js',
        widgetConfig: config
    });
</script>

<div use:JSComponent={componentConfig}></div>
