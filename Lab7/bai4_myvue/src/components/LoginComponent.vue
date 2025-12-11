<template>
<div>
<h4>Đăng nhập:</h4>
<form @submit.prevent="doLogin">
<div>
<input v-model="username" placeholder="Tên" />
</div>
<div>
<input v-model="password" type="password" placeholder="Mật khẩu" />
</div>
<button type="submit">Đăng nhập</button>
</form>
</div>
</template>


<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';
const emit = defineEmits(['login']);
const username = ref('');
const password = ref('');


const doLogin = () => {
if (!username.value) return alert('Nhập tên');
// Giả lập xác thực
emit('login', { username: username.value });
};
</script>