import Vue from 'vue'
import Router from 'vue-router'
const home = () => import ('@/components/home.vue');
const blogList = () => import ('@/components/blog/blogList.vue');
const createBlog = () => import ('@/components/blog/createBlog.vue');

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: home,
		children: [{
			path: '/blogList',
			name: 'blogList',
			component: blogList
		},{
			path: '/createBlog',
			name: 'createBlog',
			component: createBlog
		}]
	}]
})