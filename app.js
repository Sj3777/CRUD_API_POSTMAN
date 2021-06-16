const express=require("express");
const mongoose=require("mongoose");

const url="mongodb://localhost:27017/Contact";
const app=express();
app.use(express.json());

const contactRouter = require("./routers/contact");

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("..Connection is Successfull..");
  })
  .catch((e) => console.log(e));

app.use('/contact',contactRouter);

app.listen(9000,()=>{
    console.log("Server Started");
})


