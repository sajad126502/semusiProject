const mongoose = require('mongoose');
const password = 'ndXjHGhl93P3RRr3';
const url = `mongodb+srv://root:${password}@cluster0.bnauebu.mongodb.net/?retryWrites=true&w=majority`;

const dbConnection = async () => {
  try {
    await mongoose.connect(url)
    console.log("Db connection successful")
  } catch (error) {
    console.log(error)
  }
}
module.exports=dbConnection;
