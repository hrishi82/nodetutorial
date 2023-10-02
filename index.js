const fs = require('fs')
const path = require('path')


// fs.readFile('./files/l.txt', (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString())

// })
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data)=>{
    if(err) throw err;
    console.log(data.toString())

})

//exit on uncaught errors
process.on('uncaughtException', err =>{
    console.error('there was an uncaught error:', err)
    process.exit(1)
})
