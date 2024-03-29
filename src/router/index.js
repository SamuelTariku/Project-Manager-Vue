import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},

	{
		path: "/project",
		name: "Project",
		component: () => import("@/views/ProjectDashboard.vue"),
	},
	{
		path: "/detail",
		name: "Detail",
		component: () => import("@/views/Detail.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
