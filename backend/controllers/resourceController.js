const Resource = require("../models/Resource");

// ========================================
// ADD RESOURCE
// ========================================

const addResource = async (req, res) => {
  try {
    const {
      name,
      category,
      description,
      quantity,
      location,
      available,
      pricePerDay,
    } = req.body;

    // Check required fields
    if (!name || !category || !location) {
      return res.status(400).json({
        message: "Name, category and location are required",
      });
    }

    // Create resource
    const resource = await Resource.create({
      owner: req.user.id,
      name,
      category,
      description: description || "",
      quantity: quantity || 1,
      location,
      available: available !== undefined ? available : true,
      pricePerDay: pricePerDay || 0,
    });

    res.status(201).json({
      message: "Resource added successfully",
      resource,
    });

  } catch (error) {
    console.error("Add resource error:", error.message);

    res.status(500).json({
      message: "Server error while adding resource",
    });
  }
};


// ========================================
// GET ALL AVAILABLE RESOURCES
// ========================================

const getResources = async (req, res) => {
  try {
    const resources = await Resource.find({
      available: true,
    })
      .populate("owner", "name email phone location")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: resources.length,
      resources,
    });

  } catch (error) {
    console.error("Get resources error:", error.message);

    res.status(500).json({
      message: "Server error while fetching resources",
    });
  }
};


// ========================================
// GET SINGLE RESOURCE
// ========================================

const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id)
      .populate("owner", "name email phone location");

    if (!resource) {
      return res.status(404).json({
        message: "Resource not found",
      });
    }

    res.status(200).json({
      resource,
    });

  } catch (error) {
    console.error("Get resource error:", error.message);

    res.status(500).json({
      message: "Server error while fetching resource",
    });
  }
};


// ========================================
// UPDATE RESOURCE
// ========================================

const updateResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({
        message: "Resource not found",
      });
    }

    // Only the owner can update the resource
    if (resource.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not allowed to update this resource",
      });
    }

    const {
      name,
      category,
      description,
      quantity,
      location,
      available,
      pricePerDay,
    } = req.body;

    resource.name = name ?? resource.name;
    resource.category = category ?? resource.category;
    resource.description = description ?? resource.description;
    resource.quantity = quantity ?? resource.quantity;
    resource.location = location ?? resource.location;
    resource.available = available ?? resource.available;
    resource.pricePerDay = pricePerDay ?? resource.pricePerDay;

    await resource.save();

    res.status(200).json({
      message: "Resource updated successfully",
      resource,
    });

  } catch (error) {
    console.error("Update resource error:", error.message);

    res.status(500).json({
      message: "Server error while updating resource",
    });
  }
};


// ========================================
// DELETE RESOURCE
// ========================================

const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      return res.status(404).json({
        message: "Resource not found",
      });
    }

    // Only the owner can delete the resource
    if (resource.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not allowed to delete this resource",
      });
    }

    await resource.deleteOne();

    res.status(200).json({
      message: "Resource deleted successfully",
    });

  } catch (error) {
    console.error("Delete resource error:", error.message);

    res.status(500).json({
      message: "Server error while deleting resource",
    });
  }
};


module.exports = {
  addResource,
  getResources,
  getResourceById,
  updateResource,
  deleteResource,
};