import Router from "express"
import { save } from "../controllers/vacations.js"
import authenticateToken from "../middlewares/authenticateToken.js"
import vacationMatchedData from "../middlewares/vacationMatchedData.js"

const router = Router()

router.post('/',[vacationMatchedData, authenticateToken], async (req, res) => {
    try {
        if (res.locals.admin !== 'admin'){
            res.sendStatus(403)
        }
        const response = await save(req.body)
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router