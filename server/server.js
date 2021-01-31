const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())


//import route//
const swapiRoutes = require("./routes/swapi")

app.use("/swapi",swapiRoutes)


app.listen(PORT,() => console.log(`Server started on ${PORT}`))

