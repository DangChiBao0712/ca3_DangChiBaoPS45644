<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getAllPosts } from '../data/blogPost.js' // Sửa tên file đúng

const router = useRouter()

// Lấy dữ liệu từ service
const posts = getAllPosts()
console.log(posts) // Debug xem dữ liệu

// Featured & Grid
const featuredPost = computed(() => posts[0])
const gridPosts = computed(() => posts.slice(1))

// Điều hướng
function goToDetail(id) {
  router.push({
    name: 'BlogPost',
    params: { id }
  })
}

// Like button
function handleLike(post, event) {
  event.stopPropagation()
  post.likes++
}
</script>

<template>
  <div class="container py-5">
    <!-- Kiểm tra dữ liệu -->
    <div v-if="!posts.length" class="text-center text-muted">Chưa có bài viết nào.</div>

    <!-- Featured Post -->
    <div v-else-if="featuredPost" class="card mb-5 bg-primary text-white border-0 shadow-lg" @click="goToDetail(featuredPost.id)" style="cursor: pointer;">
      <div class="row g-0">
        <div class="col-md-7">
          <img :src="featuredPost.image_url" class="img-fluid w-100 h-100 rounded-start" style="object-fit: cover;" alt="Bài viết nổi bật">
        </div>
        <div class="col-md-5 d-flex align-items-center">
          <div class="card-body p-4 p-lg-5">
            <span class="badge bg-light text-primary mb-2">NỔI BẬT</span>
            <h2 class="card-title fw-bolder display-6 mb-3">{{ featuredPost.title }}</h2>
            <p class="card-text fs-5 mb-4">{{ featuredPost.summary }}</p>
            <router-link :to="{ name: 'BlogPost', params: { id: featuredPost.id } }" class="btn btn-light fw-semibold rounded-pill">
              Xem ngay <i class="bi bi-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid Posts -->
    <div class="row">
      
      <div class="col-md-6 col-lg-4 mb-4" v-for="post in gridPosts" :key="post.id">
        <router-link :to="{ name: 'BlogPost', params: { id: post.id } }" class="text-decoration-none">
          <div class="card h-100 border-0 shadow-lg" style="cursor: pointer;">
            <div class="overflow-hidden rounded-top" style="height: 180px;">
              <img :src="post.image_url" class="card-img-top w-100 h-100" style="object-fit: cover;" alt="Hình ảnh bài viết">
            </div>
            <div class="card-body p-4">
              <div class="d-flex align-items-center text-secondary small mb-2">
                <i class="bi bi-person-fill me-1"></i>
                <span class="me-3 fw-semibold">{{ post.author }}</span>
                <i class="bi bi-calendar-event me-1"></i>
                <span>{{ post.date }}</span>
              </div>
              <h5 class="card-title fw-bolder text-dark mb-2 text-truncate">{{ post.title }}</h5>
              <p class="card-text text-muted small mb-3 text-truncate">{{ post.summary }}</p>
              <span class="text-decoration-none fw-semibold text-primary small">
                Đọc tiếp <i class="bi bi-arrow-right ms-1"></i>
              </span>
            </div>
            <div class="card-footer bg-white border-0 pt-0 pb-3 px-4">
              <div class="d-flex justify-content-between align-items-center small border-top pt-2">
                <div class="text-secondary">
                  <span class="me-3"><i class="bi bi-hand-thumbs-up-fill text-primary me-1"></i> {{ post.likes }}</span>
                  <span><i class="bi bi-chat-dots me-1"></i> {{ post.comments_count }}</span>
                </div>
                <div class="d-flex">
                  <button @click.prevent="handleLike(post, $event)" class="btn btn-sm btn-link text-primary text-decoration-none p-0 me-3 fw-semibold">
                    <i class="bi bi-hand-thumbs-up me-1"></i> Thích
                  </button>
                  <router-link :to="{ name: 'BlogPost', params: { id: post.id } }" class="btn btn-sm btn-link text-secondary text-decoration-none p-0 fw-semibold">
                    <i class="bi bi-chat-dots me-1"></i> Bình luận
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card a {
  color: inherit;
}
</style>
