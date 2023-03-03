
export default async (req, res, next) => {
    for(const key in req.body){
        if(!['first_name', 'last_name', 'user_name', 'email', 'password'].includes(key)){
            return res.status(400).send(`invalid property ${key}`)
        }
    }
    next()
}