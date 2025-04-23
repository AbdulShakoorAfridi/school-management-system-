import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i],
    },
    description: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    owner: {
      type: String,
      required: true,
    },
    school_image: {
      type: String,
      required: true,
      default:
        "https://img.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg?t=st=1745072225~exp=1745075825~hmac=1dfd29372b023cc4c221900dce7b9575c367b3e5cce90135f32676993861210c&w=826",
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    school_type: {
      type: String,
      default: "private",
      enum: ["private", "public"],
    },
    school_category: {
      type: String,
      default: "general",
      enum: ["general", "special"],
    },
  },
  {
    timestamps: true,
  }
);

export const schoolModel = mongoose.model("School", schoolSchema);
