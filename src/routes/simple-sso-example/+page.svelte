<div class="content">
  <div class="welcome">
    <h2>Simple SSO Example</h2>
    <p>FastComments has two different SSO integrations that we call Simple and Secure SSO. Simple SSO is designed to be
      easy to use, but doesn't feature server-side validation.</p>
    <p>This demonstrates having an async function that gets the user details and passes it to the comment widget. Their
      account will automatically be created or updated.</p>
  </div>
</div>

<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig, FastCommentsSSOSimple } from "fastcomments-typescript";
  import { onMount } from "svelte";

  let config: FastCommentsCommentWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-simple-sso",
    simpleSSO: {
      loginURL: "https://example.com/login", // can also use loginCallback etc
      logoutURL: "https://example.com/logout"
    }
  };

  // this contains an object with userDataJSONBase64, which is a base64 version of FastCommentsSSOUserData
  async function getLoggedInUserInfo(): Promise<FastCommentsSSOSimple> {
    // example service with server-side code here: https://github.com/FastComments/fastcomments-code-examples/tree/master/sso/nodejs
    // start and run this example to make this component work.
    // Replace this with your own API call to get the logged-in user.
    return Promise.resolve({
      avatar: "https://staticm.fastcomments.com/1582299581264-69384190_3015192525174365_476457575596949504_o.jpg", // optional
      email: "someone@somewhere.com", // optional
      username: "Someone", // required
      websiteUrl: "https://blog.fastcomments.com" // optional
    });
  }

  onMount(async () => {
    const userInfo = await getLoggedInUserInfo();
    config.simpleSSO = {
      ...config.simpleSSO, // so we retain loginURL/logoutURL config
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
