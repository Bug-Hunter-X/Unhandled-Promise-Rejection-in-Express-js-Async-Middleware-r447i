const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously
  processData(data).then(() => {
    res.send('Data processed successfully!');
  }).catch(error => {
    console.error('Error processing data:', error);
    res.status(500).send('Error processing data');
  });
});

async function processData(data) { 
  // Simulate an asynchronous operation that may fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (data.someProperty === 'fail') {
    throw new Error('Data processing failed');
  }
  //Process the data here
  console.log('Data processed successfully:', data);
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});