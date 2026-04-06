import express from "express";
import {
  getAllUsers,
  changeUserRole,
  changeUserStatus,
} from "../controllers/user.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import allowRoles from "../middlewares/role.middleware.js";

const router = express.Router();

// Only ADMIN can manage users
router.get("/", authMiddleware, allowRoles("ADMIN"), getAllUsers);

router.patch("/:id/role", authMiddleware, allowRoles("ADMIN"), changeUserRole);

router.patch("/:id/status", authMiddleware, allowRoles("ADMIN"), changeUserStatus);

export default router;