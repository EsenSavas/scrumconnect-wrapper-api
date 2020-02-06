import APIError from './APIError';

const defaultError = message =>
  new APIError(
    500,
    'Server Error',
    message || 'Unknown internal server error.'
  );

export default (err, _req, res, _next) => {
  const resolvedError =
    err instanceof APIError ? err : defaultError(err.message);
  res.status(resolvedError.status).json(resolvedError);
};
