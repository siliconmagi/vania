import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

export default new Router({
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
