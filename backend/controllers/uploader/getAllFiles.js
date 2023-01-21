const User = require("../../model/user")

const csvUpload=async (req,res)=>{
   
     const files=await User.findById(req.user._id).select("files")
     console.log(files)
    res.json(files)
}
module.exports=csvUpload