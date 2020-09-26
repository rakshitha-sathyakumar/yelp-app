const app = require('./app');

const login = require("./routes/login");
const custSignup = require("./routes/customerSignUp");
const restSignup = require("./routes/restSignUp");
const userProfile = require("./routes/profile");

app.use("/yelp/login", login);
app.use("/yelp/customerSignUp", custSignup);
app.use("/yelp/restSignUp", restSignup);
app.use("/yelp/userProfile", userProfile);

const port = process.env.PORT || 3001;
var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;


