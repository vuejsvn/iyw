import { createRouter, createWebHistory } from "vue-router";
import Detail from "../components/Detail.vue";
import Home from "../components/Home.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/detail",
        name: "Detail",
        component: Detail,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;