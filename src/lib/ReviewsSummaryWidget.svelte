<script lang="ts">
    import JSComponent from '$lib/actions.js';

    export interface FastCommentsReviewsSummaryConfig {
        tenantId: string;
        urlId?: string;
        region?: 'eu';
        hasDarkBackground?: boolean;
    }

    interface Props { config: FastCommentsReviewsSummaryConfig; }
    let { config }: Props = $props();

    let componentConfig = $derived({
        name: 'fastcomments-reviews-summary-widget',
        windowName: 'FastCommentsReviewsSummaryWidget',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/embed-reviews-summary.min.js' : 'https://cdn.fastcomments.com/js/embed-reviews-summary.min.js',
        widgetConfig: config
    });
</script>

<div use:JSComponent={componentConfig}></div>
