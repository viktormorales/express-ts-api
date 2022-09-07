import * as express from "express";

// Set Router
const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
    res.json({
      msg: "Get all posts"
    });
});

export default postRouter;
