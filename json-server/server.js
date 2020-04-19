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



function getjsonContent(path) {
    let newpath = `./json/${path}.json`;
    let result = JSON.parse(fs.readFileSync(newpath));
    return result;
}


server.use(middlewares)

const router = jsonServer.router(obj)

console.log(obj)

server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})