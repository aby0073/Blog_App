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
 router.get('/posts',async(req,res)=>{            //get
    const blog=await Blog.find().sort({date:-1});
    try{
        res.json(blog);
    }catch(error){
        res.status(500).json({message:error.message})
    }
 })
 router.get('/posts/:id',async(req,res)=>{            //get by id
    const blog=await Blog.findById(req.params.id);
    try{
        res.json(blog);
    }catch(error){
        res.status(500).json({message:error.message})
    }
 })
 router.put('/posts/:id',async(req,res)=>{
    try{
        const updatedBlog=await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedBlog);
    }catch(error){
        res.status(400).json({message:error.message});
    }
 })
 router.delete('/posts/:id',async(req,res)=>{
    try{
        await Blog.findByIdAndDelete(req.params.id);
        res.json({message:'Blog deleted'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
});
 
module.exports=router;