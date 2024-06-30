const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

// Middleware untuk CORS
app.use(cors({
  origin: '*',
}));

app.use(express.json());

// Tentukan direktori tempat file statis berada
const staticDir = path.join(__dirname, 'public');

// Middleware untuk melayani file statis
app.use(express.static(staticDir));

app.use('/', routes);

const PORT = process.env.PORT || 5000;
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server berjalan pada ${HOST} port ${PORT}`);
});

// Arahkan endpoint / ke index.html
app.get('/', (_req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});
