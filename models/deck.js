import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Deck = new Schema({
    monsters: [{type: Schema.Types.ObjectId, ref:"monsters"}],
    spells: [{type: Schema.Types.ObjectId, ref: "spells"}],
    traps: [{type: Schema.Types.ObjectId, ref: "traps"}]
})