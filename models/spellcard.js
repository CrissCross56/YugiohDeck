import mongoose from "mongoose";

const Schema  = mongoose.Schema;

let SpellCard = new Schema({
    _id: {type: String},
    cardType: {type: String},
    spellType: {type: String},
    description: {type: String}
    
})

export default mongoose.model("spells",MonsterCard)