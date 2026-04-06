import express from "express";
import {
  summary,
  category,
  recent,
  trends,
} from "../controllers/dashboard.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import allowRoles from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/summary", authMiddleware, allowRoles("ADMIN", "ANALYST"), summary);

router.get("/category", authMiddleware, allowRoles("ADMIN", "ANALYST"), category);

router.get("/recent", authMiddleware, allowRoles("ADMIN", "ANALYST"), recent);

router.get("/trends", authMiddleware, allowRoles("ADMIN", "ANALYST"), trends);

export default router;