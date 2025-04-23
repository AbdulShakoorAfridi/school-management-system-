import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    audience: {
      type: String,
      required: true,
      enum: ["all", "admin", "teacher", "student"],
      default: "all",
    },
  },
  {
    timestamps: true,
  }
);

export const noticeModel = mongoose.model("Notice", noticeSchema);
