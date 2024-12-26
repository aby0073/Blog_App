const express=require('express')
const router=express.Router()
const Blog=require('../models/schema');
const bodyparser=require('body-parser');

// Middleware setup
router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());

 router.post('/posts',async (req,res)=>{           //POST
    const blog=new Blog({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author
    });
    try{
        const newBlog=await blog.save();
        res.status(201).json(newBlog);
    }catch(error){
        res.status(400).json({message:error.message});
    }
 });
 
module.exports=router;