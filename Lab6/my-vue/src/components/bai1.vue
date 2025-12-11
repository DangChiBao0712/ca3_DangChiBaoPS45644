<template>
  <div class="container">
    <h3>Nhập điểm của bạn:</h3>
    <input type="number" step="0.1" v-model.number="score" />
    <p v-if="score < 5.0">Xếp loại: Yếu</p>
    <p v-else-if="score < 6.5">Xếp loại: Trung bình</p>
    <p v-else-if="score < 8.0">Xếp loại: Khá</p>
    <p v-else-if="score < 9.0">Xếp loại: Giỏi</p>
    <p v-else-if="score >= 9.0">Xếp loại: Xuất sắc</p>
    <p v-else>Vui lòng nhập điểm hợp lệ (0-10)</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const score = ref(null); // Sử dụng null để không có xếp loại ban đầu
</script>