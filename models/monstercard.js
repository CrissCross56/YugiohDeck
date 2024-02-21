import mongoose from "mongoose";

const Schema  = mongoose.Schema;

let MonsterCard = new Schema({
    _id: {type: String},
    // cardType: {type: String},
    monsterType: {type: String},
    elementType: {type: String},
    specialSummon: {type: Boolean},
    normalSummon: {type: Boolean},
    level: {type: Number},
    attack: {type: Number},
    defense: {type: Number},
    description: {type: String}
    
})

export default mongoose.model("monsters",MonsterCard)