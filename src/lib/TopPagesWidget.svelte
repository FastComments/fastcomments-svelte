<script lang="ts">
    import JSComponent from '$lib/actions.js';

    export interface FastCommentsTopPagesConfig {
        tenantId: string;
        hasDarkBackground?: boolean;
        region?: 'eu' | string;
        apiHost?: string;
    }

    interface Props { config: FastCommentsTopPagesConfig; }
    let { config }: Props = $props();

    let componentConfig = $derived({
        name: 'fastcomments-top-pages',
        windowName: 'FastCommentsTopPagesV2',
        src: config.region === 'eu' ? 'https://cdn-eu.fastcomments.com/js/widget-top-pages-v2.min.js' : 'https://cdn.fastcomments.com/js/widget-top-pages-v2.min.js',
        widgetConfig: config
    });
</script>

<div use:JSComponent={componentConfig}></div>
