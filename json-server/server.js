// server.js
const jsonServer = require('json-server')
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
          
        }
     })
    
 }

 listeSchemaProtected = ["workspace.json", "getNameSchema.json"]
 function schemaProtected(nameTest) {
    let isProtected = false
    listeSchemaProtected.forEach( name => {
        if(nameTest === name) {
            isProtected =  true
        }
    })

    return isProtected
 }

 function allNameJson(filePath) {
    const files = fs.readdirSync(filePath);
    let listFileName = [
      
    ]

    files.forEach((filename) => {
        schemaProtected(filename)

       if(path.basename(filePath) === 'json' && schemaProtected(filename)!=true) {
           listFileName.push({
               name: path.basename(filename, '.json')
           })
       }
    })

    const jsonTest = {
        schemajson: listFileName
    }

    console.log(jsonTest)

    fs.writeFile(filePath+'\\getNameSchema.json', JSON.stringify(jsonTest), err => {
        if (err ) {
            console.log("error writing file" + err)
        } else {
            console.log("Successfully wrote in file")
        }
    })
 }



server.use(middlewares)


const router = jsonServer.router(obj)

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
                    
                    let jsonContent = req.body.customSchema.schemaJson.schema

                    fs.writeFile(filePath+'\\'+ path.basename(filename,''), JSON.stringify(jsonContent), err => {
                         if (err ) {
                             console.log("error writing file" + err)
                         } else {
                             console.log("Successfully wrote in file")
                             allNameJson(filePath)
                         }
                     })
                 } 
            } catch(e) {
        
            } 
        }
     })

    if (req.method === 'PUT') {
        console.log(req.body.jsonUpload.name)
        fs.writeFile(filePath+'\\'+ req.body.jsonUpload.name, JSON.stringify(req.body.jsonUpload.json), err => {
            if (err ) {
                console.log("error writing file" + err)
            } else {
                console.log("Successfully wrote in file")
                allNameJson(filePath)
            }
        })
    }
    next()
})

server.use(router)
server.listen(8080, () => {
console.log('JSON Server is running')
})