import express from "express";

import { getAllPosts, createPost } from "../controllers/postController.js";

const router = express.Router();

//Creating A route For Getting All The Posts
router.get('/', getAllPosts);

//Creating A route For Creating A Post
router.post('/', createPost);

export default router;