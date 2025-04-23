import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
    },
    name: {
      type: String,
      required: true,
    },
    class_Name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    roll_no: {
      type: Number,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["student", "parent", "teacher"],
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
    },
    is_verified: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_blocked: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_blocked_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    profile_pic: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,
    },
    guardian_name: {
      type: String,
      required: true,
    },
    guardian_phone_no: {
      type: Number,
      required: true,
    },
    guardian_address: {
      type: String,
      required: true,
    },
    guardian_relation: {
      type: String,
      required: true,
      enum: ["father", "mother", "brother", "sister", "other"],
    },
    guardian_email: {
      type: String,
      unique: true,
    },
    guardian_profession: {
      type: String,
      required: true,
      enum: ["teacher", "doctor", "engineer", "other"],
    },
    guardian_profession_details: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const studentModel = mongoose.model("Student", studentSchema);
