<template>
    <!-- carousel -->
    <div id="carouselExampleIndicators" class="carousel slide">
      
      
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/img/website-tin-tuc-bao-dien-tu-online-phu-hop-voi-nhung-don-vi-nao.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/chuc-nang-thong-ke-tren-web-bao-chi-.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/thiet-ke-website-tin-tuc-bao-dien-tu-co-he-thong-quan-ly-noi-dung-cms.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <br> <br>
        <div class="container my-2">
  <div class="alert alert-danger d-flex align-items-center py-1 px-2 shadow-sm small bg-success" role="alert">
    
    <strong class="me-2 text-nowrap">🔴 TIN NÓNG</strong>
    
    <marquee class="fw-normal">
      Vue 3 chính thức ra mắt bản cập nhật mới • Bootstrap 5.4 sắp phát hành • Xu hướng Frontend 2025
    </marquee>
    
  </div>
</div>

        

<div class="container my-5">
  <h4 class="mb-4 border-start border-4 border-primary ps-3">
    Công nghệ
  </h4>

  <div class="row">
    <div class="col-md-6">
      <div class="card mb-3 shadow-sm">
        <img src="../assets/img/banner1.jpg" class="card-img-top" style="height: 220px; object-fit: cover;">
        <div class="card-body">
          <h5 class="fw-bold">Xu hướng Frontend 2025</h5>
          <p class="small text-muted">5 phút đọc • 1.2k lượt xem</p>
          <p class="mb-2">Frontend đang thay đổi rất nhanh với AI, Web Components...</p>
          <button class="btn btn-sm btn-outline-primary">Xem chi tiết</button>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Vue 3 tiếp tục thống trị thị trường SPA
        </li>
        <li class="list-group-item">
          Bootstrap 5 có còn phù hợp năm 2025?
        </li>
        <li class="list-group-item">
          Backend Java & tương lai Microservices
        </li>
        <li class="list-group-item">
          Fullstack Developer cần học gì?
        </li>
      </ul>
    </div>
  </div>
</div>


 
<!-- Chủ đề nổi bật-->
     <div class="container my-5">
  <h4 class="mb-3">Chủ đề nổi bật</h4>
  <div class="d-flex flex-wrap gap-2">
    <span class="badge bg-primary fs-6">VueJS</span>
    <span class="badge bg-success fs-6">Java</span>
    <span class="badge bg-warning text-dark fs-6">Bootstrap</span>
    <span class="badge bg-info text-dark fs-6">Frontend</span>
    <span class="badge bg-danger fs-6">Backend</span>
  </div>
</div>

<!-- Bài viết được yêu thích nhất -->
<div class="container my-5">
  <h4 class="mb-4">🔥 Bài viết được yêu thích nhất:</h4>

  <div class="row g-3">
    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <img src="../assets/img/banner1.jpg" class="card-img-top" style="height: 150px; object-fit: cover;">
        <div class="card-body">
          <h6 class="card-title">Vue Router cơ bản</h6>
          <p class="small text-muted mb-2">1.2k lượt xem</p>
          <button class="btn btn-sm btn-outline-primary">Xem</button>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <img src="../assets/img/banner2.jpg" class="card-img-top" style="height: 150px; object-fit: cover;">
        <div class="card-body">
          <h6 class="card-title">Composition API</h6>
          <p class="small text-muted mb-2">980 lượt xem</p>
          <button class="btn btn-sm btn-outline-primary">Xem</button>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 shadow-sm">
        <img src="../assets/img/banner3.jpg" class="card-img-top" style="height: 150px; object-fit: cover;">
        <div class="card-body">
          <h6 class="card-title">Pinia Store</h6>
          <p class="small text-muted mb-2">860 lượt xem</p>
          <button class="btn btn-sm btn-outline-primary">Xem</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container my-5">
  <h4 class="mb-4">👨‍💻 Tác giả nổi bật</h4>

  <div class="row g-3">
    <div class="col-md-4">
      <div class="card text-center shadow-sm h-100">
        <div class="card-body">
          <img src="https://i.pravatar.cc/100?img=1" class="rounded-circle mb-3">
          <h6 class="fw-bold mb-1">Nguyễn Văn A</h6>
          <p class="small text-muted">VueJS, Frontend</p>
          <button class="btn btn-sm btn-outline-primary">Xem bài viết</button>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card text-center shadow-sm h-100">
        <div class="card-body">
          <img src="https://i.pravatar.cc/100?img=2" class="rounded-circle mb-3">
          <h6 class="fw-bold mb-1">Trần Thị B</h6>
          <p class="small text-muted">Java, Backend</p>
          <button class="btn btn-sm btn-outline-primary">Xem bài viết</button>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card text-center shadow-sm h-100">
        <div class="card-body">
          <img src="https://i.pravatar.cc/100?img=3" class="rounded-circle mb-3">
          <h6 class="fw-bold mb-1">Lê Văn C</h6>
          <p class="small text-muted">Fullstack</p>
          <button class="btn btn-sm btn-outline-primary">Xem bài viết</button>
        </div>
      </div>
    </div>
  </div>
</div>



        
  <div class="container my-5">
    <h2 class="mb-4">Tất cả Bài Viết</h2>
    <div class="row">
      <!-- Vòng lặp hiển thị danh sách bài viết (List Rendering) -->
      <div class="col-md-6 col-lg-4 mb-4" v-for="post in postsStore.posts" :key="post.id">
        <div class="card shadow-sm h-100">
          <!-- Hiển thị ảnh (Conditional Rendering) -->
          <img v-if="post.imageUrl" :src="post.imageUrl" class="card-img-top" :alt="post.title" style="height: 200px; object-fit: cover;">
          
          <div class="card-body">
            <!-- Tiêu đề (Template Syntax) -->
            <h5 class="card-title">{{ post.title }}</h5>
            
            <!-- Thông tin tóm tắt -->
            <p class="card-text text-muted small">Tác giả: {{ post.author }}</p>
            <p class="card-text">{{ post.content.substring(0, 100) + '...' }}</p>
            
            <!-- Link chi tiết bài viết -->
            <RouterLink
  :to="{ name: 'post-detail', params: { id: post.id } }"
  class="btn btn-sm btn-primary"
  @click="postsStore.increaseView(post.id)"
>
  Xem chi tiết
</RouterLink>


            <!-- Nút Xóa (Conditional Rendering: Chỉ hiện khi là tác giả - Y2.2) -->
            <button 
                v-if="authStore.isAuthenticated && authStore.currentUser.id === post.userId"
                @click="confirmDelete(post.id)"
                class="btn btn-sm btn-danger ms-2"
            >
                Xóa
            </button>
          </div>
          <div class="card-footer text-muted small">
            Đăng ngày: {{ new Date(post.date).toLocaleDateString('vi-VN') }}
          </div>
        </div>
      </div>
      
      
      <!-- Thông báo khi không có bài viết -->
      <div v-if="postsStore.posts.length === 0" class="col-12">
        <div class="alert alert-info">Chưa có bài viết nào được đăng.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from '@/stores/posts';
import { useAuthStore } from '@/stores/auth';
import { RouterLink } from 'vue-router'; // Cần import RouterLink khi sử dụng
const postsStore = usePostsStore();
const authStore = useAuthStore();


const confirmDelete = (postId) => {
    // Không dùng window.confirm/alert trong môi trường Immersive. Dùng modal custom hoặc console.log
    if (window.confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
        const result = postsStore.deletePost(postId, authStore.currentUser.id);
        if (!result.success) {
            console.error(result.message);
            // Có thể thêm logic hiển thị lỗi cho người dùng nếu cần
        }
    }
};
</script>