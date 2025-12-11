<template>
    <div class="blog-list">
        <h2>Blog List</h2>

        <div class="card-container">
            <div class="blog-card" v-for="post in blogPosts" :key="post.id" @click="goToPost(post.id)">
                <h3 class="card-title">{{ post.title }}</h3>
                <p class="card-desc">{{ post.content }}</p>
                <span class="read-more">Read more →</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { blogPosts } from '../data/blogPosts.js'
import { useRouter } from 'vue-router'

// Lấy router
const router = useRouter()

// Hàm chuyển sang trang chi tiết
const goToPost = (id) => {
  router.push({ name: 'BlogPost', params: { id } })
}
</script>



<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    margin-top: 20px;
}

.blog-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
    transition: 0.2s;
    background: #fff;
}

.blog-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
}

.card-title {
    margin: 0 0 8px;
}

.card-desc {
    font-size: 14px;
    color: #555;
}

.read-more {
    color: #42b883;
    font-weight: 600;
}
</style>
