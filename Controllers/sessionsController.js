const { Router } = require("express");

const jwt = require("jsonwebtoken");

const APP_SECRET = require("dotenv/config");

const User = require("../Models/User");

const sessions = Router();

const SECRET = process.env.APP_SECRET;

const jwtConfig = {
  expiresIn: "15d",
  algorithm: "HS256",
};

sessions.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: "All fields must be filled" });
    }

    const findEmail = await User.getByEmail({ email });

    if (!findEmail) {
      return res.status(401).json({ message: "Incorrect username or password" });
    }

    const user = await User.create(email);
    const { password: _, ...userWithoutPassword } = user;
    const payload = {
      iss: "post_api",
      aud: "identify",
      userData: userWithoutPassword,
    };
    const token = jwt.sign(payload, SECRET, jwtConfig);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = sessions;
