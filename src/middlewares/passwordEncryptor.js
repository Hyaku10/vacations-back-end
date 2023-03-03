import pkg from 'bcryptjs';
const {genSalt, hash} = pkg;

export default async (req, res, next) => {
    try {
        const salt = await genSalt()
        const hashed = await hash(req.body.password, salt)
        res.locals.password = hashed
        next()
    } catch (error) {
        return res.status(500).send(error)
    }
}