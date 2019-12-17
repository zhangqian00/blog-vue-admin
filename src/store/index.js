import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		collapseFlag: false, // 左侧菜单是否收起
	},
	getters:{
		collapseFlag(state){ // 获取左侧菜单是否收起
			return state.collapseFlag;
		}
	},
	mutations: {
		setCollapseFlag(state){ // 设置左侧菜单是否收起
			state.collapseFlag = !state.collapseFlag;
		}
	},
	actions: {
		toggleSideBar({commit}){
			commit('setCollapseFlag');
		}
	}
});

export default store;