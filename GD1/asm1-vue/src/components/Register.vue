<script setup>
const emit = defineEmits(['change-view'])

// Hàm xử lý đăng ký
function handleRegister() {
  // Ở đây bạn có thể thêm logic xác thực và gửi dữ liệu đăng ký
  // Ví dụ: gửi request đến API
  
  // Giả lập đăng ký thành công và chuyển về trang chủ (hoặc trang đăng nhập)
  // emit('change-view', 'home') 
  console.log("Đăng ký thành công!");
}
</script>

<template>
  <div class="container py-5 vh-100 d-flex align-items-center">
    <div class="row justify-content-center w-100">
      <div class="col-lg-5 col-md-7 col-sm-9">
        
        <div class="card border-0 shadow-lg rounded-4 p-4 p-md-5">
          
          <div class="card-header bg-white border-0 text-center pb-3">
            <h2 class="fw-bold text-dark mb-2">Tạo Tài Khoản Mới</h2>
            <p class="text-muted mb-0">Tham gia cộng đồng blog của chúng tôi ngay hôm nay!</p>
          </div>

          <div class="card-body px-0 pt-3">
            <form @submit.prevent="handleRegister">
              
              <div class="mb-4">
                <label for="fullNameInput" class="form-label fw-semibold">Họ tên</label>
                <input 
                  type="text" 
                  class="form-control form-control-lg border-light-subtle rounded-3 py-2" 
                  id="fullNameInput" 
                  placeholder="Nguyễn Văn A" 
                  required
                >
              </div>

              <div class="mb-4">
                <label for="emailInput" class="form-label fw-semibold">Địa chỉ Email</label>
                <input 
                  type="email" 
                  class="form-control form-control-lg border-light-subtle rounded-3 py-2" 
                  id="emailInput" 
                  placeholder="name@example.com" 
                  required
                >
              </div>
              
              <div class="mb-5">
                <label for="passwordInput" class="form-label fw-semibold">Mật khẩu</label>
                <input 
                  type="password" 
                  class="form-control form-control-lg border-light-subtle rounded-3 py-2" 
                  id="passwordInput" 
                  placeholder="Tối thiểu 6 ký tự" 
                  required
                >
              </div>
              
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success btn-lg fw-bold rounded-pill py-2">
                  <i class="bi bi-person-plus me-2"></i> Tạo Tài Khoản Ngay
                </button>
              </div>
              
              <div class="text-center mt-4">
                <p class="text-muted mb-0">
                  Đã có tài khoản? 
                  <a href="#" class="text-primary text-decoration-none fw-semibold">Đăng nhập</a>
                </p>
              </div>

            </form>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Không cần thêm CSS scoped quá nhiều nếu Bootstrap đã đủ tốt */

.form-control-lg {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.card-header {
  background-color: transparent !important;
}

/* Biểu tượng Bootstrap Icons */
.bi-person-plus {
  vertical-align: middle;
}
</style>