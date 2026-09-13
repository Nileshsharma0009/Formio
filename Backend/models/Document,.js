import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    notificationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification",
      required: true,
      index: true,
    },

    requirementId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Requirement",
      default: null,
    },

    originalName: {
      type: String,
      required: true,
      trim: true,
    },

    currentName: {
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

    fileSizeKB: {
      type: Number,
      required: true,
    },

    detectedType: {
      type: String,
      default: null,
    },

    identificationConfidence: {
      type: Number,
      min: 0,
      max: 1,
      default: null,
    },

    status: {
      type: String,
      enum: [
        "Processing",
        "Valid",
        "Needs Attention",
        "Invalid",
      ],
      default: "Processing",
    },

    metadata: {
      widthPx: {
        type: Number,
        default: null,
      },

      heightPx: {
        type: Number,
        default: null,
      },

      dpi: {
        type: Number,
        default: null,
      },

      pages: {
        type: Number,
        default: null,
      },
    },

    validation: {
      format: {
        required: String,
        actual: String,
        passed: Boolean,
      },

      fileSize: {
        required: String,
        actual: String,
        passed: Boolean,
      },

      dimensions: {
        required: String,
        actual: String,
        passed: Boolean,
      },

      dpi: {
        required: String,
        actual: String,
        passed: Boolean,
      },

      pages: {
        required: String,
        actual: String,
        passed: Boolean,
      },
    },

    extractedData: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    processing: {
      isProcessed: {
        type: Boolean,
        default: false,
      },

      processedFileUrl: {
        type: String,
        default: null,
      },

      processedFileName: {
        type: String,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model(
  "Document",
  documentSchema
);

export default Document;