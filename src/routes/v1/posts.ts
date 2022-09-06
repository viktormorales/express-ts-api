import * as express from "express";

// Set Router
const homeRouter = express.Router();

homeRouter.get("/", async (req, res) => {
    res.json({
      msg: 'Hola'
    });
});

export default homeRouter;
