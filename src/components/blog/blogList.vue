<template>
	<div id="blogList">
		<div class="searchDiv">
			<div class="item">
				<el-input
				  placeholder="请输入文章标题"
				  v-model="blogTitle"
				  clearable>
				</el-input>
			</div>
			<div class="item btnItem">
				<el-button type="primary" size="small" icon="el-icon-search" @click='getList(1)'>搜索</el-button>
				<el-button type="success" size="small" icon="el-icon-circle-plus-outline">新增</el-button>
			</div>
		</div>
		<div class="list" v-loading='listLoading'>
			<el-table
		    :data="tableData"
		    border
		    show-overflow-tooltip
		    style="width: 100%">
		    	<el-table-column
			      prop="rownumber"
			      label="序号"
			      align='center'
			      width="60">
			    </el-table-column>
			    <el-table-column
			      prop="title"
			      label="标题"
			      show-overflow-tooltip
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="author"
			      label="作者"
			      show-overflow-tooltip
			      align='center'
			      width="160">
			    </el-table-column>
			    <el-table-column
			      prop="keywords"
			      label="关键字"
			      show-overflow-tooltip
			      width="200">
			    </el-table-column>
				<el-table-column
			      prop="blogtype"
			      label="类型"
				  align='center'
			      show-overflow-tooltip
			      width="100">
				  	<template slot-scope='scope'>
						<el-tag size="mini" v-if='scope.row.blogtype==="yc"'>原创</el-tag>
						<el-tag size="mini" type="warning" v-if='scope.row.blogtype==="zz"'>转载</el-tag>
						<el-tag size="mini" type="warning" v-if='scope.row.blogtype==="fy"'>翻译</el-tag>
					</template>
			    </el-table-column>
			    <el-table-column
			      prop="coversrc"
			      label="封面图"
			      show-overflow-tooltip
			      width="200">
			    </el-table-column>
			    <el-table-column
			      label="分类标签"
			      show-overflow-tooltip
			      align='center'
			      width="220">
			      <template slot-scope='scope'>
			      	<el-tag size="mini" v-for='(item,index) in scope["row"]["blogtags2"]' :key='index'>{{item}}</el-tag>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="创建时间"
			      align='center'
			      width="130">
			      <template slot-scope="scope">
			      	{{scope.row.createdate|dateFormat}}
			      </template>
			    </el-table-column>
				<el-table-column
			      label="状态"
				  prop='fbzt'
			      align='center'
			      width="130">
			      <template slot-scope="scope">
			      	<el-tag type="success" size="mini" v-if='scope.row.fbzt===1'>已发布</el-tag>
			      	<el-tag type="info" size="mini" v-else>未发布</el-tag>
			      </template>
			    </el-table-column>
			    <el-table-column
			    	align='center'
			      label="操作">
			    	<template slot-scope="scope">
				        <el-button size="mini" type='primary'>查看</el-button>
				        <el-button size="mini">编辑</el-button>
				        <el-button size="mini" type="danger">删除</el-button>
				    </template>
			    </el-table-column>
		    </el-table>
		</div>
	    <el-pagination
	    	v-if='listTotal'
		    background
		    @current-change='getList'
		    layout="prev,pager,next,total"
		    :total="listTotal">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				listLoading: false,
				blogTitle: '',
				tableData: [],
		        listTotal: 0,
			}
		},
		created(){
			this.getList(1);
		},
		methods: {
			getList(page){ // 获取列表
				this.listLoading = true;
				var params = {
					pageindex: page,
					pagesize: 10
				};
				if(this.blogTitle.replace(/\s*/g,"")){
					params.blogtitle = this.blogTitle.replace(/\s*/g,"");
				}
				this.$ajax.post(this.$httpConfig.blogList,params).then((res)=>{
					if(res.data.ErrorCode.Code === 0){
						this.tableData = res.data.DataContext.result||[];
						this.tableData.forEach((el)=>{
							if(el.blogtags){
								el.blogtags2 = el.blogtags.split(',');
							}
						});
						this.listTotal = res.data.DataContext.total||0;
						this.listLoading = false;
					}
				}).catch((err)=>{
					this.$message.error(err);
					this.listLoading = false;
				});
			},
			pageChange(page){
				console.log(page)
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
		margin-bottom: 51px;
	}
</style>
<style>
	#blogList .searchDiv .el-input__inner {
		height: 30px;
		line-height: 30px;
	}
	#blogList .searchDiv .el-input__icon {
		line-height: 30px;
	}
	#blogList .el-table thead .cell {
		text-align: center;
	}
	#blogList .el-table td .el-tag {
		margin: 0 5px;
	}
</style>