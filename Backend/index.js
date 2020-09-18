const app = require('./app');

const login = require("./routes/login");
const custSignup = require("./routes/customerSignUp");

app.use("/yelp/login", login);
app.use("/yelp/customerSignUp", custSignup);

const port = process.env.PORT || 3001;
var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;


