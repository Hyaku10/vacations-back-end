import Router from "express"
import checkLogin from "../middlewares/checkLogin.js"
import generateJwt from "../middlewares/generateJwt.js"

const router = Router()

router.post('/', [
    checkLogin,
    generateJwt
], async (req, res) => {
    try {
        return res.send({ token: res.locals.jwt, admin: res.locals.admin })
    } catch (error) {
        console.error(error)
        return res.status(500)
    }
})

export default router