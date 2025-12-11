<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card">
          <img :src="item.image" class="img-fluid" alt="Hình ảnh" /> <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3> <p class="card-text">{{ item.content }}</p> <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import dau from '../assets/img/dau.webp';
import raucu from '../assets/img/raucu.webp';
import giavi from '../assets/img/giavi.webp';

const items = ref([
  {
    image: dau, // Thay thế bằng URL hình ảnh thực tế
    title: '8 loại rau củ quả giàu canxi',
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...'
  },
  {
    image: raucu,
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...'
  },
  {
    image: giavi,
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content: 'Đậu làng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất...'
  }
]);
</script>