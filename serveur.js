const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+ './dist/projet'));

app.get(`/*`, function(req, res) {
  res.sendFile(`index.html`, {root: `dist/projet/`}
);
});

  app.listen(process.env.PORT);