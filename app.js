


const express = require('express');
const app = express();
const mongoose=require('mongoose')
//connect to mongo db
const blogRouter=require('./routers/blogRouter')
const mdbUrl="mongodb+srv://NIMa:NIMa1997@cluster0.hl83d.mongodb.net/node-tuto?retryWrites=true&w=majority"
mongoose.connect(mdbUrl).then(()=>{
    console.log('connected to MDB')
    app.listen(3000)
}).catch((err)=>{
    console.log(err)
})

app.set("view engine","ejs");

//listen for request 


// app.get('/',(req,res)=>{
//     //res.send('<p>Home page</p>')
//     res.sendFile('./views/index.html',{root:__dirname})
// });
// app.get('/about',(req,res)=>{
//     //res.send('<p>About page</p>')
//     res.sendFile('./views/about.html',{root:__dirname})
// });
// app.get('/about-us',(req,res)=>{
//     //res.send('<p>About page</p>')
//     res.redirect('/about')
// app.use((req,res)=>{
//     res.sendFile('./views/404.html',{root:__dirname})
// })
// });
app.use((req,res,next)=>{
    console.log(req.url)
    next()
})
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.redirect('/blogs')
})
// app.get('/add-blog',(req,res)=>{
//     const blog =new Blog({
//         title:'first mongo blog',
//         snippet:'first mongo snippet',
//         body:'first mongo body '
//     })
//     blog.save().then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err)
//     })
// });
// app.get('/all-blogs',(req,res)=>{
//     Blog.find().then((resul)=>{
//         res.send(resul)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
// app.get('/single',(req,res)=>{
//     Blog.findById('61c9e8b6a94c2caa67167f3d').
//     then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
app.use(blogRouter)

app.get("/about",(req,res)=>{
    res.render("about",{title:'Home'});
});

app.get("/about-us",(req,res)=>{
    res.redirect("/about",{title:'Home'});
})

app.use((req,res)=>{
    res.status(404).render("404",{title:'Home'});
})
