import {
  getSummary,
  getCategoryBreakdown,
  getRecentActivity,
  getMonthlyTrends,
} from "../services/dashboard.service.js";

export const summary = async (req, res) => {
  try {
    const data = await getSummary();

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const category = async (req, res) => {
  try {
    const data = await getCategoryBreakdown();

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const recent = async (req, res) => {
  try {
    const data = await getRecentActivity();

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const trends = async (req, res) => {
  try {
    const data = await getMonthlyTrends();

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};