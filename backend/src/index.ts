// index.ts
import express from 'express';
import { getCatalog, getDevices } from './functions';

const app = express();
const port = 3000;

app.get('/devices', async (req, res) => {
  try {
    const devices = await getDevices();
    res.json(devices);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).send('Server error');
  }
});

app.get('/catalog', async (req, res) => {
  try {
    const devices = await getCatalog();
    res.json(devices);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).send('Server error');
  }
});

app.get('/records', async (req, res) => {
  try {
    const devices = await getCatalog();
    res.json(devices);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
