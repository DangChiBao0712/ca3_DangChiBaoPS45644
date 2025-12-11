<template>
  <div class="container my-5">
    <h2 class="mb-4 text-primary text-center">
      Bài viết của tôi
    </h2>

    <!-- CHƯA ĐĂNG NHẬP -->
    <div v-if="!isAuthenticated" class="alert alert-warning text-center">
      Vui lòng đăng nhập để xem bài viết của bạn.
    </div>

    <!-- ĐÃ ĐĂNG NHẬP -->
    <div v-else>
      <!-- KHÔNG CÓ BÀI VIẾT -->
      <div
        v-if="myPosts.length === 0"
        class="alert alert-info text-center"
      >
        Bạn chưa đăng bài viết nào.
      </div>

      <!-- DANH SÁCH BÀI VIẾT -->
      <div
        v-for="post in myPosts"
        :key="post.id"
        class="card mb-4 shadow-sm"
      >
        <img
          v-if="post.imageUrl"
          :src="post.imageUrl"
          class="card-img-top"
          alt="Ảnh bài viết"
        >

        <div class="card-body">
          <h4 class="card-title">{{ post.title }}</h4>

          <p class="text-muted small mb-2">
            Ngày đăng:
            {{ formatDate(post.date) }}
          </p>

          <p class="card-text">
            {{ post.content }}
          </p>

          <div class="d-flex gap-2">
            <!-- SỬA -->
            <RouterLink
              :to="{ name: 'create-post', query: { editId: post.id } }"
              class="btn btn-sm btn-warning"
            >
              Chỉnh sửa
            </RouterLink>

            <!-- XÓA -->
            <button
              class="btn btn-sm btn-danger"
              @click="handleDelete(post.id)"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePostsStore } from '@/stores/posts';
import { useAuthStore } from '@/stores/auth';

const postsStore = usePostsStore();
const authStore = useAuthStore();

// auth
const isAuthenticated = computed(() => authStore.isAuthenticated);
const currentUser = computed(() => authStore.currentUser);

// lọc bài viết của user hiện tại
const myPosts = computed(() => {
  if (!currentUser.value) return [];
  return postsStore.posts.filter(
    post => post.userId === currentUser.value.id
  );
});

// xóa bài viết
const handleDelete = (postId) => {
  if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
    postsStore.deletePost(postId, currentUser.value.id);
  }
};

// format ngày
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('vi-VN');
};
</script>
