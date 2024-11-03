const validateRequest = (req, res, next) => {
  const { question } = req.body;
  if (!question || typeof question !== "string") {
    return res.status(400).json({
      status: "error",
      error: {
        code: 400,
        message: "Bad Request",
      },
    });
  }

  next();
};

module.exports = validateRequest;
