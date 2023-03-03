import Router from "express"
import authenticateToken from "../middlewares/authenticateToken.js"
import db from '../db.js'

const router = Router()

const deleteVacation = async (id) => {
    const query = `
        DELETE FROM vacations WHERE id = ${id}
        `
        return await db.execute(query)
}

router.post('/',[authenticateToken], async (req, res) => {
    try {
        if (res.locals.admin !== 'admin'){
            return res.sendStatus(403)
        }
        const {id} = req.body
        deleteVacation(id)
        res.status(200).send('vacation deleted')
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router