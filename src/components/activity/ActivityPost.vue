<template>
  <div class="flex post gap-1">
    <div class="flex author">
      <img class="flex avatar" :src="post.author.avatar" />
      <p class="flex align-items-center">{{ post.author.name }}</p>
      <p class="flex align-items-center" style="margin-left: auto; margin-right: 10px">{{ nowGmtTime }}</p>
    </div>
    <div class="flex content">
      <p>{{ post.content }}</p>
    </div>
    <div class="flex interaction">
      <Button :icon='liked ? "pi pi-thumbs-up-fill" : "pi pi-thumbs-up"' @click="onLike" raised text/>
      <Button icon="pi pi-comments" label="显示评论" raised text/>
      <p v-if="post.otherLikes.length != 0" class="flex other-likes">{{ post.otherLikes.join(",") + " 赞了" }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Button from 'primevue/button'


const post = ref({
  author: {
    avatar: "test_avatar.jpg",
    name: "测试用户"
  },
  time: Date.now(),
  content: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  likes: 666,
  otherLikes: ["测试用户2", "测试用户3"],
  comments: 114514
})

const currentUser = "测试用户4"

const nowGmtTime = computed(() => {
  var date = new Date(post.value.time)
  console.log(date);
  return `${date.getFullYear()}年${date.getMonth()}月${date.getDay()}日 ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`
})
var liked = ref(false)
const onLike = () => {
  if (liked.value) {
    post.value.likes -= 1
    post.value.otherLikes = post.value.otherLikes.filter((v) => v != currentUser)
  } else {
    post.value.likes += 1
    post.value.otherLikes.push(currentUser)
  }
  liked.value = !liked.value; 
}

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
.other-likes {
  font-size: 13px;
  margin-left: auto;
  margin-right: 10px;
  color: var(--text-color);
}
</style>
