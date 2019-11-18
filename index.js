const express = require('express');

const app = express();
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.get('*', (req, res) => {

  res.sendFile(distDir + 'index.html');
});
app.listen(3000, () =>
    console.log(`app listening on port 3000`)
);
