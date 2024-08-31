const Post = require("../models/Post");

let PostDataProvider = {
    createPost: async (postData) => {
        const post = new Post(postData);
        return await post.save();
    },
    findPosts: async (filter = {}, options = {}) => {
        return await Post.find(filter, null, options);
    },
    findPostById: async (postId) => {
        return await Post.findById(postId);
    },
    updatePostById: async (postId, updateData) => {
        return await Post.findByIdAndUpdate(postId, updateData, { new: true });
    },
    deletePostById: async (postId) => {
        return await Post.findByIdAndDelete(postId);
    }
}

module.exports = PostDataProvider;