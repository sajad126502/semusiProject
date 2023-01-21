const express=require("express")
const app=express();
const authRouter = require("./routes/auth/auth");
const bodyParser = require('body-parser');
const uploadRouter=require("./routes/upload/csvUpload")
const dbConnection = require("./db/db");
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');

const Port=process.env.PORT || 7000

app.use(bodyParser.urlencoded({ extended: true }));
// middleware...
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
dbConnection()

//auth routes
app.use("/api/auth", authRouter);
app.use("/api/csv",uploadRouter)
app.use('/uploads',express.static('uploads'))


app.listen(Port,()=>{
    console.log(`running on port ${Port}`);
})