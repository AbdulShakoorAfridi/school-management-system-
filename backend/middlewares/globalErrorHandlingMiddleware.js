import CustomError from "../utils/customError.js";

const devError = (res, error, status, statusCode) => {
  res.status(statusCode).json({
    status,
    message: error.message,
    stackTrace: error.stack,
    error: error,
  });
};

const prodError = (res, error, status, statusCode) => {
  if (error.isOperational) {
    res.status(statusCode).json({
      status,
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

const castErrorHandler = (error) => {
  const msg = `Invalid value for ${error.path}: ${error.value}!`;
  return new CustomError(msg, 400);
};
const duplicateErrorHandler = (error) => {
  const msg = `duplicate key error for : ${error.keyValue}!`;
  return new CustomError(msg, 400);
};
const validationErrorHandler = (error) => {
  const errors = Object.values(error.errors).map((err) => err.message);
  const errorMsg = `Invalid input data: ${errors.join(". ")}`;
  return new CustomError(errorMsg, 400);
};

export const globalErrorHandlingMiddleware = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || "error";
  if (process.env.NODE_ENV === "development") {
    devError(res, error, status, statusCode);
  } else if (process.env.NODE_ENV === "production") {
    if (error.name === "CastError") error = castErrorHandler(error);
    if (error.code === 11000) error = duplicateErrorHandler(error);
    if (error.name === "ValidationError") error = validationErrorHandler(error);

    prodError(res, error, status, statusCode);
  }
};
