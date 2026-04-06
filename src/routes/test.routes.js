import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import allowRoles from "../middlewares/role.middleware.js";

const router = express.Router();

router.get(
  "/protected",
  authMiddleware,
  allowRoles("ADMIN"),
  (req, res) => {
    res.json({
      success: true,
      message: "You are an ADMIN",
      user: req.user,
    });
  }
);

export default router;