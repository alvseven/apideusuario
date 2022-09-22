import { Router } from "express";

import userLoginController from "../controllers/userLogin.controller";

const loginRoutes = Router();

loginRoutes.post("", userLoginController);

export default loginRoutes;
