const Blog= require('../models/blog')
const express=require('express')
const router= express.Router()

router.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1}).
    then((result)=>{
        res.render('index',{title:'Blogs',blogs:result})
    }).catch((err)=>{
        connsole.log(err)
    })
});
router.post("/blogs/create",(req,res)=>{
    //console.log(req.body)
    const blog =new Blog(req.body)
    blog.save()
    .then(()=>{
        res.redirect('/blogs')
    })
    .then((err)=>{
        console.log(err)
    })
});
router.get("/blogs/create",(req,res)=>{
    res.render("create",{title:'Home'});
})
router.get('/blogs/:id',(req,res)=>{
    Blog.findById(req.params.id)
    .then((result)=>{
        res.render("blog",{title:'blog',blog:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})
router.delete('/blogs/:id',(req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then((resl)=>{
       res.json({redirect:'/blogs'})
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports=router