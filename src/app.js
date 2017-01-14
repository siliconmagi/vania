import Vue from 'vue'
import App from 'views/App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import debounce from 'lodash/debounce'

sync(store, router)

export default new Vue({
	router,
	store,
	debounce,
	...App
})
