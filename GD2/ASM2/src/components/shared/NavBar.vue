<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
    <div class="container">
      <RouterLink :to="{ name: 'home' }" class="navbar-brand">
        Blog Backend
      </RouterLink>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink :to="{ name: 'home' }" class="nav-link" active-class="active">Trang Chủ</RouterLink>
          </li>

          <li class="nav-item" v-if="authStore.isAuthenticated">
            <RouterLink :to="{ name: 'create-post' }" class="nav-link btn btn-sm btn-outline-light ms-2">
              Đăng Bài Mới
            </RouterLink>

           

          </li>

          <li>
             <RouterLink v-if="authStore.isAuthenticated" :to="{ name: 'my-posts' }" class="nav-link">
              Bài viết của tôi
            </RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav">
          <template v-if="authStore.isAuthenticated">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Xin chào, <strong>{{ authStore.currentUser.name }}</strong>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <RouterLink :to="{ name: 'profile' }" class="dropdown-item">
                    Thông tin cá nhân (Y2.4)
                  </RouterLink>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <button class="dropdown-item" @click="handleLogout">
                    Đăng Xuất
                  </button>
                </li>
              </ul>
            </li>
          </template>
          <template v-else>
            <li class="nav-item me-2">
              <RouterLink :to="{ name: 'login' }" class="btn btn-outline-light">
                Đăng Nhập
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'register' }" class="btn btn-primary">
                Đăng Ký
              </RouterLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; // Lấy logic xác thực từ Store

const authStore = useAuthStore();
const router = useRouter();

// Xử lý sự kiện Đăng xuất (Event Handling )
const handleLogout = () => {
  authStore.logout();
  router.push({ name: 'home' });
};
</script> navbar