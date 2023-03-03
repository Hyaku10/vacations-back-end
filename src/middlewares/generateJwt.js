import jwt from 'jsonwebtoken'

export default async (req, res, next) => {
    try {
        const {user_or_email} = req.body
        const key = process.env.JWT_KEY
        jwt.sign(
            {user_or_email},
            key,
            (error, token) => {
                if(error){
                    console.log(error)
                    return res.sendStatus(500)
                }
                res.locals.jwt = token
                next()
            }
        )
    } catch (error) {
        return res.status(500).send(error)
    }
}
