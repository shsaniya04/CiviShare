const express = require("express");

const {
  addResource,
  getResources,
  getResourceById,
  updateResource,
  deleteResource,
} = require("../controllers/resourceController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Get all available resources
router.get("/", protect, getResources);

// Get one resource
router.get("/:id", protect, getResourceById);

// Add resource
router.post("/", protect, addResource);

// Update resource
router.put("/:id", protect, updateResource);

// Delete resource
router.delete("/:id", protect, deleteResource);

module.exports = router;
