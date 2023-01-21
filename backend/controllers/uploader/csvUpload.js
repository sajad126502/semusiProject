const User = require("../../model/user")

const csvUpload=async (req,res)=>{
   
     const user=await User.findByIdAndUpdate(req.user._id,{ $addToSet: { files: req.file.filename } })
     console.log(user)
    res.json({successMessage:"Uploaded Successfully"})
}
module.exports=csvUpload