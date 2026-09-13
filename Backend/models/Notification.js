import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    organization: {
      type: String,
      trim: true,
      default: null,
    },

    originalFileName: {
      type: String,
      required: true,
      trim: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    totalPages: {
      type: Number,
      default: null,
    },

    processingStatus: {
      type: String,
      enum: [
        "uploaded",
        "processing",
        "completed",
        "failed",
      ],
      default: "uploaded",
    },

    extractedText: {
      type: String,
      default: null,
    },

    relevantPages: [
      {
        pageNumber: {
          type: Number,
          required: true,
        },

        reason: {
          type: String,
          default: null,
        },
      },
    ],

    summary: {
      type: String,
      default: null,
    },

    importantDates: [
      {
        title: {
          type: String,
        },

        date: {
          type: Date,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Notification = mongoose.model(
  "Notification",
  notificationSchema
);

export default Notification;