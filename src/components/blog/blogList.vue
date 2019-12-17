<template>
	<div id="blogList">
		<div class="searchDiv">
			<div class="item">
				<el-input
				  placeholder="标题/描述"
				  v-model="blogTitle"
				  clearable>
				</el-input>
			</div>
			<div class="item btnItem">
				<el-button type="primary" size="small" icon="el-icon-search">搜索</el-button>
				<el-button type="success" size="small" icon="el-icon-circle-plus-outline">新增</el-button>
			</div>
		</div>
		<div class="list">
			<el-table
		    :data="tableData"
		    border
		    style="width: 100%">
			    <el-table-column
			      prop="date"
			      label="日期"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="姓名"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="地址">
			    </el-table-column>
		    </el-table>
		</div>
	    <el-pagination
		  background
		  layout="prev,pager,next,total"
		  :total="1000">
		</el-pagination>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				blogTitle: '',
				tableData: [{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }]
			}
		}
	}
</script>

<style scoped lang='less'>
	.searchDiv {
		padding: 0 0 20px;
		display: flex;
		justify-content: flex-start;
		.item {
			width: 300px;
			margin-right: 20px;
		}
		.btnItem {
			width: calc(100% - 350px);
			display: flex;
			justify-content: space-between;
		}
	}
	.list {
		height: 580px;
		
	}
</style>
<style>
	#blogList .searchDiv .el-input__inner {
		height: 30px;
		line-height: 30px;
	}
</style>