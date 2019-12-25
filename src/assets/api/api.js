const globalApi = 'http://localhost:3000';

export default {
	blogList: globalApi + '/api/blogList', // 博客列表
	addBlog: globalApi + '/api/addBlog', // 提交博客
};