import Router from "express"
import authenticateToken from "../middlewares/authenticateToken.js"

const router = Router()

router.get('/',[authenticateToken], async (req, res) => {
    try {
        if (res.locals.admin === 'logged_out'){
            res.sendStatus(403)
        }
        const {first_name, last_name, user_name, email} = res.locals.user
        const user = {
            first_name: first_name,
            last_name: last_name,
            user_name: user_name,
            email: email
        }
        const response = {user}
        return res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router