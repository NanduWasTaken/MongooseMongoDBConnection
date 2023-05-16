# MongooseMongoDBConnection
This repository consists a simple way to establish connection to MongoDB database using mongoose.

# Seting Up
Type `git clone NanduWasTaken/MongooseMongoDBConnection.git` into the terminal.


# Single Step
Go to [MongoDB](https://www.mongodb.com/) website and make a account and create your own database.
Locate the MongoDB URI => Connect>Drivers
![Screenshot_2023-05-16-16-51-00-417](https://github.com/NanduWasTaken/MongooseMongoDBConnection/assets/89532571/a01a54ce-80d0-42f1-ac49-4c4f375890b5)
(the uri will be different on yours)
Now Replace the "Super Secret MongoDB URI Here" with your actual MongoDB URI
```
mongoose.connect('Super Secret MongoDB URI Here', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

# Running
Type `node index.js` to your terminal.




