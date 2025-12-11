<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePostsStore } from '@/stores/posts';
import { useAuthStore } from '@/stores/auth';

const route = useRoute();
const router = useRouter();
const postsStore = usePostsStore();
const authStore = useAuthStore();

/* ===== AUTH ===== */
const isAuthenticated = computed(() => authStore.isAuthenticated);
const currentUser = computed(() => authStore.currentUser);

/* ===== POST ===== */
const postId = computed(() => Number(route.params.id));
const post = computed(() => postsStore.getPostById(postId.value));

const isPostOwner = computed(() => {
  if (!post.value || !currentUser.value) return false;
  return post.value.userId === currentUser.value.id;
});

/* ===== BÌNH LUẬN ===== */
const newComment = ref('');

const addComment = () => {
  if (!newComment.value.trim()) return;

  const comment = {
    id: Date.now(),
    author: currentUser.value.name,
    userId: currentUser.value.id,
    content: newComment.value,
    date: new Date().toISOString()
  };

  post.value.comments = post.value.comments || [];
  post.value.comments.unshift(comment);

  localStorage.setItem('posts', JSON.stringify(postsStore.posts));
  newComment.value = '';
};

/* ===== ACTION ===== */
const editPost = () => {
  router.push({ path: '/posts/create', query: { editId: postId.value } });
};

const deletePostHandler = () => {
  if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
    postsStore.deletePost(postId.value, currentUser.value.id);
    router.push('/');
  }
};

const formatDate = d => new Date(d).toLocaleDateString('vi-VN');
const formatTime = d => new Date(d).toLocaleTimeString('vi-VN');
</script>


<template>
  <div class="container my-5" v-if="post">
    <div class="card shadow p-4">

      <div class="d-flex justify-content-between">
        <h2 class="text-primary">{{ post.title }}</h2>

        <div v-if="isPostOwner">
          <button class="btn btn-warning btn-sm me-2" @click="editPost">Sửa</button>
          <button class="btn btn-danger btn-sm" @click="deletePostHandler">Xóa</button>
        </div>
      </div>

      <p class="text-muted">
        {{ post.author }} · {{ formatDate(post.date) }}
      </p>

      <img v-if="post.imageUrl" :src="post.imageUrl" class="img-fluid rounded mb-3">

      <p style="white-space: pre-wrap">{{ post.content }}</p>

      <!-- ===== BÌNH LUẬN ===== -->
      <hr>
      <h5>Bình luận ({{ post.comments?.length || 0 }})</h5>

      <div v-if="isAuthenticated" class="mb-3">
        <textarea
          class="form-control"
          rows="3"
          v-model="newComment"
          placeholder="Nhập bình luận..."
        />
        <button class="btn btn-primary mt-2" @click="addComment">
          Đăng bình luận
        </button>
      </div>

      <div v-else class="alert alert-info">
        Vui lòng đăng nhập để bình luận
      </div>

      <div v-if="post.comments?.length">
        <div
          v-for="c in post.comments"
          :key="c.id"
          class="border rounded p-2 mb-2 bg-light"
        >
          <strong>{{ c.author }}</strong>
          <small class="text-muted ms-2">{{ formatTime(c.date) }}</small>
          <p class="mb-0">{{ c.content }}</p>
        </div>
      </div>

      <p v-else class="text-muted">Chưa có bình luận nào</p>
    </div>
  </div>

  <div v-else class="container my-5 alert alert-danger">
    Không tìm thấy bài viết
  </div>
</template>

<style scoped>
/* Thêm một số style Bootstrap cơ bản */
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');


.post-detail-view {
    min-height: 100vh;
    background-color: #f8f9fa;
}

.card {
    background-color: #fff;
    border: none;
}

.img-fluid {
    max-height: 300px;
    object-fit: cover;
    width: 100%;
}

.post-content {
    font-size: 1.1rem;
    line-height: 1.8;
}
</style>