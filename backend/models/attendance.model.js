import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    date: {
      type: Date,
    },
    status: {
      type: String,
      enum: [
        "Present",
        "Absent",
        "Late",
        "Early",
        "Excused",
        "Unexcused",
        "leave",
      ],
      default: "Present",
    },
    reason: {
      type: String,
    },
    remarks: {
      type: String,
      enum: ["Good", "Bad", "Neutral"],
    },
  },
  {
    timestamps: true,
  }
);

export const attendanceModel = mongoose.model("Attendance", attendanceSchema);
