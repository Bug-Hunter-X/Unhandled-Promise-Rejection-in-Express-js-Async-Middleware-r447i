const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  const data = req.body;
  try {
    await processData(data);
    res.send('Data processed successfully!');
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).send({ error: error.message });
  }
});

async function processData(data) { 
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (data.someProperty === 'fail') {
    throw new Error('Data processing failed');
  }
  console.log('Data processed successfully:', data);
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});