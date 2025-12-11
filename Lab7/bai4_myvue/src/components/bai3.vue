<template>
  <div class="register p-4">
    <h3>Form Đăng ký</h3>
    <form @submit.prevent="doLogin">
      <div>
        <label>Họ tên</label>
        <input v-model="name" />
      </div>
      <div>
        <label>Email</label>
        <input v-model="email" type="email" />
      </div>
      <div>
        <label>Mật khẩu</label>
        <input v-model="password" type="password" />
      </div>
      <div>
        <label>Ngày sinh</label>
        <input v-model="dob" type="date" />
      </div>
      <div>
        <label>Giới tính</label>
        <select v-model="gender">
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
          <option value="other">Khác</option>
        </select>
      </div>
      <div>
        <label>Ngôn ngữ</label>
        <label><input type="checkbox" value="Tiếng Việt" v-model="languages" /> Tiếng Việt</label>
        <label><input type="checkbox" value="English" v-model="languages" /> English</label>
      </div>
      <button type="submit">Đăng ký</button>
    </form>


    <div v-if="submitted">
      <h4>Thông tin đã đăng ký:</h4>
      <p><strong>Họ tên:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Ngày sinh:</strong> {{ dob }}</p>
      <p><strong>Giới tính:</strong> {{ gender }}</p>
      <p><strong>Ngôn ngữ:</strong> {{ languages.join(', ') }}</p>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';
const emit = defineEmits(['dangky']);

const name = ref('');
const email = ref('');
const password = ref('');
const dob = ref('');
const gender = ref('male');
const languages = ref([]);
const submitted = ref(false);


const register = () => {
  // có thể thêm validate nếu cần
  submitted.value = true;
  // không hiển thị password theo yêu cầu
};


const doLogin = () => {
if (!username.value) return alert('Nhập tên');
// Giả lập xác thực
emit('dangky', { name: username.value, 
  password: password.value,
  email: email.value,
  dob: dob.value,
  gender: gender.value,
  languages: languages.value });
};
</script>