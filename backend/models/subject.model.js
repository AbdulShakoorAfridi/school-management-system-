import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
    },
    subject_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxLength: 255,
      minLength: 2,
    },
    subject_code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxLength: 255,
      minLength: 2,
    },
    subject_description: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxLength: 255,
      minLength: 2,
    },
    subject_status: {
      type: String,
      required: true,
      trim: true,
      enum: ["active", "inactive"],
      lowercase: true,
      maxLength: 255,
      minLength: 2,
    },
    subject_teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
    subject_class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  },
  {
    timestamps: true,
  }
);

export const subjectModel = mongoose.model("Subject", subjectSchema);
