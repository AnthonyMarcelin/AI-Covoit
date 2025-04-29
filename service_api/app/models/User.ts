import mongoose from "mongoose";

const mongoURL = process.env.MONGO_URL!;
mongoose.connect(mongoURL);

const userSchema = new mongoose.Schema(
  {
    id: {
        type: Number,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    role_id: {
      type: Number,
      required: true,
      default: 2,
    },
    route_id: {
      type: Number,
      required: false,
    },
    reservation_id: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    collection: "users",
  },
);

const User = mongoose.model("User", userSchema);

export default User;
