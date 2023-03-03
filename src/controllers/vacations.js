import Vacation from "../models/vacations.js"

export const save = async (data) => {
    const {destination, description, image_id, start_date, finish_date, price} = data
    const vacation = new Vacation(destination, description, image_id, start_date, finish_date, price)
    const res = await vacation.save()
    return res
}