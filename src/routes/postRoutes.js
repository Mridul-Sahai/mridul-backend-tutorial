import express from "express";

import {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
} from "../controllers/postController.js";

const router = express.Router();
// CREATE POST
router.post("/", createPost);

// GET ALL POSTS
router.get("/", getPosts);

// GET SINGLE POST
router.get("/:id", getPostById);

// UPDATE POST
router.put("/:id", updatePost);

// DELETE POST
router.delete("/:id", deletePost);

export default router;