import db from '../database/connection.js';
import monstercard from '../models/monstercard.js';
import spellcard from '../models/spellcard.js';
import trapcard from '../models/trapcard.js';

const insertData = async () => {
    //reset Database
    await db.dropDatabase();

    //insert cards into the database
    // await monstercard.insertMany(*json data from json file of cards goes here*)

    // ^^^ repeat this for the trap cards and spell cards ^^^
}

insertData()