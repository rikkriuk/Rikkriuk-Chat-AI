const express = require("express");
const cors = require("cors");
const generateResponse = require("./controllers/aiController");
const validateRequest = require("./middleware/validateRequest");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/query", validateRequest, async (req, res) => {
  try {
    console.log("Received request:", req.body);
    const response = await generateResponse(req.body.question);
    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: {
        code: 500,
        message: "Internal Server Error",
      },
    });
    throw new Error(error);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});
