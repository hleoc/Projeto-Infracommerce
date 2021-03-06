const { Router } = require("express");

const service = require("../Service/reserveService");

const auth = require("../Middlewares/auth");

const reserve = Router();

reserve.post("/", auth, async (req, res) => {
  try {
    const { bookName, userName, bookingStatus } = req.body;

    const newReserve = await service.create(bookName, userName, bookingStatus);

    return res.status(201).json({ reserve: newReserve });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

reserve.get("/search", auth, async (req, res) => {
  try {
    const { bookName, userName, bookingStatus, bookingDate, returnDate } = req.query;
    const reserveDetails = await service.getAllDetails(
      bookName,
      userName,
      bookingStatus,
      bookingDate,
      returnDate,
    );
    return res.status(200).json({ success: true, reserves: reserveDetails });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

reserve.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const removeReserve = await service.remove(id);
    if (!auth) return res.status(401).json({ message: "missing auth token" });
    return res.status(204).json(removeReserve);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

module.exports = reserve;
