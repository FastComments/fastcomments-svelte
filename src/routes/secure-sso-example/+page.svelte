<div class="content">
  <div class="welcome">
    <h2>Secure SSO Example</h2>
    <p>FastComments has two different SSO integrations that we call Simple and Secure SSO. Secure SSO uses server-side
      hashing of the payload.</p>
    <p>This demonstrates having an async function that gets the user details and passes it to the comment widget. Their
      account will automatically be created or updated.</p>
    <p>Requires running example server code <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso/node-express" target="_blank">on github</a>.</p>
  </div>
</div>

<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";
  import type { FastCommentsSSO } from "fastcomments-typescript/src/fast-comments-comment-widget-config";
  import { onMount } from "svelte";

  let config: FastCommentsCommentWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-secure-sso",
    sso: {
      loginURL: 'https://example.com/login', // can also use loginCallback etc
      logoutURL: 'https://example.com/logout',
    }
  };

  // this contains an object with userDataJSONBase64, which is a base64 version of FastCommentsSSOUserData
  async function getLoggedInUserInfo(): Promise<Pick<FastCommentsSSO, "userDataJSONBase64" | "verificationHash" | "timestamp">> {
    // example service with server-side code here: https://github.com/FastComments/fastcomments-code-examples/tree/master/sso/node-express
    // start and run this example to make this component work.
    // Replace this with your own API call to get the logged-in user.
    const response = await fetch("http://localhost:3003/sso-user-info", {
      headers: {
        "Accept": "application/json"
      }
    });
    return await response.json();
  }

  onMount(async () => {
    const userInfo = await getLoggedInUserInfo();
    config.sso = {
      ...config.sso, // so we retain loginURL/logoutURL config
      ...userInfo
    };
  });

</script>
<div class="controls">
</div>
<CommentWidget config={config}></CommentWidget>

<style>
    .content {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .welcome {
        margin: 40px auto;
        width: fit-content;
    }
</style>
