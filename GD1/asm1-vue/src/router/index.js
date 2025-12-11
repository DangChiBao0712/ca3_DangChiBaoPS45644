import { createRouter, createWebHistory } from 'vue-router'

// CHỈNH SỬA: Import các Component theo cấu trúc thư mục của bạn: '../components/'
import Home from '../components/Home.vue' // Trang chủ
import Login from '../components/Login.vue' // Trang đăng nhập
import UserProfile from '../components/Profile.vue' // Sử dụng Profile.vue cho /profile
import BlogPost from '../components/PostDetail.vue' // Sử dụng PostDetail.vue cho /blog/:id
import BlogList from '../components/Home.vue' // Giả sử Home.vue làm luôn BlogList
import Dashboard from '../components/Dashboard.vue' // Trang bảo vệ

// CHỈNH SỬA: Thêm các Component con (giả định bạn sẽ tạo chúng trong components/ hoặc sử dụng Profile.vue)
// Nếu bạn chưa có các file này, bạn cần tạo chúng.
import UserProfileInfo from '../components/ProfileInfo.vue' 
import UserProfileSettings from '../components/ProfileSettings.vue' 

// MOCK AUTH (Theo yêu cầu Lab 8)
// LƯU Ý QUAN TRỌNG: Biến này không thể được cập nhật từ component. 
// Hãy sử dụng localStorage trong Login.vue và Route Guard (như đã hướng dẫn trước đó).
// const isAuthenticated = false; // Chỉ nên dùng để tham khảo, không dùng trong thực tế Lab

const routes = [
    { 
        path: '/', 
        name: 'Home', 
        component: Home 
    },
    // Routes Blog (Routes động)
    { 
        path: '/blog', 
        name: 'BlogList', 
        component: BlogList 
    },
    { 
        path: '/blog/:id', 
        name: 'BlogPost', 
        component: BlogPost, // Sử dụng PostDetail.vue
        props: true 
    },
    // Routes Profile (Lồng nhau + Alias)
    { 
        path: '/profile',
        name: 'UserProfile', // Tên Route [cite: 43]
        component: UserProfile, // Sử dụng Profile.vue
        alias: '/me', // Alias Route [cite: 46]
        children: [ // Routes Lồng nhau [cite: 30, 31]
            { path: 'info', name: 'UserProfileInfo', component: UserProfileInfo }, // /profile/info [cite: 32]
            { path: 'settings', name: 'UserProfileSettings', component: UserProfileSettings }, // /profile/settings [cite: 33]
        ]
    },
    // Routes Đăng nhập
    { 
        path: '/login', 
        name: 'Login', 
        component: Login 
    },
    // Routes Bảo vệ
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true } // Đánh dấu cần xác thực [cite: 41]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// BẢO VỆ ROUTES (Route Guard) [cite: 38]
// Sử dụng localStorage thay vì biến const isAuthenticated = false
router.beforeEach((to, from, next) => {
    // Nếu route yêu cầu xác thực [cite: 41]
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Kiểm tra trạng thái đăng nhập trong localStorage
        const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';

        if (!isLoggedIn) {
            // Chưa đăng nhập -> Chuyển hướng đến Login [cite: 41]
            next({ name: 'Login' });
        } else {
            // Đã đăng nhập -> Cho phép
            next();
        }
    } else {
        // Không yêu cầu xác thực -> Cho phép
        next();
    }
});

export default router