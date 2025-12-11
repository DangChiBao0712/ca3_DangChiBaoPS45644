<template>
  <h2>Danh sách sản phẩm</h2>
  <!-- <div v-for="(post, index) in posts" :key="index" :class="['post', { 'highlighted': post.title.length > 20 }]" :style="{ backgroundColor: post.backgroundColor, color: post.textColor }">
    <h3 class="text-success">{{ post.title }}</h3>
    <h4 class="text-danger">{{ post.author }}</h4>
    <p>{{ post.content }}</p>
  </div> -->

  <table class="table">
    <thead>
      <tr>
        <th>No.</th>
        <th>Mã sản phẩm</th>
        <th>Tên sản phẩm</th>
        <th>Số lượng</th>
        <th>Đơn giá</th>
        <th>Thành tiền</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(post, index) in posts" :key="index" :class="{ 'highlighted': post.tenSP.length > 20 }">
        
        <td>{{ index + 1 }}</td> 
        
        <td>{{ post.maSp }}</td>
        <td>{{ post.tenSP }}</td>
        <td>{{ post.soLuong }}</td>
        <td>{{ post.donGia }}</td>
        <td>{{ post.soLuong * post.donGia }}</td>
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