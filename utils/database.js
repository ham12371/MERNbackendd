const mongoose = require("mongoose");

const connectDB = async() => {
  try {
   await mongoose.connect(
      "mongodb+srv://ham1237112371:IHo0iK2WB61HPhDf@cluster0.9kl7j.mongodb.net/appDataBase?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Success:Connected to MongoDB");
  } catch (err) {
    console.log("Failure:Unconnected to MongoDB");
    throw new Error();
  }
};

module.exports = connectDB;

//IHo0iK2WB61HPhDf

//mongodb+srv://ham1237112371:<db_password>@cluster0.9kl7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
