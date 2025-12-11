<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// Import hàm cập nhật trạng thái xác thực từ module tiện ích
import { setAuthStatus } from '../data/blogPost.js' 

const router = useRouter()

// Dữ liệu người dùng giả lập (có thể được lấy từ dataService.js nếu có)
const user = ref({ 
    name: 'Nguyễn Văn A', 
    email: 'nguyenvana@blogpoly.com', 
    bio: 'Người viết blog đam mê công nghệ và lập trình.'
})

function getInitials(name) {
    if (!name) return '';
    const parts = name.split(' ');
    // Lấy chữ cái đầu của từ đầu tiên và từ cuối cùng
    return parts[0].charAt(0) + (parts.length > 1 ? parts[parts.length - 1].charAt(0) : '');
}

// Xử lý đăng xuất
function handleLogout() {
    // 1. Cập nhật trạng thái xác thực thành false (Xóa localStorage)
    setAuthStatus(false)
    
    alert('Đã đăng xuất thành công!');
    
    // 2. Chuyển hướng người dùng đến trang Login
    router.push({ name: 'Login' }) 
}
</script>

<template>
  <div class="container py-5">
    
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-8">
        
        <h1 class="fw-bold mb-4">Hồ sơ người dùng ({{ user.name }})</h1>

        <nav class="nav-tabs-profile mb-4">
            <router-link :to="{ name: 'UserProfileInfo' }" class="btn btn-outline-primary me-3">
                <i class="bi bi-info-circle me-1"></i> Thông tin cá nhân
            </router-link>
            <router-link :to="{ name: 'UserProfileSettings' }" class="btn btn-outline-secondary">
                <i class="bi bi-gear me-1"></i> Cài đặt
            </router-link>
        </nav>

        <div class="profile-content-area card border-0 shadow-lg rounded-4 p-4 p-md-5">
            <router-view>
                
                <div class="text-center">
                    <div class="mx-auto mb-4 user-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                        <span class="fw-bold display-5">
                            {{ getInitials(user.name) }}
                        </span>
                    </div>
                    
                    <h2 class="fw-bolder text-dark mb-1">{{ user.name }}</h2>
                    <p class="text-muted fs-6 mb-3">{{ user.email }}</p>
                    
                    <div class="mb-4">
                        <p class="text-secondary fst-italic">"{{ user.bio }}"</p>
                    </div>
                    
                    <hr class="my-4">
                    
                    <div class="d-grid gap-2">
                        <button class="btn btn-warning btn-lg fw-semibold rounded-pill">
                            <i class="bi bi-pencil-square me-2"></i> Chỉnh sửa thông tin
                        </button>
                        <button @click="handleLogout" class="btn btn-outline-danger btn-sm mt-2 fw-semibold">
                            <i class="bi bi-box-arrow-right me-2"></i> Đăng xuất
                        </button>
                    </div>
                </div>
            </router-view>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Giữ lại style scoped cho Avatar nếu bạn muốn kích thước 120px */
.user-avatar {
    /* Kích thước lớn hơn và nổi bật hơn */
    width: 120px; 
    height: 120px; 
}
.router-link-exact-active {
    /* Đánh dấu link đang active cho nested routes */
    background-color: #0d6efd !important;
    color: white !important;
}
</style>