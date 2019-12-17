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
						<el-input v-model="ruleForm.author" disabled></el-input>
					</el-form-item>
				</el-col>
				<el-col :span='6'>
					<el-form-item label="关键字：" prop="keywords">
						<el-input v-model="ruleForm.keywords" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :span='6'>
					<el-form-item label="博客类型：" prop="blogType">
						<el-select v-model="ruleForm.blogType" placeholder="请选择博客类型">
							<el-option label="原创" value="0"></el-option>
							<el-option label="转载" value="1"></el-option>
							<el-option label="翻译" value="2"></el-option>
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
					<el-form-item label="分类标签：" style='margin-bottom:0;'>
					    <el-checkbox-group v-model="ruleForm.blogTags">
					      <el-checkbox label="JavaScript" name="JavaScript"></el-checkbox>
					      <el-checkbox label="Vue" name="Vue"></el-checkbox>
					      <el-checkbox label="Node.js" name="Node.js"></el-checkbox>
					      <el-checkbox label="总结" name="总结"></el-checkbox>
					    </el-checkbox-group>
					</el-form-item>
				</el-col>
				<el-col :span='20'>
					<el-form-item>
						<el-button type="primary" size="medium" @click="submitForm('ruleForm')">提交</el-button>
					</el-form-item>
				</el-col>
			</el-form>
		</el-row>
		<textarea id="editBlock"></textarea>
	</div>
</template>

<script>
	import SimpleMDE from 'simplemde';
	export default {
		data(){
			return {
				ruleForm: {
					title: '',
					author: 'zhangqian00',
					keywords: '',
					blogType: '0',
					describe: '',
					coverSrc: '',
					blogTags: []
		        },
		        rules: {
					title: [
						{ required: true, message: '请输入标题', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
					],
					author: [
						{ required: true, message: '请输入作者', trigger: 'blur' }
					],
					blogType: [
						{ required: true, message: '请选择博客类型', trigger: 'blur' }
					],
		        }
			}
		},
		mounted(){
			this.initEdit();
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			initEdit(){
				var simplemde = new SimpleMDE({
					element: document.getElementById("editBlock"), // 容器
					spellChecker: false, // 
				    autofocus: true,
				    // autoDownloadFontAwesome: true, // 是否下载FontAwesome
				    placeholder: "输入内容...",
				    autosave: { // 是否自动保存
				        enabled: true,
				        uniqueId: "demo",
				        delay: 1000,
				    },
				    tabSize: 4,
				    status: false,
				    lineWrapping: false,
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