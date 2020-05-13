// server.js
const jsonServer = require('json-server')
const express = require('express');
const server = jsonServer.create()

const middlewares = jsonServer.defaults()

// Get mock data
const fs = require('fs');
const path = require('path');
 
 var obj = {};  //import mock datas
 const mockFolder = './json'; //mock json path folder
 const filePath = path.resolve(mockFolder);
 
 
 fileDisplay(filePath);
 

 function fileDisplay(filePath) {
     // Return filelist on based of filePath
     const files = fs.readdirSync(filePath);
     files.forEach((filename) => {

        if(path.basename(filePath) === 'json') {
            obj[path.basename(filename,'.json')] = require(path.join(filePath,filename))
             console.log(filename)
        }
     })
 }

server.use(middlewares)


const router = jsonServer.router(obj)

// router.render = (req, res) => {
//     res.status(500).jsonp({
//       error: "error message here"
//     })
// }

console.log(obj)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    const files = fs.readdirSync(filePath);
     files.forEach((filename) => {

        if(path.basename(filePath) === 'json') {
            try {
                if ( req.body.customSchema.type === path.basename(filename,'.json') ) {
                    console.log(filePath+'\\'+ path.basename(filename,''))
                    fs.writeFile(filePath+'\\'+ path.basename(filename,''), JSON.stringify(req.body), err => {
                        if (err ) {
                            console.log("error writing file" + err)
                        } else {
                            console.log("Successfully wrote in file")
                        }
                    })
                 }
            } catch(e) {
                // console.log(e)
            } 
        }
     })

    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
})

server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})