import db from '../db.js'

const getUsers = async () => {
    const query = `
            select * from users;
        `
        return await db.execute(query)
}

export default async (req, res, next) => {
    try {
        const users = await getUsers()
        const users0 = users[0]
        const nameAlreadyExists = users0.filter((user)=>{
             user.user_name == req.body.user_name
        })
        if(nameAlreadyExists.length){
            res.status(403).send('username already exists')
        }
        const emailAlreadyExists = users.filter((user)=>{
             user.email == req.body.email
        })
        if(emailAlreadyExists.length){
            res.status(403).send('email already registered')
        }
        next()
    } catch (error) {
        return res.status(500)
    }
}