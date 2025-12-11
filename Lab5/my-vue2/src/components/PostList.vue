<template>
  <h2>Danh sách bài viết</h2>
  <!-- <div v-for="(post, index) in posts" :key="index" :class="['post', { 'highlighted': post.title.length > 20 }]" :style="{ backgroundColor: post.backgroundColor, color: post.textColor }">
    <h3 class="text-success">{{ post.title }}</h3>
    <h4 class="text-danger">{{ post.author }}</h4>
    <p>{{ post.content }}</p>
  </div> -->

  <table class="table">
    <thead>
      <tr>
        <th>No.</th>
        <th>Title</th>
        <th>Author</th>
        <th>Content</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(post, index) in posts" :key="index" :class="{ 'highlighted': post.title.length > 20 }">
        
        <td>{{ index + 1 }}</td> 
        
        <td>{{ post.title }}</td>
        <td>{{ post.author }}</td>
        <td>{{ post.content }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import { defineProps } from 'vue';

  // Định nghĩa props
  defineProps({
    posts: {
      type: Array,
      required: true,
    }
  });
</script>

<style>
  .post {
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  
  .highlighted {
    border: 2px solid lightgray;
  }
</style>