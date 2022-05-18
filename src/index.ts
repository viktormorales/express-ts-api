import dotenv from "dotenv";
import express from "express";

// initialize configuration
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req:any, res:any ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `Server started at ${ port }` );
} );