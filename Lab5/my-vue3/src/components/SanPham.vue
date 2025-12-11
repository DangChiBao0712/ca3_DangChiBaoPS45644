<template>
 <div>
    <h2>Tạo bài viết mới</h2>
    <input v-model="maSp" placeholder="Mã sp" />
    <input v-model="tenSP" placeholder="Tên sp" />
        <input v-model="soLuong" placeholder="Số lượng" />

            <input v-model="donGia" placeholder="Đơn giá" />

    <button @click="submitPost">Tải</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  
  // Sử dụng defineEmits để emit sự kiện
  const emit = defineEmits(['add-post'])
  
  const maSp = ref('')
  const tenSP = ref('')
  const soLuong = ref('')
   const donGia = ref('')
  
  function submitPost() {
    if (maSp.value && tenSP.value && soLuong.value && donGia.value) {
      const newPost = {
        maSp: maSp.value,
        tenSP: tenSP.value,
        soLuong: Number( soLuong.value),
        donGia: Number( donGia.value)
      }
  
      // Gửi sự kiện 'add-post' với dữ liệu của bài viết
      emit('add-post', newPost)
  
      // Reset fields
      maSp.value = ''
      tenSP.value = ''
      soLuong.value = ''
       donGia.value = ''
    }
  }
</script>

<style>
  input,
  textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>