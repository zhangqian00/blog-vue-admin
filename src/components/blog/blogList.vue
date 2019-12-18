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
		    show-overflow-tooltip
		    style="width: 100%">
			    <el-table-column
			      prop="title"
			      label="标题"
			      show-overflow-tooltip
			      width="320">
			    </el-table-column>
			    <el-table-column
			      prop="author"
			      label="作者"
			      show-overflow-tooltip
			      width="120">
			    </el-table-column>
			    <el-table-column
			      prop="keywords"
			      label="关键字"
			      show-overflow-tooltip
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="coverSrc"
			      label="封面图"
			      show-overflow-tooltip
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="blogTags"
			      label="分类标签"
			      width="140">
			    </el-table-column>
			    <el-table-column
			      prop="createDate"
			      label="创建时间"
			      width="170">
			    </el-table-column>
			    <el-table-column
			      label="操作">
			    	<template slot-scope="scope">
				        <el-button size="mini">编辑</el-button>
				        <el-button size="mini" type="danger">删除</el-button>
				    </template>
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
					keyid: '1234567890',
					title: '测试测试测试测试测试测试测试测试',
					author: 'zhangqian00',
					keywords: '关键字关键字',
					coverSrc: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3118956596,1809570833&fm=26&gp=0.jpg',
					blogTags: ['Vue'],
		            createDate: '2016-05-02 12:01:16'
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