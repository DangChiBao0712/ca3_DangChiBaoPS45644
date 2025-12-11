<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
<h2 class="mb-4">{{ postId ? 'Chỉnh sửa Bài Viết' : 'Đăng Bài Viết Mới' }}</h2>
        <div class="card shadow">
          <div class="card-body">
            <form @submit.prevent="handleCreatePost">

              <div class="mb-3">
                <label for="title" class="form-label">Tiêu đề:</label>
                <input type="text" class="form-control" id="title" v-model="title" required>
              </div>

              <div class="mb-3">
                <label for="content" class="form-label">Nội dung:</label>
                <textarea class="form-control" id="content" rows="10" v-model="content" required></textarea>
              </div>

              <div class="mb-3">
                <label for="image" class="form-label">Link Hình ảnh minh họa (URL):</label>
                <input type="url" class="form-control" id="image" v-model="imageUrl"
                  placeholder="http://example.com/image.jpg (Không bắt buộc)">
              </div>

              <button type="submit" class="btn btn-success w-100">
                {{ postId ? 'Cập nhật bài viết' : 'Đăng bài ngay' }}

              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { usePostsStore } from '@/stores/posts';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const route = useRoute(); // Lấy thông tin route
const postsStore = usePostsStore();
const authStore = useAuthStore();

const title = ref('');
const content = ref('');
const imageUrl = ref('');
const postId = ref(null); // ID bài viết (nếu chỉnh sửa)

onMounted(() => {
  // Lấy ID từ query (nếu có)
  if (route.query.editId) {
    postId.value = Number(route.query.editId);
    const existingPost = postsStore.getPostById(postId.value);
    
    if (existingPost) {
      // Điền dữ liệu vào form để chỉnh sửa
      title.value = existingPost.title;
      content.value = existingPost.content;
      imageUrl.value = existingPost.imageUrl;
    } else {
      alert('Bài viết không tồn tại hoặc đã bị xóa.');
      router.push({ name: 'home' });
    }
  }
});

const handleCreatePost = () => {
  if (!authStore.isAuthenticated || !authStore.currentUser) {
    alert('Vui lòng đăng nhập để đăng bài.');
    return;
  }

  const postData = {
    title: title.value,
    content: content.value,
    imageUrl: imageUrl.value
  };

  if (postId.value) {
    // Chỉnh sửa bài viết hiện có
    const result = postsStore.updatePost(
      postId.value,
      postData,
      authStore.currentUser.id
    );

    if (result.success) {
      alert('Cập nhật bài viết thành công!');
      router.push({ name: 'home' });
    } else {
      alert('Bạn không có quyền chỉnh sửa hoặc bài viết không tồn tại.');
    }
  } else {
    // Thêm bài viết mới
    const result = postsStore.addPost(
      postData,
      authStore.currentUser.id,
      authStore.currentUser.name
    );

    if (result.success) {
      alert('Đăng bài thành công!');
      router.push({ name: 'home' });
    } else {
      alert('Đã xảy ra lỗi khi đăng bài.');
    }
  }
};

</script>