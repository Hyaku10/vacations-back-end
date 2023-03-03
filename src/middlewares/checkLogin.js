import pkg from 'bcryptjs';
import db from '../db.js'
const { compare } = pkg;

const getUsers = async () => {
    const query = `
            select * from users;
        `
        return await db.execute(query)
}

export default async (req, res, next) => {
    try {
        if (req.body.user_or_email == process.env.ADMIN_USER && req.body.password == process.env.ADMIN_PASS){
            res.locals.admin = 'admin'
            return next()
        }
        const users = await getUsers()
        let comparePassword = ''
        const justUsers = users[0]
        for (const user of justUsers){
            if(user.user_name == req.body.user_or_email || user.email == req.body.user_or_email){
                comparePassword = user.password
            }
        }
        const isValid = await compare(req.body.password, comparePassword)
        if (!isValid){
            res.locals.admin = 'logged_out'
            return res.status(401).send('username or password is incorrect')
        }
        res.locals.admin = 'user'
        return next()
    } catch (error) {
        return res.status(500).send(error)
    }
}