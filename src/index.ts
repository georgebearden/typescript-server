import * as express from "express";
import * as bodyParser from 'body-parser';

const app: express.Application = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/healthCheck', (req, res, next) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});