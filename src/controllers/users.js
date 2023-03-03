import User from "../models/users.js"

export const save = async (data) => {
    const {first_name, last_name, user_name, email, password} = data
    const user = new User(first_name, last_name, user_name, email, password)
    const res = await user.save()
    return res
}