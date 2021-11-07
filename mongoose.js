// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    //   await mongoose.connect('mongodb+srv://green-baby-poc-1:TZBAJYhUQmuUwptT@cluster0.ihghi.mongodb.net/green-baby-poc-1?retryWrites=true', { ssl: true });

    const mongoAtlasUri = "mongodb+srv://green-baby-poc-1:TZBAJYhUQmuUwptT@cluster0.ihghi.mongodb.net/green-baby-poc-1?retryWrites=true"

    // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    //     .catch(error => console.log(error));

    try {
        // Connect to the MongoDB cluster
         mongoose.connect(
          mongoAtlasUri,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log(" Mongoose is connected")
        );
    
      } catch (e) {
        console.log("could not connect");
      }
    


}