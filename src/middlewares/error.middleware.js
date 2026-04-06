import { ZodError } from "zod";

const errorHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: err.errors.map(e => e.message).join(", "),
    });
  }

  res.status(400).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};

export default errorHandler;