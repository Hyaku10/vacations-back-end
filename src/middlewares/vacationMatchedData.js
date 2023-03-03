
export default async (req, res, next) => {
    for(const key in req.body){
        if(!['description', 'destination', 'image_id', 'start_date', 'finish_date', 'price'].includes(key)){
            return res.status(400).send(`invalid property ${key}`)
        }
    }
    next()
}