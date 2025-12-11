// src/stores/posts.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

// Khởi tạo một vài bài viết mẫu
const initialPosts = [
  {
    id: 1,
    userId: 1,
    author: 'Sinh Viên FPT',
    title: 'Bài viết đầu tiên về VueJS',
    content: 'Đây là nội dung cơ bản của bài viết mẫu...',
    imageUrl: 'https://via.placeholder.com/600x200?text=VueJS',
    date: new Date().toISOString(),
    views: 0,      // ✅ THÊM
    comments: []
  }
]


export const usePostsStore = defineStore('posts', () => {
    
    // STATE: Mảng chứa tất cả các bài viết
    const posts = ref(
  JSON.parse(localStorage.getItem('posts')) || initialPosts
);


    // GETTERS: Lấy bài viết theo ID
    const getPostById = (id) => {
        return posts.value.find(post => post.id === id);
    };

    // ACTIONS: Thêm bài viết mới
    const addPost = (newPostData, userId, authorName) => {
  const newPost = {
    id: Date.now(), // tránh trùng id
    userId,
    author: authorName,
    title: newPostData.title,
    content: newPostData.content,
    imageUrl: newPostData.imageUrl || null,
    date: new Date().toISOString(),
    comments: [],
  };

  posts.value.unshift(newPost);
  localStorage.setItem('posts', JSON.stringify(posts.value));

  return { success: true, post: newPost };
};

    
    // ACTIONS: Xóa bài viết (cần dùng cho Y2.2)
   const deletePost = (postId, currentUserId) => {
  const index = posts.value.findIndex(p => p.id === postId);

  if (index !== -1 && posts.value[index].userId === currentUserId) {
    posts.value.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts.value));
    return { success: true, message: 'Xóa bài viết thành công.' };
  }
  return { success: false, message: 'Không có quyền xóa.' };
};

const updatePost = (postId, newData, currentUserId) => {

  //  Tìm bài viết theo ID
  const post = posts.value.find(p => p.id === postId);

  // Nếu không tìm thấy bài viết
  if (!post) {
    return { success: false, message: 'Bài viết không tồn tại.' };
  }

  //  Kiểm tra quyền (chỉ tác giả mới được sửa)
  if (post.userId !== currentUserId) {
    return { success: false, message: 'Bạn không có quyền sửa bài viết này.' };
  }

  //  Cập nhật từng trường
  post.title = newData.title;
  post.content = newData.content;
  post.imageUrl = newData.imageUrl;

  // Lưu lại localStorage để không mất khi reload
  localStorage.setItem('posts', JSON.stringify(posts.value));

  // Trả kết quả
  return { success: true, message: 'Cập nhật bài viết thành công.' };
};

// ACTIONS: Thêm bình luận vào bài viết
const addComment = (postId, commentContent, currentUser) => {

  //  Tìm bài viết
  const post = posts.value.find(p => p.id === postId);

  if (!post) {
    return { success: false, message: 'Bài viết không tồn tại.' };
  }

  //  Tạo comment mới
  const newComment = {
    id: Date.now(),
    userId: currentUser.id,
    author: currentUser.name,
    content: commentContent,
    date: new Date().toISOString(),
  };

  // Thêm comment vào bài viết
  post.comments.push(newComment);

  // Lưu localStorage
  localStorage.setItem('posts', JSON.stringify(posts.value));

  return { success: true, message: 'Bình luận thành công.' };
};




    return {
        posts,
        addPost,
        getPostById,
        deletePost,
        updatePost,
        addComment,
    };
});