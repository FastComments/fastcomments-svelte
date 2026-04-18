<script lang="ts">
  interface Props {
    label?: string;
    code: string;
  }
  let { label = "example · +page.svelte", code }: Props = $props();

  let copied = $state(false);
  let copyTimer: ReturnType<typeof setTimeout> | null = null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      if (copyTimer) clearTimeout(copyTimer);
      copyTimer = setTimeout(() => { copied = false; }, 1200);
    } catch (_) {}
  }
</script>

<div class="fc-code-panel">
  <div class="fc-code-panel__head">
    <span class="fc-code-panel__head-label">{label}</span>
    <button type="button" class="fc-code-panel__copy" onclick={copy}>{copied ? "Copied" : "Copy"}</button>
  </div>
  <pre class="fc-code-panel__body">{code}</pre>
</div>
