import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema(
  {
    notificationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification",
      required: true,
      index: true,
    },

    documentType: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: null,
    },

    required: {
      type: Boolean,
      default: true,
    },

    formats: [
      {
        type: String,
        lowercase: true,
      },
    ],

    minSizeKB: {
      type: Number,
      default: null,
    },

    maxSizeKB: {
      type: Number,
      default: null,
    },

    minSizeMB: {
      type: Number,
      default: null,
    },

    maxSizeMB: {
      type: Number,
      default: null,
    },

    widthPx: {
      type: Number,
      default: null,
    },

    heightPx: {
      type: Number,
      default: null,
    },

    widthCm: {
      type: Number,
      default: null,
    },

    heightCm: {
      type: Number,
      default: null,
    },

    dpi: {
      type: Number,
      default: null,
    },

    aspectRatio: {
      type: Number,
      default: null,
    },

    maxPages: {
      type: Number,
      default: null,
    },

    minPages: {
      type: Number,
      default: null,
    },

    instructions: {
      type: String,
      default: null,
    },

    sourcePages: [
      {
        type: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Requirement = mongoose.model(
  "Requirement",
  requirementSchema
);

export default Requirement;