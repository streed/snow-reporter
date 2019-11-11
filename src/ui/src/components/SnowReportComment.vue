<template>
  <div class="message">
    <div class="message-header">
      Comment by {{comment.posterName}} on {{comment.postDate | formatTimestamp}}
    </div>
    <div class="message-body is-flex">
      <p><span v-html="renderedBody"></span></p>
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  props: {
    comment: Object
  },
  components: {
  },
  computed: {
    renderedBody: function () {
      return marked(this.comment.body);
    }
  }
}
</script>
