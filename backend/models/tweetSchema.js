import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    like: {
        type: Array,
        default: [],
    },
   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        extended: true
    },
   
}, { timestamps: true });

export const Tweet = mongoose.model("Tweet", tweetSchema); 