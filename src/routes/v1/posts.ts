import * as express from "express";

// Set Router
const postRouter = express.Router();

/**
 * GET / (base)
 * 
 * @return {object} - All posts as Object
 */
postRouter.get("/", async (req, res) => {
    res.json({
      msg: "Get all posts"
    });
});

/**
 * GET /:id
 * 
 * @param {number} - Post ID
 * @return {object} - Post as Object
 */
postRouter.get("/:id", async (req, res) => {
  res.json({
    msg: `Get post with ID = ${req.params.id}`
  });
});

/**
 * POST /
 * 
 * @param {object} - Post information
 * @return {object} - HTTP status
 */
postRouter.post("/", async (req, res) => {
  res.json({
    data: req.body,
    msg: "New post added fakely"
  });
});

export default postRouter;
