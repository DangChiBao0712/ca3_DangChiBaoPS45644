<template>
<div>
<bai3 @login="onlogin"/>
<LoginComponent v-if="!user" @login="onLogin" />
<div v-else>
    <CommentComponent :user="user" />
<button @click="onLogout">Đăng xuất.</button>

</div>
</div>
</template>


<script setup>
import { ref } from 'vue';
import LoginComponent from './components/LoginComponent.vue';
import CommentComponent from './components/CommentComponent.vue';
import bai3 from './components/bai3.vue'    ;

const user = ref(null);


const onLogin = (payload) => {
user.value = payload; // { username }
};


const onLogout = () => {
user.value = null;
};
</script>