<template>
    <div v-if="!isLoggedIn" >
        <h3>Form Đăng nhập</h3>
        <form @submit.prevent="login">
            <div class="mb-3 mt-3">
                <label>Email:</label>
                <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
                <p v-if="emailError" style="color: red;">{{ emailError }}</p>
            </div>
            <div class="mb-3">
                <label>Mật khẩu:</label>
                <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
                <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
            </div>
            <button type="submit" class="btn btn-primary">Đăng nhập.</button>
        </form>
    </div>

    <div v-else class="p-5 col-sm-5">
        <h3>Chào mừng, {{ email }}!</h3>
        <button @click="logout" class="btn btn-primary">Đăng xuất</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    // Khai báo các trạng thái (State)
    const isLoggedIn = ref(false);
    const email = ref('');
    const password = ref('');
    const emailError = ref('');
    const passwordError = ref('');

    // Biểu thức chính quy (Regex) để kiểm tra định dạng email cơ bản
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    // Lưu ý: Regex trong ảnh bị thiếu/sai một số ký tự thoát, sử dụng phiên bản chuẩn hơn ở đây.
    // Regex trong ảnh: const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    
    // Hàm xử lý Đăng nhập
    const login = () => {
        // Reset thông báo lỗi trước mỗi lần validate
        emailError.value = '';
        passwordError.value = '';

        // Validate email
        if (!email.value) {
            emailError.value = 'Email là bắt buộc.';
        } else if (!emailRegex.test(email.value)) {
            emailError.value = 'Vui lòng nhập email hợp lệ.';
        }

        // Validate mật khẩu
        if (!password.value) {
            passwordError.value = 'Mật khẩu là bắt buộc.';
        }

        // Nếu không có lỗi, xử lý login
        if (!emailError.value && !passwordError.value) {
            // Logic đăng nhập thành công (Trong ví dụ này chỉ đơn giản là thay đổi trạng thái)
            isLoggedIn.value = true;
        }
    };

    // Hàm xử lý Đăng xuất
    const logout = () => {
        // Đặt lại trạng thái đăng nhập và xóa dữ liệu
        isLoggedIn.value = false;
        email.value = '';
        password.value = '';
        emailError.value = '';
        passwordError.value = '';
    };
</script>

<style scoped></style>