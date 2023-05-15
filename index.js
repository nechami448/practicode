import express from 'express'
import { createRequire } from 'module';


const app = express()
const port = 3000;
//rnd_sS41XQwghPonKfXcJFCwFlV8EgiCconst
const require = createRequire(import.meta.url);
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_sS41XQwghPonKfXcJFCwFlV8EgiC');
sdk.getServices({ limit: '20' })
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})