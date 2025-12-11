<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// Import hàm lấy bài viết từ module tiện ích
import { getBlogPostById } from '../data/blogPost.js' 

const route = useRoute()
const router = useRouter()

// Lấy ID bài viết từ tham số động của Route
const postId = ref(route.params.id)

// Lấy thông tin bài viết chi tiết dựa trên ID
// Dùng computed để tự động cập nhật nếu postId thay đổi (dù trong lab này nó cố định)
const post = computed(() => {
    return getBlogPostById(postId.value) || {
        id: postId.value,
        title: 'Không tìm thấy bài viết!',
        content: 'Bài viết này không tồn tại hoặc đã bị xóa.'
    }
})

// Dữ liệu bình luận mẫu (Giữ lại logic của bạn)
const comments = ref([
    { user: 'Nguyễn Văn A', text: 'Bài viết hay quá, phân tích rất sâu sắc về chủ đề này!', date: '25/11/2025' },
    { user: 'Trần Thị B', text: 'Cảm ơn chia sẻ. Tôi đã học được nhiều điều mới!', date: '25/11/2025' }
])
const newComment = ref('')

function addComment() {
    if(newComment.value.trim()) {
        comments.value.unshift({ // Thêm lên đầu danh sách
            user: 'Bạn', 
            text: newComment.value.trim(),
            date: new Date().toLocaleDateString('vi-VN')
        })
        newComment.value = ''
    }
}

// CHUYỂN LOGIC ĐIỀU HƯỚNG SANG ROUTER
function goBackToList() {
    // Điều hướng lập trình quay lại danh sách Blog (Route có tên là BlogList)
    router.push({ name: 'BlogList' })
}
</script>

<template>
  <div class="container py-5">
    
    <button @click="goBackToList" class="btn btn-outline-primary mb-4 fw-semibold">
      <i class="bi bi-arrow-left me-2"></i> Quay lại danh sách
    </button>
    
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-8">
        
        <article class="mb-5">
          <h1 class="display-5 fw-bolder mb-3">{{ post.title }}</h1>
          
          <div class="d-flex align-items-center mb-4 text-muted">
            <i class="bi bi-person-circle me-2"></i>
            <span class="me-3">Admin (ID: {{ postId }})</span>
            <i class="bi bi-calendar-event me-2"></i>
            <span>20/05/2024</span>
          </div>
          
          <hr class="mb-4">
          
          <div class="fs-5 text-dark content-body">
            <p>{{ post.content }}</p>
          </div>
          
        </article>
        
        <hr class="my-5">

        <section>
          <h3 class="fw-bold mb-4">💬 Bình luận ({{ comments.length }})</h3>
          
          <div class="card p-4 mb-4 border-0 shadow-sm">
            <form @submit.prevent="addComment">
              <div class="mb-3">
                <textarea 
                  v-model="newComment" 
                  class="form-control" 
                  rows="3" 
                  placeholder="Viết bình luận của bạn tại đây..."
                ></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" :disabled="!newComment.trim()" class="btn btn-primary fw-semibold rounded-pill px-4">
                  <i class="bi bi-send me-2"></i> Gửi Bình luận
                </button>
              </div>
            </form>
          </div>
          
          <ul class="list-unstyled comment-list">
            <li v-for="(cmt, idx) in comments" :key="idx" class="comment-item p-4 mb-3 rounded-3 shadow-sm">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div class="fw-bold text-dark fs-6 d-flex align-items-center">
                  <i class="bi bi-person-fill me-2 text-primary"></i> {{ cmt.user }}
                </div>
                <small class="text-muted">{{ cmt.date }}</small>
              </div>
              <p class="mb-0 text-break">{{ cmt.text }}</p>
            </li>
          </ul>

        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS cho Nội dung chính dễ đọc */
.content-body p {
  line-height: 1.8; /* Tăng khoảng cách dòng */
  margin-bottom: 1.5rem;
}

/* CSS cho Danh sách Bình luận hiện đại */
.comment-list {
  padding-left: 0;
}
.comment-item {
  background-color: #f8f9fa; /* Nền xám nhạt */
  border: 1px solid #e9ecef; /* Viền mỏng */
}
</style>