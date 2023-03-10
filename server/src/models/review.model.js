import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.option";

export default mongoose.model(
  "Review",
  mongoose.Schema(
    {
      displayName: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      content: {
        type: String,
        required: true,
      },

      mediaType: {
        type: String,
        enum: ["tv", "movie"],
        required: true,
      },

      mediaId: {
        type: String,
        required: true,
      },

      mdeiaTitle: {
        type: String,
        required: true,
      },

      mediaPoster: {
        type: String,
        required: true,
      },
    },
    modelOptions
  )
);
