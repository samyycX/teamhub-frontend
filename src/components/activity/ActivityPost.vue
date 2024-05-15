<template>
  <div class="flex post gap-3">
    <div class="flex flex-auto author">
      <img class="flex flex-row avatar" :src="post.author.avatar" />
      <p class="flex align-items-center">{{ post.author.name }}</p>
    </div>
    <div class="flex content">
      <p>{{ post.content }}</p>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const post = ref({
  author: {
    avatar: "test_avatar.jpg",
    name: "测试用户"
  },
  content: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  likes: 666,
  comments: 114514
})
</script>

<style scoped>
p {
  color: var(--text-color);
}
.post {
  border: 2px solid black;
  padding-left: 15px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 8px;
}
.author p {
  margin: 0;
  margin-left: 10px;
}
.content p {
  text-align: left;
}
</style>
