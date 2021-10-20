import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/home_page.vue'

Vue.use(Router)

const constrouters = [
	// {
	// 	path: "/Home",
	// 	component: resolve => require(['../components/Home.vue'], resolve),
	// 	children: [
	// 		{
	// 			path: "/info",
	// 			component: resolve => require(['../components/info.vue'], resolve),
	// 			meta: { title: 'info'}
	// 		}
	// 	]
	// },
	{
		path: "/",
		component: HomePage
	}
]

export default new Router({
	mode: 'history',
	routes: constrouters
})
