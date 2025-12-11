<template>
  <div id="app">
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
    <sanPham @add-post="addPost" />
    <dsachSP :posts="posts" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import sanPham from './components/sanPham.vue'
  import dsachSP from './components/dsachSP.vue'
  const posts = ref([])

  function addPost(post) {
    posts.value.push(post)
  }
</script>

<style>
  #app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>