const { Router } = require("express");

const service = require("../Service/usersService");

const users = Router();

users.post("/", async (req, res) => {
  try {
    const { name, roles, email, password } = req.body;
    const newUser = await service.create(name, roles, email, password);
    if (newUser.error) {
      return res.status(newUser.statusCode).json({ message: newUser.message });
    }
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

module.exports = users;
