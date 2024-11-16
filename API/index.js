import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import cors from 'cors'
import routes from './routes/wellnessRoutes'

const app = express();
const PORT = 4000;
//const mongoUri = "mongodb+srv://mongodb:mongodb@cluster0.fjfss.mongodb.net/?retryWrites=true$w=majority" || "mongodb://localhost:27017/wellnessDb";
//const mongoUri = "mongodb+srv://mongodb:mongodb@cluster0.fjfss.mongodb.net/?retryWrites=true&w=majority" || "mongodb://localhost:27017/wellnessDB";
const mongoUri = "mongodb+srv://mongodb:mongodb@cluster0.fjfss.mongodb.net/wellnessDB" || "mongodb://localhost:27017/wellnessDB";
//const mongoUri = "mongodb+srv://mongodb:mongodb@cluster0.fjfss.mongodb.net/wellnessDB" // this one works locally
//const mongoUri = "mongodb://localhost:27017/wellnessDB";

// mongo connection
mongoose.Promise = global.Promise
mongoose.connect(mongoUri)

// bodyparser
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())

// Cors
app.use(cors())

routes(app)

app.get('/',(req,res) =>
    res.send(`Our application is running ${PORT}`))

app.listen(PORT,() =>
   console.log(`Your wellness server is running on port ${PORT}`))