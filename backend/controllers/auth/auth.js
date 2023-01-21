const User = require("../../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (name === "" || email === "" || password === "") {
    res.status(400).json({ errorMessage: "All fields are required" });
  } else {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        const newUser = new User();
        newUser.name = name;
        newUser.email = email;
        await bcrypt.hash(password, 10, function(err, hash) {

            newUser.password = hash.toString()
            newUser.files = [];
            newUser.save();
            res.status(201).json({ successMessage:`${name} created successfully`});
        });
           
      } else {
        res.status(400).json({ errorMessage: "User already exists" });
      }
    } catch (error) {
        res.status(400).json({ errorMessage: error.message});
    }
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email)

  try {
      const user = await User.findOne({ email: email });
      if (!user) {
          return res.status(400).json({ errorMessage: " User Not Found..." });
      }

      const hashPassword = user.password;

      bcrypt.compare(password, hashPassword, (err, result) => {
          if (err) {
              res.status(400).json({ errorMessage: "Something Went Wrong" });
          }
          //if email and password match
          else if (result) {
              const payload = {
                  user: {
                      _id: user._id,
                  }
              }

              jwt.sign(payload, process.env.jwtSecret, { expiresIn: process.env.jwtExpire }, (err, token) => {
                  if (err) {
                      console.log("jwt error: ", err);
                      res.status(400).json({ errorMessage: "jwt error" })
                  }

                  const { _id, name, email } = user;
                  res.json({
                      token,
                      user: { _id, name, email },
                  });

              });
          }
          else {
              res.status(400).json({ errorMessage: "Invalid credentials" });
          }
      });

  } catch (err) {
      res.status(500).json({ errorMessage: "Sign in server error" });
  }
};

module.exports = {
  signup,
  signin,
};
