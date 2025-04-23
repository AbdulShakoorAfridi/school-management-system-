import mongoose from "mongoose";

const examinationSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    examDate: {
      type: Date,
      required: true,
    },
    examTime: {
      type: String,
      required: true,
    },
    examType: {
      type: String,
      required: true,
      enum: ["Class Test", "Semester Test", "Final Test"],
      default: "Class Test",
    },
    examSubject: {
      type: String,
      required: true,
      enum: [
        "Mathematics",
        "English",
        "Science",
        "Social Studies",
        "History",
        "Computer Science",
        "Biology",
        "Chemistry",
        "Physics",
        "Geography",
        "Economics",
        "Political Science",
        "Psychology",
        "Sociology",
        "Art",
        "Music",
        "Dance",
        "Physical Education",
        "Health and Fitness",
        "Foreign Languages",
      ],
    },
    examClass: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    examClassTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    examStatus: {
      type: String,
      required: true,
      default: "Pending",
    },
    examStatusMessage: {
      type: String,
      required: true,
      default: "Exam is Pending",
    },
    examStatusDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    examStatusBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    examStatusReason: {
      type: String,
    },
    examStatusReasonDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const examinationModel = mongoose.model(
  "Examination",
  examinationSchema
);
