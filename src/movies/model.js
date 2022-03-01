const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { //defining what can be put in the key value pair
        type: String,
        required: true, //whether title is required so YES
        unique: true, //must not conflict with anything tat already exists with this title
    },
    actor: {  //to make multiple make type array
        type: String,
        deafault: "Not Specified"
    },
    optInfo: {
        type: String,
        default: "No Info"
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;