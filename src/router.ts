import {createWebHistory, createRouter} from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import('./pages/Home.vue')
        },
        {
            name: "movie",
            path: "/movies/:movie_title",
            component: () => import('./pages/Movie.vue')
        },
        {
            name: "search",
            path: "/search",
            component: () => import('./pages/Search.vue')
        },
    ]
})