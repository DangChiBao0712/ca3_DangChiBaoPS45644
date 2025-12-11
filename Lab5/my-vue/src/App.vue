<script setup>

import { ref } from 'vue'

import PostList from './components/PostList.vue';
import CreatePost from './components/CreatePost.vue';
import bai1 from './components/bai1.vue';
import bai2 from './components/bai2.vue';
import bai3 from './components/bai3.vue';
import sanPham from './components/sanPham.vue';

// Khởi tạo mảng posts rỗng bằng ref
const posts = ref([])

// Hàm nhận bài viết mới và thêm vào mảng posts
function addPost(post) {
  posts.value.push(post)
}

</script>
  
<template>
  <bai1/>
  <hr>
  <bai2/>
  <hr>
  <bai3/>
  <hr>
  <div id="app">
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" /> 
    
    <PostList :posts="posts" />
  </div>
  <sanPham/>
  <hr>
  
</template>

<style>


/* Thêm các styles cơ bản khác nếu cần (ví dụ: cho h3, h4 để màu sắc hiển thị) */
.text-success { color: #28a745; }
.text-danger { color: #dc3545; }
</style>
