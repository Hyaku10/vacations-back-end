import Router from "express"
import db from '../db.js'

const router = Router()

const getVacations = async () => {
    const query = `
            select * from vacations;
        `
        return await db.execute(query)
}

router.get('/', async (req, res) => {
    try {
        const data = await getVacations()
        res.send(data)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router