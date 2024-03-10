const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: "j9xdoqr7lQIQN5ac1FavpsiasdhyXy2oOAGfHO5D",
});

(async () => {
  const chatStream = await cohere.chat({
      chatHistory: [],
      message: "What is LLM?",
      // perform web search before answering the question. You can also use your own custom connector.
      connectors: [{ id: "web-search" }],
      model: "command-light",
      stream: false,

  });

  console.log(chatStream)
})();