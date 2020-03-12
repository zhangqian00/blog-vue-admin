<template>
	<div id="createBlog">
		<el-row>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-col :span='20'>
					<el-form-item label="博客标题：" prop="title">
						<el-input v-model="ruleForm.title" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :span='6'>
					<el-form-item label="作者：" prop="author">
						<el-input v-model="ruleForm.author" readonly></el-input>
					</el-form-item>
				</el-col>
				<el-col :span='6'>
					<el-form-item label="关键字：" prop="keywords">
						<el-input v-model="ruleForm.keywords" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :span='6'>
					<el-form-item label="博客类型：">
						<el-select v-model="ruleForm.blogType" placeholder="请选择博客类型">
							<el-option label="原创" value="yc"></el-option>
							<el-option label="转载" value="zz"></el-option>
							<el-option label="翻译" value="fy"></el-option>
					    </el-select>
					</el-form-item>
				</el-col>
				<el-col :span='20'>
					<el-form-item label="描述：" prop="describe">
						<el-input v-model="ruleForm.describe" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :span='20'>
					<el-form-item label="封面连接：" prop="coverSrc">
						<el-input v-model="ruleForm.coverSrc" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :span='20'>
					<el-form-item label="分类标签：" prop='blogTags' style='margin-bottom:0;'>
					    <el-checkbox-group v-model="ruleForm.blogTags">
					      <el-checkbox label="JavaScript" name="JavaScript"></el-checkbox>
					      <el-checkbox label="Vue" name="Vue"></el-checkbox>
					      <el-checkbox label="Node.js" name="Node.js"></el-checkbox>
					      <el-checkbox label="总结" name="总结"></el-checkbox>
					    </el-checkbox-group>
					</el-form-item>
				</el-col>
				<el-col :span='20'>
					<el-form-item style='text-align:center;'>
						<el-button type="primary" size="medium" @click="submitForm(0)">保存</el-button>
						<el-button type="success" size="medium" @click="submitForm(1)">保存并发布</el-button>
					</el-form-item>
				</el-col>
			</el-form>
		</el-row>
		<textarea id="editBlock"></textarea>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex';
	import SimpleMDE from 'simplemde';
	export default {
		data(){
			return {
				ruleForm: {
					title: '',
					author: 'zhangqian00',
					keywords: '',
					blogType: 'yc',
					describe: '',
					coverSrc: '',
					blogTags: [],
					simplemde: null,
		        },
		        rules: {
					title: [
						{ required: true, message: '请输入标题', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
					],
					author: [
						{ required: true, message: '请输入作者', trigger: 'blur' }
					],
					keywords: [
						{ required: true, message: '请输入关键字', trigger: 'blur' }
					],
					blogTags: [
						{ type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }
					],
		        }
			}
		},
		mounted(){
			this.initEdit();
		},
		methods: {
			...mapMutations(['setRouterName']),
			submitForm(zt) { // 点击提交
				this.$refs['ruleForm'].validate((valid) => {
					if (valid) {
						var markDown = this.simplemde.value();
						var html = this.simplemde.markdown(markDown);
						this.$confirm('确认提交?', '提示', {
							confirmButtonText: '确认',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							var params = {
								title: this.ruleForm.title,
								author: this.ruleForm.author,
								keywords: this.ruleForm.keywords,
								blogtype: this.ruleForm.blogType,
								describe: this.ruleForm.describe,
								coversrc: this.ruleForm.coverSrc,
								blogtags: this.ruleForm.blogTags.join(','),
								fbzt: zt,
								blogcontent: this.simplemde.value()
							};
							this.$ajax.post(this.$httpConfig.addBlog,params).then((res)=>{
								if(res.data.ErrorCode.Code == 0){
									if(res.data.DataContext){
										this.$message({
								            message: zt==0?'保存成功':'发布成功',
								            type: 'success'
								        });
								        this.$router.push('/blogList');
									}
								}
							}).catch((err)=>{
								this.$message.error(err);
							});
						}).catch(() => {});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			initEdit(){ // 初始化编辑器
				this.simplemde = new SimpleMDE({
					element: document.getElementById("editBlock"), // 容器
					// spellChecker: false, // 
				    autofocus: true,
				    // autoDownloadFontAwesome: true, // 是否下载FontAwesome
				    placeholder: "输入内容...",
				    autosave: { // 是否自动保存
				        enabled: true,
				        uniqueId: "demo",
				        delay: 1000,
				    },
				    tabSize: 4,
				    // status: false,
				    // lineWrapping: false,
				    renderingConfig: {
				        codeSyntaxHighlighting: true // 代码高亮，需引入highlight.js
				    },
				});
			}
		}
	}
</script>

<style scoped lang='less'>
	
</style>

<style lang='less'>
	#createBlog {
		.CodeMirror,
		.editor-preview-side {
			line-height: 30px;
		}
		.CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word) {
			background: none;
		}
	} 
	
</style>