<template>
  <div class="column">
    <div class="message">
      <div class="message-header">
        Comment by {{comment.posterName}}
      </div>
      <div class="message-body">
        <p><span v-html="renderedBody"></span></p>
      </div>
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
