import {
  getUsers,
  updateUserRole,
  updateUserStatus,
} from "../services/user.service.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getUsers();

    res.json({
      success: true,
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

export const changeUserRole = async (req, res, next) => {
  try {
    const { role } = req.body;

    const user = await updateUserRole(req.params.id, role);

    res.json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const changeUserStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const user = await updateUserStatus(req.params.id, status);

    res.json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};