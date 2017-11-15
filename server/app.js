import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

const indexFile = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, '../build/'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', publicPath);

app.get('/*', (req, res) => {
  res.sendFile(indexFile);
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
