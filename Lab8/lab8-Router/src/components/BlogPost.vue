<template>
  <div>
    <h2>Chi tiết Bài viết Blog</h2>

    <div v-if="post">
      <p><b>ID:</b> {{ post.id }}</p>
      <p><b>Tiêu đề:</b> {{ post.title }}</p>
      <p><b>Nội dung:</b> {{ post.content }}</p>
    </div>

    <p v-else>Bài viết không tồn tại</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getBlogPostById } from '../data/blogPosts'

// Lấy route hiện tại
const route = useRoute()

// Lấy id từ URL
const id = route.params.id

// Biến lưu 1 bài viết (1 phần tử mảng)
const post = ref(null)

// Khi component được load
onMounted(() => {
  post.value = getBlogPostById(id)
})
</script>
