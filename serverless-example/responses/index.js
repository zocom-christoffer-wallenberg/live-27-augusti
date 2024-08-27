function sendResponse(data) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  };
}

module.exports = { sendResponse };
