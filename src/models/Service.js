import { Schema, model } from "mongoose";

const ServiceSchema = Schema(
  {
    photo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      min: 1,
      max: 5
    },
    value: {
      type: Number,
      min: 1,
      max: 3
    }
  },
  {
    timestamps: true
  }
);

export default model("Service", ServiceSchema);
