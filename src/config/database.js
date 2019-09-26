import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://root:root@cluster0-zgujn.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", () => console.error.bind(console, "error"));
db.once("open", () => {
  console.log("connected!!");
});
