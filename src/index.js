import express from "express"
import dotenv from 'dotenv'
dotenv.config()
import cors from "cors"

import all_vacations from '../src/routers/all_vacations.js'
import save_vacation from '../src/routers/save_vacation.js'
import save_user from '../src/routers/save_user.js'
import login from '../src/routers/login.js'
import get_user from '../src/routers/get_user.js'
import edit_vacation from '../src/routers/edit_vacation.js'
import delete_vacation from '../src/routers/delete_vacation.js'
import follow from '../src/routers/follow.js'

//GENERAL
const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Credentials': true
    });
    next();
})

//ROUTERS
app.use('/all_vacations', all_vacations)
app.use('/save_vacation', save_vacation)
app.use('/edit_vacation', edit_vacation)
app.use('/delete_vacation', delete_vacation)

app.use('/save_user', save_user)
app.use('/login', login)
app.use('/get_user', get_user)
app.use('/follow', follow)

app.get('/', (req, res) => {
    try {
    } catch (error) {
        console.error('endpoint not found')
    }
})

//LISTEN
const port = process.env.server_port
app.listen(port, () => console.log(`server is listening on port ${port}`))