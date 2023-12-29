import Router from "express";
import utility from "../common/utility";

import Controller from "../controllers/policy-holder.controllers";
const router = Router();

//using
router.post("/", utility.authenticateUser, Controller.add);
router.get("/", utility.authenticateUser, Controller.getList);
//using
router.get("/:id", utility.authenticateUser, Controller.getDetails);
router.patch("/:id", utility.authenticateUser, Controller.update);

export default router;
