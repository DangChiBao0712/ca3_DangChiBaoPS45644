<template>
  <div class="app-container">
    <Navbar />

    <main class="container mt-4">
      <RouterView />   <!-- Tự động load trang -->
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
<style></style>