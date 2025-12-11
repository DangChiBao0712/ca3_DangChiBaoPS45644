<template>
  <div class="container mt-3">

    <h4 class="mb-3">Bình luận bài viết</h4>

    <!-- CARD BÀI VIẾT -->
    <div class="card mb-3">
      <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443"
           class="card-img-top" alt="rau củ">

      <div class="card-body">
        <h5 class="card-title">8 loại rau củ quả giàu canxi</h5>
        <p class="card-text">
          Canxi là khoáng chất cần thiết đối với cơ thể con người. Có nhiều cách để bổ sung canxi,
          trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi
        </p>
      </div>
    </div>

    <p class="fw-bold">
      Đăng nhập bởi: <span class="text-primary">{{ user.username }}</span>
    </p>

    <!-- FORM BÌNH LUẬN -->
    <form @submit.prevent="addComment">
      <textarea
        v-model="text"
        class="form-control mb-2"
        rows="3"
        placeholder="Nhập bình luận của bạn"
      ></textarea>

      <button class="btn btn-success">Gửi bình luận</button>
    </form>

    <!-- DANH SÁCH BÌNH LUẬN -->
    <div class="mt-3" v-if="comments.length > 0">
      <h5>Danh sách các bình luận:</h5>

      <ul class="list-group">
        <li class="list-group-item" v-for="(c, i) in comments" :key="i">
          <strong>{{ c.author }}</strong>: {{ c.text }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({ user: Object });
const { user } = toRefs(props);

const text = ref('');
const comments = ref([]);

const addComment = () => {
  if (!text.value.trim()) return;

  comments.value.push({
    author: user.value.username,
    text: text.value
  });

  text.value = '';
};
</script>

<style scoped>
.card-img-top {
  height: 220px;
  object-fit: cover;
}
</style>
