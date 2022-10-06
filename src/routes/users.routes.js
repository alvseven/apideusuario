import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import getUserProfileController from "../controllers/getUserProfile.controller";
import getUsersController from "../controllers/getUsers.controller";
import updateUserProfileController from "../controllers/updateUserProfile.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserIsAdminMiddleware from "../middlewares/verifyUserIsAdmin.middleware";

const router = Router();
router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyUserIsAdminMiddleware,
  getUsersController
);
router.get("/profile", verifyAuthTokenMiddleware, getUserProfileController);
router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.patch(
  "/:uuid",
  verifyAuthTokenMiddleware,
  verifyEmailAvailabilityMiddleware,
  updateUserProfileController
);
router.delete("/:uuid", verifyAuthTokenMiddleware, deleteUserController);

export default router;
