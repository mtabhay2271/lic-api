import Router from "express";
import utility from "../common/utility";

import Controller from "../controllers/policy-holder.controllers";
const router = Router();

//using
router.post("/", utility.authenticateUser, Controller.add);
router.get("/", utility.authenticateUser, Controller.getList);
//using
router.get("/:policyHolderId", utility.authenticateUser, Controller.getDetails);

export default router;
