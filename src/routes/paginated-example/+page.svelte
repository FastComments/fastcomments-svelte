<div class="content">
  <div class="welcome">
    <h2>Paginated Example</h2>
    <p>Demonstrating how to paginate through a product and update the comment widget - for example to paginate through
      products or blog posts. We don't have to pre-create threads for each product. Passing a new product id
      automatically creates a thread when needed.</p>
  </div>
</div>

<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";

  function getProductPageURLID(productId) {
    return "svelt-product" + productId;
  }

  let productId = 0; // whatever your product ids are
  let config: FastCommentsCommentWidgetConfig = {
    tenantId: "demo",
    urlId: getProductPageURLID(productId)
  };

  function paginateProducts(direction: -1 | 1) {
    productId += direction;
    config.urlId = getProductPageURLID(productId);
  }

</script>
<div class="controls">
  <div>Current Product ID: {productId}</div>
  <button on:click={() => paginateProducts(-1)}>Prev Product</button>
  <button on:click={() => paginateProducts(1)}>Next Product</button>
</div>
<CommentWidget config={config}></CommentWidget>

<style>
    .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .controls > * {
        margin: 5px 0;
    }

    .welcome {
        margin: 40px auto;
        width: fit-content;
    }
</style>
