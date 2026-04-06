import express from "express";
import {
  create,
  getAll,
  update,
  remove,
} from "../controllers/record.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import allowRoles from "../middlewares/role.middleware.js";

const router = express.Router();

// Create → ADMIN only
router.post("/", authMiddleware, allowRoles("ADMIN"), create);

// Read → ANALYST + ADMIN
router.get("/", authMiddleware, allowRoles("ADMIN", "ANALYST"), getAll);

// Update → ADMIN only
router.patch("/:id", authMiddleware, allowRoles("ADMIN"), update);

// Delete → ADMIN only
router.delete("/:id", authMiddleware, allowRoles("ADMIN"), remove);

export default router;