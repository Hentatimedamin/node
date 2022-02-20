
// another Node js core module File system
const fs = require('fs')
 // reading files 
// fs.readFile('./blog.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
//  })
//  console.log('last line')

// writing files
 fs.writeFile('docs/blog.txt','hello med',()=>{
    console.log('file was written')
})
fs.writeFile('docs/blog1.txt','hello again med',()=>{
    console.log('file was written')
})
//directories 
if(!fs.existsSync('./folder')){ //synchronus method  : will block the codee 
    fs.mkdir("./folder",(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder created ')
    })
}
else{ 
    fs.rmdir('./folder',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}
 // deleting
 if (fs.existsSync('./deleteme.txt')){
     fs.unlink('./deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
     })
 }