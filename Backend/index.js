const app = require('./app');

const login = require("./routes/login");

app.use("/yelp/login", login);

const port = process.env.PORT || 3001;
var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;


