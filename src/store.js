import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 0,
	startingZip: 'hard',
	startingCity: '',
	endingZip: '',
	endingCity: ''
}

const mutations = {
	increment: state => state.count++,
	decrement: state => state.count--
}

const actions = {
	incrementAsync({commit}) {
		setTimeout(() => {
			commit('increment')
		}, 200)
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
})

export default store
