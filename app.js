const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser')

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files 
app.use(express.urlencoded({ extended: true })) //To extract the data from the website to the app.js file
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./tree-integrated-services-offline-task/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./Frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

//listening on specified Port
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
