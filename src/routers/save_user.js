import Router from "express"
import { save } from "../controllers/users.js"
import { validationResult } from "express-validator"
import registerValidation from "../middlewares/registerValidation.js"
import matchedData from "../middlewares/userMatchedData.js"
import passwordValidation from "../middlewares/passwordValidation.js"
import passwordEncryptor from "../middlewares/passwordEncryptor.js"
import userUniqueValidator from "../middlewares/userUniqueValidator.js"

const router = Router()

router.post('/',[
    matchedData, 
    ...registerValidation, 
    passwordValidation, 
    passwordEncryptor, 
    userUniqueValidator
    ], async (req, res) => {
    try {
        if(!validationResult(req).isEmpty()){
            return res.status(400).send({formValidatorerrors:validationResult(req).array()})
        }
        console.log(req.body)
        const finalObj = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                user_name: req.body.user_name,
                password: res.locals.password,
                email: req.body.email
              }
        const response = await save(finalObj)
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

export default router