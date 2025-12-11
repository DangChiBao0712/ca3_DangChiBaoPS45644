<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Đăng Nhập Hệ Thống</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleLogin">
              
              <div v-if="error" class="alert alert-danger" role="alert">
                {{ error }}
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="email" 
                  v-model="email" 
                  placeholder="test@fpt.edu.vn"
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
                  placeholder="123456"
                  required
                >
              </div>

              <button 
                type="submit" 
                class="btn btn-primary w-100" 
                :disabled="isLoggingIn"
              >
                {{ isLoggingIn ? 'Đang xử lý...' : 'Đăng Nhập' }}
              </button>

              <p class="mt-3 text-center">
                Chưa có tài khoản? 
                <RouterLink :to="{ name: 'register' }">Đăng ký ngay</RouterLink>
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
import { useAuthStore } from '@/stores/auth';
import { useRouter, RouterLink } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

// Data Binding (Reactivity [cite: 37])
const email = ref('');
const password = ref('');
const error = ref('');
const isLoggingIn = ref(false);


const handleLogin = () => {
    error.value = '';
    isLoggingIn.value = true;

    // Gọi hàm login từ Pinia Store (Y2.1)
    const result = authStore.login(email.value, password.value);
    
    if (result.success) {
        // Đăng nhập thành công
        router.push({ name: 'home' });
    } else {
        // Đăng nhập thất bại
        error.value = result.message;
    }

    isLoggingIn.value = false;
};
</script>