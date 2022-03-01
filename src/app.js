require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, update, searchTitle, deleteByTitle } = require("./movies/functions");
// const { find } = require("./movie/model");

const app = async (yargsObj) => {
    try {
        if(yargsObj.add){
            //add
            console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.optInfo));
        }
        else if(yargsObj.list){
            //list
            console.log(await list());
        }
        else if (yargsObj.update){
            //update one
            await update(yargsObj.title, yargsObj.actor);
        }
        else if (yargsObj.searchTitle){
            console.log(await searchTitle(yargsObj.title));
        }
        else if (yargsObj.deleteByTitle){
            await deleteByTitle(yargsObj.title);
        }
        else{
            console.log("Incorrect input")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);