const Blog_post = require('../Models/Blog_Post_Model');

module.exports.Blog_post_controller = async (req, res) => {
    try {
        const { Title, Content, Image } = req.body;
        const Blooging = await Blog_post.create({ Title, Content, Image })
        res.status(201).json({ blogdata: Blooging })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Controller function to retrieve all blog posts
module.exports.Get_blogs_controller = async (req, res) => {
    try {
        const blogs = await Blog_post.find();
        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Controller function to get a blog post by ID
module.exports.Get_blog_by_id_controller = async (req, res) => {
    
    
    try {
        const blog = await Blog_post.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json({ blog });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Controller function to update a blog post
module.exports.Update_blog_controller = async (req, res) => {
    try {
        const { Title, Content, Image } = req.body;
        const updatedBlog = await Blog_post.findByIdAndUpdate(req.params.id, { Title, Content, Image }, { new: true });
        res.status(200).json({ blogdata: updatedBlog });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Controller function to delete a blog post
module.exports.Delete_blog_controller = async (req, res) => {
    try {
        const deletedBlog = await Blog_post.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}