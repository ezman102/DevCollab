import { ErrorRequestHandler } from "express";
import { HttpBadRequestError } from "./http-errors";

export const createHttpErrorHandler: () => ErrorRequestHandler =
  () => (err, req, res, next) => {
    if (err instanceof HttpBadRequestError) {
      res.statusCode = 400;
      res.send(err.message);
      return;
    }

    next(err);
  };
