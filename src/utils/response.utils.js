function sendSuccess(res, data, message = 'Request successful', statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

function sendError(res, message = 'Something went wrong', statusCode = 500) {
  return res.status(statusCode).json({
    success: false,
    error: {
      message,
    },
  });
}

module.exports = {
  sendSuccess,
  sendError,
};
