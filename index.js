const mongoose = require('mongoose');
const newUser = require('./models/user.js')

mongoose.connect(process.env.DPASS,
 {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("[✅] MongoDB is Online!");
});

async function hello(username, email, money) {

    // returns null if none was found 
    const exist = await newUser.findOne({
        email: email
    }) 
    
    const newUser = new ai_channel({
        username: username,
        email: email,
        money: money
    });
    
    

    if (exist === null) {
        newUser.save((err) => {
            if (err) {                                           
                console.log(err);
            } else {
                console.log('User named ${username} have been saved!');    
            }
        }

    } else {

        console.log('The document already exists!');

    }

}

// calling the function
hello("Nandu", "support.github.com", "27398$");  // can be edited
