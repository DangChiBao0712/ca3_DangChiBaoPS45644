import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

// Hàm kiểm tra xác thực (sử dụng cho route bảo vệ Y2.2)
const requireAuth = (to, from, next) => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated) {
    // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
    next({ name: 'login' })
  } else {
    // Nếu đã đăng nhập, cho phép đi tiếp
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/posts/create',
      name: 'create-post',
      component: () => import('../views/CreatePostView.vue'),
      meta: { requiresAuth: true }, // Dành dấu route cần đăng nhập
      beforeEnter: requireAuth // Thêm Guard
    },
    // 🔥 ROUTE MỚI CHO CHI TIẾT BÀI VIẾT (Y2.3)
    {
      // Sử dụng ':id' để bắt tham số động
      path: '/posts/:id',
      name: 'post-detail',
      component: () => import('../views/PostDetailView.vue')
    },
    // 🔥 ROUTE MỚI CHO TRANG THÔNG TIN CÁ NHÂN (Y2.4)
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: { requiresAuth: true }, // Dành dấu route cần đăng nhập
      beforeEnter: requireAuth // Thêm Guard
    },
    {
  path: '/myPosts',
  name: 'my-posts',
  component: () => import('@/views/MyPosts.vue')
}

  ]
})

export default router