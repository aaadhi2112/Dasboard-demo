const jsonserver = require('json-server');

const server = jsonserver.create()

const router = jsonserver.router('db.json')

const middleware = jsonserver.defaults()

const port = process.env.PORT || 3001

server.use(middleware)
server.use(router)

server.listen(port,()=>{
    console.log('jsonserver listening on port 3001');
})