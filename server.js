import express from 'express'
import cookieParser from 'cookie-parser';

// import routes
import web from './routes/web.js'

const server=express();
const port= process.env.PORT || '4000'

// Cookie Parser middleware
server.use(cookieParser());

// Load routes
server.use('/',web);

server.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
});

