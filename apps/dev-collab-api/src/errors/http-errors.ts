export class HttpError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HttpError";
  }
}

export class HttpBadRequestError extends HttpError {
  constructor(message: string) {
    super(message);
    this.name = "HttpBadRequestError";
  }
}
