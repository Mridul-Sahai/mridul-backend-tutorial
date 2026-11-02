import Post from "../models/Post.js";
// CREATE POST
export const createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        const post = await Post.create({
            title,
            content,
            author
        });

        res.status(201).json({
            message: "Post created successfully",
            post
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// GET ALL POSTS
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// GET SINGLE POST
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// UPDATE POST
export const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post updated successfully",
            post
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// DELETE POST
export const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};