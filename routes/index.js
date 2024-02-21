import { Router } from "express";
import monsterRoutes from "./monsters.js"
import spellsRoutes from "./spells.js"
import trapsRoutes from "./traps.js"
import deckRoutes from "./deck.js"

const router = Router()

router.get("/", (req, res) => res.send("This is the API root"))

router.use("/decks", deckRoutes)
router.use("/monsters", monsterRoutes)
router.use("/spells", spellsRoutes)
router.use("/traps", trapsRoutes)




export default router;