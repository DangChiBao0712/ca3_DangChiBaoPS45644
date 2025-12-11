<template>
  <div id="app-wrapper">
    <Navbar />
    
    <main class="container-fluid py-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
// Bạn cần đảm bảo đã tạo file Navbar.vue trong src/components/shared/
import Navbar from '@/components/shared/NavBar.vue';
import { RouterView } from 'vue-router'; 
</script>

<style>
/* Bạn có thể xóa hết CSS mặc định để tránh xung đột với Bootstrap */
/* Giữ lại style tối thiểu nếu cần, ví dụ: */
#app-wrapper {
  min-height: 100vh;
}
</style>