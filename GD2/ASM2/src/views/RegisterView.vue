<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-success text-white">
            <h3 class="mb-0">Đăng Ký Tài Khoản Mới</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleRegister">
              
              <div v-if="message" :class="['alert', isSuccess ? 'alert-success' : 'alert-danger']" role="alert">
                {{ message }}
              </div>

              <div class="mb-3">
                <label for="name" class="form-label">Tên của bạn:</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="name" 
                  v-model="name" 
                  placeholder="Nhập tên"
                  required
                >
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="email" 
                  v-model="email" 
                  placeholder="Nhập email"
                  required
                >
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Mật khẩu:</label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="password" 
                  v-model="password" 
                  placeholder="Nhập mật khẩu"
                  required
                >
              </div>

              <button 
                type="submit" 
                class="btn btn-success w-100"
              >
                Đăng Ký
              </button>

              <p class="mt-3 text-center">
                Đã có tài khoản? 
                <RouterLink :to="{ name: 'login' }">Đăng nhập</RouterLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth'; // Import Store đã tạo
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

// Khai báo dữ liệu form (Form Binding)
const name = ref('');
const email = ref('');
const password = ref('');
const message = ref('');
const isSuccess = ref(false);

// Logic xử lý khi submit form (Event Handling)
const handleRegister = () => {
    message.value = '';
    isSuccess.value = false;

    // Gọi hàm register từ Store Pinia
    const result = authStore.register(name.value, email.value, password.value);
    
    // Hiển thị thông báo (Class và Style Binding)
    message.value = result.message;
    isSuccess.value = result.success;

    if (result.success) {
        // Đăng ký thành công và tự động đăng nhập (do logic trong auth.js)
        // Chuyển hướng người dùng về Trang Chủ
        setTimeout(() => {
            router.push({ name: 'home' }); 
        }, 1500);
    }
};
</script>