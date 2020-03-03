import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		num: 0
	},
	mutation: {
		add(state) {
			state.num++
		}
	}
})
