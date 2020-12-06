import { createWebHistory, createRouter } from "vue-router";
import TapCode from "../components/tap-code/index.vue";
import Morse from "../components/morse/index.vue";
const history = createWebHistory();
const routes = [
  { path: "/tap", component: TapCode },
  { path: "/morse", component: Morse },
];
export const router = createRouter({ history, routes });
