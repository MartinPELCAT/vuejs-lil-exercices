import { createWebHistory, createRouter } from "vue-router";
import TapCode from "../components/tap-code/index.vue";
const history = createWebHistory();
const routes = [{ path: "/tap", component: TapCode }];
export const router = createRouter({ history, routes });
