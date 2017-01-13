import Vue from 'vue'
import Router from 'vue-router'
import ga from 'vue-ga'
import About from './views/About.vue'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

const router = new Router({
	mode: 'hash',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/blog',
			component: Blog
		},
		{
			path: '/portfolio',
			component: Portfolio
		},
		{
			path: '/about',
			component: About
		}
	]
})
ga(router, 'UA-88974105-1')
export default router
