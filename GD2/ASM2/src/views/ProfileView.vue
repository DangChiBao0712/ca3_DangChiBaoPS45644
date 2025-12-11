<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-8">

        <h2 class="mb-4 text-primary">Thông tin Cá nhân (Y2.4)</h2>

        <div class="card shadow">
          <div class="card-header bg-primary text-white">
            <h4 class="mb-0">Chỉnh sửa Tài khoản</h4>
          </div>

          <div class="card-body">

            <!-- Thông báo -->
            <div
              v-if="message"
              class="alert"
              :class="success ? 'alert-success' : 'alert-danger'"
            >
              {{ message }}
            </div>

            <!-- FORM CHỈNH SỬA -->
            <form v-if="currentUser" @submit.prevent="handleUpdate">

              <div class="mb-3">
                <label class="form-label">Tên người dùng</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">
                  Mật khẩu mới <span class="text-muted">(không bắt buộc)</span>
                </label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>

              <div class="d-flex justify-content-between">
                <button class="btn btn-primary">
                  Cập nhật
                </button>

                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="handleLogout"
                >
                  Đăng xuất
                </button>
              </div>

            </form>

            <div v-else class="alert alert-danger">
              Không thể tải thông tin người dùng.
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

// reactive user
const currentUser = computed(() => authStore.currentUser);

// form data
const name = ref('');
const email = ref('');
const password = ref('');

// message
const message = ref('');
const success = ref(false);

// đổ dữ liệu khi load
onMounted(() => {
  if (currentUser.value) {
    name.value = currentUser.value.name;
    email.value = currentUser.value.email;
  }
});

const handleUpdate = () => {
  const result = authStore.updateProfile({
    name: name.value,
    email: email.value,
    password: password.value,
  });

  message.value = result.message;
  success.value = result.success;

  if (result.success) {
    password.value = '';
  }
};

const handleLogout = () => {
  authStore.logout();
  router.push({ name: 'home' });
};
</script>
