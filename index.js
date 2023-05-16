const mongoose = require('mongoose');

mongoose.connect(process.env.DPASS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("[✅] MongoDB is Online!");
});

async function hello(username, email, money) {
  try {
    const newUser = require('./models/user.js');
    const exist = await newUser.findOne({ email: email });
    if (exist === null) {
      const newUserInstance = new newUser({
        username: username,
        email: email,
        money: money
      });
      await newUserInstance.save();
      console.log(`User named ${username} has been saved!`);
    } else {
      console.log('The document already exists!');
    }
  } catch (error) {
    console.log(error);
  }
}

// Calling the function
hello("Nandu", "support.github.com", "27398$");
