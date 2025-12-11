// src/stores/auth.js

import { defineStore } from 'pinia';
import { ref } from 'vue';

// Giả định dữ liệu người dùng được đăng ký
// Trong thực tế, dữ liệu này sẽ lấy từ API Backend
const mockUsers = [
    { id: 1, name: 'Sinh Viên FPT', email: 'test@fpt.edu.vn', password: '123456' },
    { id: 2, name: 'Giảng viên Blog', email: 'giao_vien@fpt.edu.vn', password: 'password' },
];

// Định nghĩa Store tên là 'auth'
export const useAuthStore = defineStore('auth', () => {
    
    // 1. STATE (Trạng thái)
    
    // Kiểm tra Local Storage để duy trì trạng thái đăng nhập sau khi refresh
    const isAuthenticated = ref(!!localStorage.getItem('userToken'));
    const currentUser = ref(
        JSON.parse(localStorage.getItem('currentUser') || 'null')
    );
const users = ref(
  JSON.parse(localStorage.getItem('users') || JSON.stringify(mockUsers))
);

    // 2. ACTIONS (Hành động/Hàm xử lý logic)

    // --- Hàm Đăng ký ---
    const register = (name, email, password) => {
        // Kiểm tra email đã tồn tại chưa
        if (users.value.some(user => user.email === email)) {
            return { success: false, message: 'Email đã tồn tại.' };
        }

        // Tạo người dùng mới
        const newUser = {
            id: users.value.length + 1,
            name,
            email,
            password, // Lưu mật khẩu (Lưu ý: Trong thực tế, cần hash mật khẩu!)
        };
        
        // Lưu người dùng vào danh sách (mock data)
        users.value.push(newUser);
localStorage.setItem('users', JSON.stringify(users.value));


        // Tự động đăng nhập sau khi đăng ký thành công
        login(email, password); 

        return { success: true, message: 'Đăng ký thành công.' };
    };


    // --- Hàm Đăng nhập ---
    const login = (email, password) => {
        // Tìm người dùng trong mockUsers
        const user = users.value.find(
            u => u.email === email && u.password === password
        );

        if (user) {
            // Giả định tạo token
            const token = `mock-token-${user.id}-${Date.now()}`;
            
            // Cập nhật trạng thái
            isAuthenticated.value = true;
            currentUser.value = { id: user.id, name: user.name, email: user.email }; // Không lưu password
            
            // Lưu vào Local Storage để duy trì trạng thái
            localStorage.setItem('userToken', token);
            localStorage.setItem('currentUser', JSON.stringify(currentUser.value));

            return { success: true, message: 'Đăng nhập thành công.' };
        }
        
        return { success: false, message: 'Email hoặc mật khẩu không đúng.' };
    };

    // --- Hàm Đăng xuất ---
    const logout = () => {
        isAuthenticated.value = false;
        currentUser.value = null;
        localStorage.removeItem('userToken');
        localStorage.removeItem('currentUser');
    };
    
    // --- Hàm Cập nhật Thông tin Cá nhân (Y2.4) ---
   const updateProfile = ({ name, email, password }) => {


  if (!currentUser.value) {
    return { success: false, message: 'Bạn chưa đăng nhập.' };
  }

  //  Kiểm tra email trùng (trừ chính mình)
  const emailExists = users.value.some(
    u => u.email === email && u.id !== currentUser.value.id
  );

  if (emailExists) {
    return { success: false, message: 'Email đã được sử dụng.' };
  }

  //  Cập nhật user trong danh sách users
  const index = users.value.findIndex(u => u.id === currentUser.value.id);

  if (index === -1) {
    return { success: false, message: 'Người dùng không tồn tại.' };
  }

  users.value[index] = {
    ...users.value[index],
    name,
    email,
    password: password || users.value[index].password
  };

  //  Cập nhật currentUser (không lưu password)
  currentUser.value = {
    id: users.value[index].id,
    name: users.value[index].name,
    email: users.value[index].email
  };

  //  Lưu localStorage
  localStorage.setItem('users', JSON.stringify(users.value));
  localStorage.setItem('currentUser', JSON.stringify(currentUser.value));

  return { success: true, message: 'Cập nhật thông tin thành công.' };
};



    return {
        isAuthenticated,
        currentUser,
        users, // Để dùng cho việc đăng ký
        login,
        logout,
        register,
        updateProfile,
    };
});