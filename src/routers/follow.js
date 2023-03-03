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
        if(res.locals.admin !== 'user'){
            return res.sendStatus(403)
        }
        const id = req.body.id
        const target = 'followers'
        const value = req.body.follow ? req.body.prev + 1 : req.body.prev - 1
        editVacation(id, target, value)
        res.status(200).send('update successsful')
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router