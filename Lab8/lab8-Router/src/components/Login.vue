<template>
  <div>
    <h2>Login</h2>
    <button @click="login">Đăng nhập</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const login = () => {
  localStorage.setItem('isAuthenticated', 'true')
  router.push({ name: 'Dashboard' })
}
</script>
<style ></style>
