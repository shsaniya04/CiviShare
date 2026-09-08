const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    // Resource owner
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Resource details
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "equipment",
        "material",
        "tool",
        "vehicle",
        "other",
      ],
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    quantity: {
      type: Number,
      default: 1,
      min: 1,
    },

    // Where the resource is located
    location: {
      type: String,
      required: true,
      trim: true,
    },

    // Availability
    available: {
      type: Boolean,
      default: true,
    },

    // Optional rental/usage information
    pricePerDay: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resource", resourceSchema);