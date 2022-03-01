const Movie = require("./model");

//making new function
exports.addMovie = async (title, actor, optInfo) => {
    try { 
        //assigns params to keys
        await Movie.create({title, actor, optInfo}); //both key and param
        return "Success"
    } catch (error) {
        console.log(error)
    }
};


exports.list = async () => { //lists everything no params needed
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error)
    }
};

exports.update = async (title, actor) => {
    try {
        await Movie.updateOne({title, actor,  new: true});
        return "Success";
    } catch (error) {
        console.log(error)
    }
};

exports.deleteByTitle = async (title) => {
    try {
        await Movie.deleteOne({title});
    } catch (error) {
        console.log(error)
    }
};

exports.searchTitle = async (title) => {
    try {
        await Movie.findOne({title});
    } catch (error) {
        console.log(error)
    }
};