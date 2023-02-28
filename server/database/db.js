import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL =`mongodb+srv://${username}:${password}@cluster0.fj19pfl.mongodb.net/ReactCrudTest`

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log("Error while connecting with the DB", error);
  }
};


export default Connection;