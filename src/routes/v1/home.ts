// Import ExpresJS framework
import * as express from "express";

// Set Router
const homeRouter = express.Router();

/**
 * GET / (base)
 * 
 * @return {object}
 */
homeRouter.get("/", async (req, res) => {
    res.json({
      msg:"Show welcome message."
    });
});

/**
 * GET /about
 * 
 * @return {object}
 */
homeRouter.get("/about", async (req, res) => {
  res.json({
    msg:"Show about information."
  });
});

export default homeRouter;
