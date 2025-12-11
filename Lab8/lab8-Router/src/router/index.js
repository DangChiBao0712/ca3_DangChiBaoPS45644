import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import BlogList from "../components/BlogList.vue";
import BlogPost from "../components/BlogPost.vue";
import UserProfile from "../components/UserProfile.vue";
import UserProfileInfo from "../components/UserProfileInfo.vue";
import UserProfileSettings from "../components/UserProfileSettings.vue";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog", name: "BlogList", component: BlogList },
  { path: "/blog/:id", name: "BlogPost", component: BlogPost },

  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
    alias: "/me",
    children: [
      { path: "info", name: "UserProfileInfo", component: UserProfileInfo },
      { path: "settings", name: "UserProfileSettings", component: UserProfileSettings },
    ],
  },

  { path: "/login", name: "Login", component: Login },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
