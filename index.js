import express from "express"
import cors from "cors"
import r_users from "./src/routers/users.js"

const app = express()

app.use(cors())
app.use(express.json({limit: '5mb'}))
app.use(express.urlencoded({limit: '5mb', extended: true}))

app.use("/api/v1", r_users)

app.listen(3010, () => console.log('server running at http://localhost:3010'))