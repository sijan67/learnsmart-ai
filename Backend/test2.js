const express = require('express');
const bodyParser = require('body-parser');
const { CohereClient } = require("cohere-ai");

// Replace 'YourCohereApiKeyHere' with your actual Cohere API key
const cohere = new CohereClient({
    token: "EKNlx6cj9zOgx4Nl637wturE22F56cAIJmxVc1kF",
});

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint
app.post('/ask', async (req, res) => {
    try {
        const chatStream = await cohere.chatStream({
            chatHistory: req.body.chatHistory,
            message: req.body.message,
            stream: "false",
            connectors: [{ id: "web-search" }],
            model: "command-light"
        });

        let responses = [];
        for await (const message of chatStream) {
            if (message.eventType === "text-generation") {
                responses.push(message);
            }
        }

        res.json({ success: true, responses });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
