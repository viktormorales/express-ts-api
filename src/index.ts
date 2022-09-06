import * as express from "express";
// Initialize and configure dotenv
import * as dotenv from "dotenv";
dotenv.config();

// Import routes
import homeRouter from "./routes/v1/home";
import postsRouter from "./routes/v1/posts";

// Initialize Express server
const app = express();
const port = process.env.SERVER_PORT;

// Routes V1
app.use("/v1", homeRouter);
app.use("/v1/posts", postsRouter);

// start the Express server
app.listen( port, () => {
    console.log( `Server started at ${ port }` );
} );