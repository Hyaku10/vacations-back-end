import PasswordValidator from 'password-validator'

const schema = new PasswordValidator()

schema
    .is().min(8)
    .is().max(14)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces()

export default (req, res, next) => {
    try {
        if(!schema.validate(req.body.password).length){
            next()
        }
    } catch (error) {
        return res.status(400).send({errors: validation})
    }
}