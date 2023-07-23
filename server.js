import express from 'express'
import cookieParser from 'cookie-parser';

const server=express();
const port= process.env.PORT || '4000'

// Cookie Parser middleware
server.use(cookieParser());

server.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
});

