import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} from "../services/record.service.js";

import { recordSchema } from "../validators/record.validator.js";

export const create = async (req, res, next) => {
  try {
    const validatedData = recordSchema.parse(req.body);

    const record = await createRecord(validatedData, req.user.userId);

    res.status(201).json({
      success: true,
      data: record,
    });
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const records = await getRecords(req.query);

    res.json({
      success: true,
      data: records,
    });
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new Error("Record ID is required");
    }

    const validatedData = recordSchema.partial().parse(req.body);

    const record = await updateRecord(req.params.id, validatedData);

    res.json({
      success: true,
      data: record,
    });
  } catch (err) {
    next(err);
  }
};

export const remove = async (req, res, next) => {
  try {
    if (!req.params.id) {
      throw new Error("Record ID is required");
    }

    await deleteRecord(req.params.id);

    res.json({
      success: true,
      message: "Record deleted",
    });
  } catch (err) {
    next(err);
  }
};