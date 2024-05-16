<template>
 <div class="flex flex-column gap-6">
  <div class="flex flex-row comment" :key="comment.id" v-for="comment in comments">
   <ActivitySingleComment :comment="comment"></ActivitySingleComment>
  </div>
 </div> 
</template>

<script setup>
import { ref } from 'vue';
import ActivitySingleComment from "./ActivitySingleComment.vue"

const user = {
 avatar: require("@/assets/test_avatar.jpg"),
 name: "测试用户"
}

var id = {
 value: 0
};
id.call = () => {
 return this.value++
};

const comment = {
 id: id,
 author: user,
 content: "测试，测试测试测试测试测试测试测试测试。"
}
const complexComment = {
 id: id,
 author: user,
 content: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
 subComments: [
  comment, comment, comment
 ]
}
const comments = ref([
 complexComment,
 comment,
 comment
])
</script>

