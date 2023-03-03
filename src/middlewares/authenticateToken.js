import jwt from 'jsonwebtoken'
import db from '../db.js'

const getUsers = async () => {
    const query = `
            select * from users;
        `
    return await db.execute(query)
}

export default async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.sendStatus(401)
        }
        const token = authHeader.split(' ')[1]
        if (!token) {
            return res.sendStatus(401)
        }
        const key = process.env.JWT_KEY
        if (!key) {
            return res.sendStatus(401)
        }
        jwt.verify(
            token,
            key,
            async (error, decoded) => {
                const { user_or_email } = decoded
                if (user_or_email === process.env.ADMIN_USER) {
                    res.locals.admin = 'admin'
                    return next()
                }
                const users = await getUsers()
                const justUsers = users[0]
                for (const user of justUsers) {
                    if (user.user_name === user_or_email) {
                        res.locals.admin = 'user'
                        res.locals.user = user
                        return next()
                    }
                }
                res.locals.admin = 'logged_out'
                return next()
            }
        )
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}