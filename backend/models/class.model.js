import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    classNumber: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
      max: 2000,
    },
    attendee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const classModel = mongoose.model("Class", classSchema);
