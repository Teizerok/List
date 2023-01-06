import { createWebHistory, createRouter } from "vue-router";
import Posts from "../views/Posts.vue";
import Map from "../views/Map.vue";

const routes = [
  { path: "/", component: Posts },
  { path: "/map", component: Map },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
