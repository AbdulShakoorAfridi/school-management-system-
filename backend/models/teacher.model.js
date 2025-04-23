import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    teacher_profile: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 100,
      validate: {
        validator: function (v) {
          return v >= 0 && v <= 100;
        },
        message: "Age must be between 0 and 100",
      },
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
      default: "Male",
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    qualification: {
      type: String,
      required: true,
      enum: ["Bachelors", "Masters", "PhD"],
      default: "Bachelors",
    },
    experience: {
      type: Number,
      required: true,
    },
    subjects: {
      type: Array,
      required: true,
    },
    class: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const teacherModel = mongoose.model("Teacher", teacherSchema);
