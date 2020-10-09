const mongoose = require("mongoose");
const shortId = require("shortid");

const shortlySchema = new mongoose.Schema({
    original: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    }
});

module.exports = mongoose.model("Shortly", shortlySchema)