<template>
  <div class="flex flex-row comment gap-2">
   <img class="flex avatar border-round" :src="props.comment.author.avatar" />
   <div class="flex flex-row gap-3 right">
    <p class="flex align-items-start flex-nowrap author-name">{{ props.comment.author.name }}</p>
    <p class="flex align-items-start content">{{ props.comment.content }}</p>
   </div>
  </div> 
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  comment: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.avatar {
 width: 1.5em;
 height: 1.5em;
}
.author-name {
  margin: 0;
  text-wrap: nowrap;
  color: var(--text-color);
  font-size: 0.9em;
}
.content {
 margin: 0;
 text-align: left;
 color: var(--text-color);
  font-size: 0.9em;
}
</style>
