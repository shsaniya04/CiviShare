const express = require("express");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Protected route - Get logged-in user
router.get("/me", protect, (req, res) => {
  res.status(200).json({
    message: "Authentication successful",
    user: req.user,
  });
});

module.exports = router;