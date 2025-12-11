<template>
  <div>
    <h1>Welcome to MyBlog</h1>

    <router-link to="/blog">Xem Blog</router-link> |
    <router-link to="/profile">Trang cá nhân</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
  </div>
  <div>
    <router-view />
  </div>
</template>
<script setup></script>

