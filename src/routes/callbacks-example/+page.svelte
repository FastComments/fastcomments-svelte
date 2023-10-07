<div class="content">
  <div class="welcome">
    <h2>Callbacks</h2>
    <p>An example using all callbacks. Check the console for logs for each callback invocation.</p>
  </div>
</div>

<script lang="ts">
  import CommentWidget from "$lib/CommentWidget.svelte";
  import type { FastCommentsCommentWidgetConfig } from "fastcomments-typescript";

  let config: FastCommentsCommentWidgetConfig = {
    tenantId: "demo",
    urlId: "svelte-test-callbacks",
    onInit: () => console.log('Callback: onInit'),
    onRender: () => console.log('Callback: onRender'),
    onCommentsRendered: (comments) => console.log('Callback: onCommentsRendered', comments),
    commentCountUpdated: (count) => console.log('Callback: commentCountUpdated', count),
    onAuthenticationChange: (event, data) => console.log('Callback: onAuthenticationChange', event, data),
    onReplySuccess: (comment) => console.log('Callback: onReplySuccess', comment),
    onVoteSuccess: (comment, voteId, direction, status) => console.log('Callback: onVoteSuccess', comment, voteId, direction, status),
    onImageClicked: (src) => console.log('Callback: onImageClicked', src),
    onOpenProfile: (userId) => {
      console.log('Callback: onOpenProfile', userId);
      return false;
    },
    onUserBlocked: (userId, comment, isBlocked) => {
      console.log('Callback: onUserBlocked', userId, comment, isBlocked);
    },
    onCommentFlagged: (userId, comment, isFlagged) => {
      console.log('Callback: onCommentFlagged', userId, comment, isFlagged);
    },
    onCommentEdited: (userId, comment) => {
      console.log('Callback: onCommentEdited', userId, comment);
    },
    onCommentDeleted: (userId, comment) => {
      console.log('Callback: onCommentDeleted', userId, comment);
    },
    onCommentSubmitStart: (comment, continueSubmitFn, _cancelFn) => {
      console.log('Callback: onCommentSubmitStart', comment, continueSubmitFn, _cancelFn);
      continueSubmitFn(); // call this when to continue submitting. can use async.
    },
  };

</script>
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
