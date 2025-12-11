<script setup>
import { ref } from 'vue';

const buttonTitle = ref('xin chào')
const greeting = ref('Xin chào bạn!') // Thay đổi giá trị ban đầu theo yêu cầu

const changeGreeting = () => {
  buttonTitle.value = 'Hi'
  greeting.value = 'Hello World!' // Thay đổi lời chào khi bấm nút
}

const daocau = () => {
  buttonTitle.value = 'Hi'
  greeting.value = greeting.value.split(' ').reverse().join(' ');  // Thay đổi lời chào khi bấm nút
}

</script>
<template>
  <h1>{{ greeting }}</h1>
  <button v-bind:title="buttonTitle" @click="changeGreeting">Click để thay đổi</button>
    <button v-bind:title="buttonTitle" @click="daocau">Click để đảo câu</button>

</template>
<style ></style>