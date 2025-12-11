<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// Import hàm cập nhật trạng thái xác thực từ module tiện ích
import { setAuthStatus } from '../data/blogPost.js' 

const router = useRouter()

// Tạo ref để lưu dữ liệu form (tùy chọn, để minh họa form)
const email = ref('')
const password = ref('')

// Hàm xử lý đăng nhập
function handleLogin() {
    // 1. Giả lập quá trình xác thực thành công:
    // Thường thì bạn sẽ kiểm tra email/password ở đây, nhưng trong Lab này ta giả lập thành công
    
    // 2. Cập nhật trạng thái xác thực (Lưu vào localStorage qua setAuthStatus)
    setAuthStatus(true)
    
    alert('Đăng nhập thành công! Chuyển hướng đến Dashboard.');
    
    // 3. Chuyển hướng người dùng đến Dashboard (Route được bảo vệ)
    // Đây là cách sử dụng điều hướng lập trình (Yêu cầu đề bài)
    router.push({ name: 'Dashboard' }) 
}
</script>

<template>
  <div class="container py-5 vh-100 d-flex align-items-center">
    <div class="row justify-content-center w-100">
      <div class="col-lg-5 col-md-7 col-sm-9">
        
        <div class="card border-0 shadow-lg rounded-4 p-4 p-md-5">
          
          <div class="card-header bg-white border-0 text-center pb-3">
            <h2 class="fw-bold text-dark mb-2">Chào mừng trở lại!</h2>
            <p class="text-muted mb-0">Vui lòng đăng nhập để tiếp tục.</p>
          </div>

          <div class="card-body px-0 pt-3">
            <form @submit.prevent="handleLogin">
              
              <div class="mb-4">
                <label for="emailInput" class="form-label fw-semibold">Địa chỉ Email</label>
                <input 
                  type="email" 
                  class="form-control form-control-lg border-light-subtle rounded-3 py-2" 
                  id="emailInput" 
                  placeholder="name@example.com" 
                  v-model="email"
                  required
                >
              </div>
              
              <div class="mb-4">
                <label for="passwordInput" class="form-label fw-semibold">Mật khẩu</label>
                <input 
                  type="password" 
                  class="form-control form-control-lg border-light-subtle rounded-3 py-2" 
                  id="passwordInput" 
                  placeholder="Nhập mật khẩu của bạn" 
                  v-model="password"
                  required
                >
              </div>
              
              <div class="d-grid gap-2 mt-4">
                <button type="submit" class="btn btn-primary btn-lg fw-bold rounded-pill py-2">
                  <i class="bi bi-box-arrow-in-right me-2"></i> Đăng Nhập
                </button>
                <button type="button" class="btn btn-outline-secondary btn-lg fw-semibold rounded-pill py-2">
                  Đăng nhập bằng Google
                </button>
              </div>
              
              <div class="text-center mt-4">
                <router-link :to="{ name: 'register' }" class="text-primary text-decoration-none fw-semibold">
                    Đăng ký tài khoản mới
                </router-link>
                <span class="mx-2 text-muted">|</span>
                <a href="#" class="text-primary text-decoration-none fw-semibold">Quên mật khẩu?</a>
              </div>

            </form>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Giữ nguyên style */
</style>