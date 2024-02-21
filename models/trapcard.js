import mongoose from "mongoose";

const Schema  = mongoose.Schema;

let TrapCard = new Schema({
    _id: {type: String},
   name: {type: String},
   description: {type: String}
    
})

export default mongoose.model("traps",TrapCard)