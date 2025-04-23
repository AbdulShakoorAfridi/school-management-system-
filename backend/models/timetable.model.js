import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    day: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      required: true,
    },
    periods: [
      {
        subjectId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Subject",
        },
        teacherId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        startTime: String,
        endTime: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const timetableModel = mongoose.model("Timetable", timetableSchema);
