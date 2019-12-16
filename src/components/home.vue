<template>
	<el-container>
		<el-aside width="240px">
			<el-menu
			default-active="1"
			class="el-menu-vertical-demo"
			background-color="#304156"
			text-color="#fff"
			active-text-color="#409eff">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-document"></i>
						<span>文章</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="1-1">文章列表</el-menu-item>
						<el-menu-item index="1-2">文章创作</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-document"></i>
						<span>标签</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="2-1">标签1</el-menu-item>
						<el-menu-item index="2-2">标签2</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-document"></i>
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
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import collapseBtn from '@/components/public/collapseBtn.vue';
	export default {
		data(){
			return {

			}
		},
		components: {
			collapseBtn,
		}
	}
</script>

<style scoped lang='less'>
	.el-container {
		height: 100%;
		.el-menu {
			height: 100%;
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
	  
	  // .el-aside {
	  //   background-color: #D3DCE6;
	  //   color: #333;
	  //   line-height: 200px;
	  // }
	  
	  // .el-main {
	  //   background-color: #E9EEF3;
	  //   color: #333;
	  //   line-height: 160px;
	  // }
</style>