import Vue from 'vue'
import App from 'views/App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

sync(store, router)

export default new Vue({
	router,
	store,
	...App
})
