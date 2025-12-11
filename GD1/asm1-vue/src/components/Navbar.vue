<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
    <div class="container py-2">

      <!-- Logo / Brand -->
      <RouterLink class="navbar-brand fw-bolder fs-4 text-dark" to="/">
        <i class="bi bi-book-half me-2 text-primary"></i> Blog Poly
      </RouterLink>

      <!-- Toggler cho Mobile -->
      <button 
        class="navbar-toggler border-0" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">

          <!-- Tạo bài đăng -->
          <li class="nav-item me-lg-3 mb-2 mb-lg-0">
            <RouterLink class="btn btn-primary rounded-pill fw-semibold" to="/create-post">
              <i class="bi bi-pencil-square me-1"></i> Tạo bài đăng
            </RouterLink>
          </li>

          <li class="nav-item d-none d-lg-block">
            <span class="text-muted mx-2">|</span>
          </li>

          <!-- Profile -->
          <li class="nav-item me-lg-2">
            <RouterLink class="nav-link text-dark" to="/profile">
              Profile
            </RouterLink>
          </li>
          
          <li class="nav-item d-none d-lg-block">
            <span class="text-muted mx-2">|</span>
          </li>

          <!-- Đăng nhập -->
          <li class="nav-item me-lg-2">
            <RouterLink class="nav-link text-dark" to="/login">
               Đăng nhập
            </RouterLink>
          </li>

          <!-- Đăng ký -->
          <li class="nav-item">
            <RouterLink class="btn btn-outline-primary btn-sm rounded-pill fw-semibold px-3" to="/register">
              Đăng ký
            </RouterLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Nếu cần custom thêm CSS riêng cho Navbar, thêm ở đây */
</style>
