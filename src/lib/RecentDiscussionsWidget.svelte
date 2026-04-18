<script lang="ts">
    import JSComponent from '$lib/actions.js';

    export interface FastCommentsRecentDiscussionsConfig {
        tenantId: string;
        count?: number;
        hasDarkBackground?: boolean;
        translations?: Record<string, string>;
        region?: 'eu' | string;
        apiHost?: string;
    }

    interface Props { config: FastCommentsRecentDiscussionsConfig; }
    let { config }: Props = $props();

    let componentConfig = $derived({
        name: 'fastcomments-recent-discussions',
        windowName: 'FastCommentsRecentDiscussionsV2',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/widget-recent-discussions-v2.min.js' : 'https://cdn.fastcomments.com/js/widget-recent-discussions-v2.min.js',
        widgetConfig: config
    });
</script>

<div use:JSComponent={componentConfig}></div>
