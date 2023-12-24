import Router from "express";
import auth from "./auth.routes";
import users from "./user.routes";
import bank from "./bank.routes";
import dashboard from "./dashboard.routes";
import policyHolder from "./policy-holder.routes";

const router = Router();

router.use("/v1/auth", auth);
router.use("/v1/user", users);
router.use("/v1/bank", bank);
router.use("/v1/dashboard", dashboard);
router.use("/v1/policy-holder", policyHolder);


export default router;