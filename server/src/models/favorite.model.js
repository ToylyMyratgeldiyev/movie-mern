import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.option";

export default mongoose.model(
  "Favorite",
  mongoose.Schema(
    {
      displayName: {
        type: Schema.Types.ObjectId,
        ref: "User",
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

      mediaRate: {
        type: Number,
        required: true,
      },
    },
    modelOptions
  )
);
