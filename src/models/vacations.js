import db from "../db.js"

export default class Vacation {
    constructor(destination, description, image_id, start, finish, price) {
        this.description = description
        this.destination = destination
        this.image_id = image_id
        this.start_date = start
        this.finish_date = finish
        this.price = price
        }
    async save() {
        const query = `
            insert into vacations(description, destination, image_id, start_date, finish_date, price, followers)
            value('${this.description}','${this.destination}','${this.image_id}',
                    '${this.start_date}','${this.finish_date}','${this.price}',0)
        `
        return await db.execute(query)
    }
}