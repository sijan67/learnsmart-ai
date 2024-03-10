const express = require('express');
const app = express();

// Cohere Endpoint Integration
const { CohereClient } = require('cohere-ai');
const cohere = new CohereClient({ token: 'EKNlx6cj9zOgx4Nl637wturE22F56cAIJmxVc1kF' });

const PORT = process.env.PORT || 3000;

app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello, World! Lol' });
});

app.use(express.json()); // Middleware to parse JSON bodies


// Define a POST endpoint for summarization , can take in format as 'paragraph' or 'bullets' 
app.post('/api/summarize', async (req, res) => {
    const { text, format } = req.body;
    console.log("Text is: ", text);
    console.log("Format is: ", format);

  if (!text) {
    return res.status(400).json({ message: 'No text provided for summarization.' });
  }

  try {
    const summary = await cohere.summarize({ text: text, format: format });
    res.json( summary );

  } catch (error) {
    console.error('Error summarizing text:', error);
    res.status(500).json({ message: 'Failed to summarize the text.' });
  }
});




// Define a POST endpoint for clarification using generate endpoint 
app.post('/api/clarify', async (req, res) => {
    const { prompt } = req.body;
    console.log("Prompt is: ", prompt);

  if (!prompt) {
    return res.status(400).json({ message: 'No text provided for clarification.' });
  }

  try {
    const summary = await cohere.generate({ prompt: prompt , model: 'command-light'});
    res.json( summary );

  } catch (error) {
    console.error('Error clarifying text:', error);
    res.status(500).json({ message: 'Failed to clarify the text.' });
  }

});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
