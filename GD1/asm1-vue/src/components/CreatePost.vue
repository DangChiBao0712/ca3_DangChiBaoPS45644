<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-8">
        
        <div class="card border-0 shadow-lg rounded-3">
          
          <div class="card-header bg-white border-bottom-0 pt-4 pb-2 text-center">
            <h2 class="fw-bold text-dark mb-0">Viết Bài Mới</h2>
            <p class="text-muted mt-1 mb-0">Chia sẻ ý tưởng của bạn với cộng đồng.</p>
          </div>

          <div class="card-body p-md-5 p-4">

            <div class="mb-4">
              <label for="postTitle" class="form-label fw-semibold text-dark">Tiêu đề Bài viết</label>
              <input 
                type="text" 
                class="form-control form-control-lg border-0 border-bottom rounded-0 py-2 px-0 shadow-none" 
                id="postTitle" 
                placeholder="Nhập tiêu đề chính của bài viết..."
                v-model="post.title"
              >
            </div>

            <div class="mb-4">
              <label for="postContent" class="form-label fw-semibold text-dark">Nội dung</label>
              <textarea 
                class="form-control" 
                id="postContent" 
                rows="15" 
                placeholder="Bắt đầu viết nội dung bài báo/blog tại đây..."
                v-model="post.content"
              ></textarea>
            </div>

            <div class="d-grid mt-5">
              <button 
                class="btn btn-primary btn-lg fw-bold rounded-pill py-2"
                @click="submitPost"
              >
                <i class="bi bi-send me-2"></i> Đăng Bài Ngay
              </button>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// Import hàm giả lập để thêm bài viết
import { addPost } from '../data/blogPost.js'; // Đổi tên file module tiện ích

const router = useRouter();

// Tạo đối tượng reactive để lưu tiêu đề và nội dung
const post = ref({
    title: '',
    content: ''
});

const submitPost = () => {
    if (post.value.title && post.value.content) {
        // 1. Giả lập việc thêm bài viết (gọi hàm từ module tiện ích)
        addPost(post.value.title, post.value.content);

        alert(`Bài viết "${post.value.title}" đã được đăng thành công! (Giả lập)`);
        
        // 2. Chuyển hướng về trang chủ sau khi đăng bài
        router.push({ name: 'Home' });
    } else {
        alert('Vui lòng nhập đầy đủ Tiêu đề và Nội dung.');
    }
};
</script>

<style scoped>
/* Giữ nguyên style */
</style>