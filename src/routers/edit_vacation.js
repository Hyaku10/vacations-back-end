import Router from "express"
import authenticateToken from "../middlewares/authenticateToken.js"
import db from '../db.js'

const router = Router()

const editVacation = async (id, target, value) => {
    const query = `
    UPDATE vacations
    SET 
        ${target} = '${value}'
    WHERE
        id = ${id};
        `
        return await db.execute(query)
}

router.post('/',[authenticateToken], async (req, res) => {
    try {
        if (res.locals.admin !== 'admin'){
            res.sendStatus(403)
        }
        const {id, target, value} = req.body
        editVacation(id, target, value)
        res.status(200).send('update successsful')
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router