<template>
	<el-container id='home'>
		<el-aside :class='collapseFlag?"hideSidebar":""'>
			<el-menu
			:collapse='collapseFlag'
			:default-active="routerName"
			background-color="#304156"
			text-color="#fff"
			active-text-color="#409eff">
				<el-submenu index='1'>
					<template slot="title">
						<i class="el-icon-document"></i>
						<span>博客</span>
					</template>
					<el-menu-item-group>
						<router-link :to='{name:"blogList"}'>
							<el-menu-item index="blogList">博客列表</el-menu-item>
						</router-link>
						<router-link :to='{name:"createBlog"}'>
							<el-menu-item index="createBlog">博客创作</el-menu-item>
						</router-link>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-setting"></i>
						<span>标签</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="2-1">标签1</el-menu-item>
						<el-menu-item index="2-2">标签2</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-setting"></i>
						<span>留言</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="3-1">留言1</el-menu-item>
						<el-menu-item index="3-2">留言2</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item index="4">
					<i class="el-icon-setting"></i>
					<span slot="title">导航四</span>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header>
				<collapseBtn></collapseBtn>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import {mapGetters} from 'vuex';
	import collapseBtn from '@/components/public/collapseBtn.vue';
	export default {
		data(){
			return {
				routerName: this.$route.name,
			}
		},
		watch: {
			'$route': {
				handler: function(val,oldVal){
					this.routerName = val.name;
				},
				deep: true
			}
		},
		computed: {
			...mapGetters(['collapseFlag'])
		},
		components: {
			collapseBtn,
		},
		created(){
			
		}
	}
</script>

<style scoped lang='less'>
	.el-container {
		height: 100%;
		.el-aside {
			width: 240px !important;
			box-sizing: border-box;
			overflow-x: hidden;
			transition: width 0.28s;
		}
		.el-aside.hideSidebar {
			width: 65px !important;
		}
		.el-menu {
			height: 100%;
			.el-submenu__title:hover,.submenu-title-noDropdown:hover {
				outline: 0;
			    background-color: #263445!important;
			}
			.el-menu-item:focus, .el-menu-item:hover,.el-menu-item.is-active {
			    outline: 0;
			    background-color: #263445!important;
			}
		}
		.el-menu:not(.el-menu--collapse) {
		    width: 240px;
		    box-sizing: border-box;
		}
		.el-header {
			height: 50px;
		    box-shadow: 0 1px 4px rgba(0,21,41,.08);
		    background: #fff;
		    overflow: hidden;
		    display: flex;
		    justify-content: flex-start;
		    align-items: center;
		    position: relative;
		}
	}
</style>

<style>
	
</style>