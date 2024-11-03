const { model, generationConfig } = require("../config/aiConfig");

const generateResponse = async (query) => {
  const chatSection = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSection.sendMessage(query);
  return result.response.text();
};

module.exports = generateResponse;
