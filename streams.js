const fs =require('fs');
const readStream = fs.createReadStream('docs/blog3.txt',{encoding:'utf8'});
const writeStream=fs.WriteStream('docs/blog4.txt')
// readStream.on('data',(chunk)=>{
//     console.log('--------------------------------------------NEW CHUNK----------------------------------------------------------------------------------------------')
//     console.log(chunk)
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk)
// })

//pipe from a readable stream to writeble stream : fi 3oudh 
readStream.pipe(writeStream)