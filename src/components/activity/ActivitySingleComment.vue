<template>
  <div class="flex flex-row comment">
   <img class="flex avatar" :src="props.comment.author.avatar" />
   <div class="flex flex-column gap-3 right">
    <p class="flex justify-center-start author-name">{{ props.comment.author.name }}</p>
    <p class="flex content">{{ props.comment.content }}</p>
    <div class="flex flex-column gap-2" v-if="props.comment.subComments">
     <div class="flex " v-for="comment in props.comment.subComments" :key="comment.id">
      <ActivitySingleSubComment class="flex" :comment="comment"></ActivitySingleSubComment>
     </div> 
    </div>
   </div>
  </div> 
</template>

<script setup>
import { defineProps } from 'vue';
import ActivitySingleSubComment from "./ActivitySingleSubComment.vue"

const props = defineProps({
  comment: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.avatar {
 width: 3.5em;
 height: 3.5em;
 border-radius: 1em;
}
.right {
 margin-left: 1em;
}
.author-name {
 margin: 0;
 color: var(--text-color);
}
.content {
 margin: 0;
 text-align: left;
 color: var(--text-color);
}
</style>
