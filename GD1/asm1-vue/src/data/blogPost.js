// Danh sách bài viết blog giả lập (ĐÃ ĐẦY ĐỦ THUỘC TÍNH CHO HOME + BLOG)
import { reactive } from 'vue'

const blogPosts = reactive([
  {
    id: 1,
    title: 'Giới thiệu Vue Router',
    content: 'Nội dung chi tiết cho bài viết số 1.',
    summary: 'Giới thiệu tổng quan về Vue Router và cách sử dụng cơ bản.',
    author: 'Admin Blog',
    date: '15/11/2025',
    image_url: new URL('../assets/img/OIP.webp', import.meta.url).href,
    likes: 20,
    comments_count: 5
  },
  {
    id: 2,
    title: 'Các loại Routes trong Vue',
    content: 'Nội dung chi tiết cho bài viết số 2.',
    summary: 'Tìm hiểu về static routes, dynamic routes và nested routes.',
    author: 'Admin Blog',
    date: '16/11/2025',
    image_url: new URL('../assets/img/toiuuhoa.webp', import.meta.url).href,
    likes: 30,
    comments_count: 8
  },
  {
    id: 3,
    title: 'Route Guard và Bảo mật',
    content: 'Nội dung chi tiết cho bài viết số 3.',
    summary: 'Hướng dẫn sử dụng Route Guard để kiểm soát truy cập.',
    author: 'Admin Blog',
    date: '17/11/2025',
    image_url: new URL('../assets/img/bootstrap5.webp', import.meta.url).href,
    likes: 45,
    comments_count: 12
  }
])


// ✅ Lấy toàn bộ bài viết (dùng cho Home)
const getAllPosts = () => {
    return blogPosts;
};

// ✅ Lấy bài viết theo ID (dùng cho BlogPost)
const getBlogPostById = (id) => {
    return blogPosts.find(post => post.id === Number(id));
};

// ✅ Thêm bài viết mới
const addPost = (title, content) => {
    const newId = blogPosts.length
        ? Math.max(...blogPosts.map(p => p.id)) + 1
        : 1;

    const newPost = {
        id: newId,
        title,
        content,
        summary: content.slice(0, 60) + '...',
        author: 'Admin Blog',
        date: new Date().toLocaleDateString('vi-VN'),
        image_url: '/src/assets/img/top5.webp',
        likes: 0,
        comments_count: 0
    };

    blogPosts.push(newPost);
    return newId;
};

// ✅ Xác thực
const getAuthStatus = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};

const setAuthStatus = (status) => {
    if (status === true) {
        localStorage.setItem('isAuthenticated', 'true');
    } else {
        localStorage.removeItem('isAuthenticated');
    }
};

export {
    blogPosts,
    getAllPosts,
    getBlogPostById,
    addPost,
    getAuthStatus,
    setAuthStatus
};
