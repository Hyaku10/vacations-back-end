import db from "../db.js"

export default class User {
    constructor(first, last, user_name, email,  password) {
        this.first_name = first
        this.last_name = last
        this.user_name = user_name
        this.email = email
        this.password = password
    }
    async save() {
        const query = `
            insert into users(first_name, last_name, user_name, email, password)
            value('${this.first_name}','${this.last_name}','${this.user_name}','${this.email}','${this.password}')
        `
        return await db.execute(query)
    }
}