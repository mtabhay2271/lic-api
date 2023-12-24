import Router from "express";
import utility from "../common/utility";

import Controller from "../controllers/policy-holder.controllers";
const router = Router();

//using
router.post("/", utility.authenticateUser, Controller.add);
//using
router.get("/:id", utility.authenticateUser, Controller.getDetails);

export default router;
