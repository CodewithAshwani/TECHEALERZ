const express = require("express");
const router = express.Router();
const blogController = require("../Controllers/Blog_Controller");

//post blog
router.post("/postblog", blogController.Blog_post_controller);

//get blog
router.get("/getblogs", blogController.Get_blogs_controller);
//get blogs by their id

router.get("/getblog/:id", blogController.Get_blog_by_id_controller);

// Update a blog post
router.put("/updateblog/:id", blogController.Update_blog_controller);

// Delete a blog post
router.delete("/deleteblog/:id", blogController.Delete_blog_controller);
module.exports = router;

