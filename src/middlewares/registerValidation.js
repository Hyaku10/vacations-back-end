import { body } from 'express-validator'

const formValidator = [
    body('user_name').not().isEmpty().withMessage('user-name is empty'),
    body('email').isEmail().withMessage('email is invalid')
]

export default formValidator