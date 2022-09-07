// Import ExpressJS framework
import * as express from "express";
// Import and configure dotenv
import * as dotenv from "dotenv";
dotenv.config();

// Import modules related to routes
import homeRouter from "./routes/v1/home";
import postsRouter from "./routes/v1/posts";

// Initialize ExpressJS server
const app = express();
const port = process.env.SERVER_PORT;

// For parsing application/json POST DATA
app.use(express.json());
// For parsint application/x-www-form-urlencoded POST DATA
app.use(express.urlencoded({ extended: true }));

// Create routes
// your-domain.com/v1 - Imports the homeRouter module
app.use("/v1", homeRouter);
// your-domain.com/v1/posts - Imports the postsRouter module
app.use("/v1/posts", postsRouter);

// Start the ExpressJS server
app.listen( port, () => {
    console.log( `Server started at ${ port }` );
} );