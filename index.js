import express from "express"
import dotenv from "dotenv"
import cors from 'cors';
import bodyParser from "body-parser"
import mongoose from 'mongoose';


const app = express();
dotenv.config();


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))

//home

app.get('/', (req,res) => {
    res.json({mssg: 'home'})
})

//login

app.get('/login', (req,res) => {
    res.json({mssg: 'login'})
})

// register

app.get('/register', (req,res) => {
    res.json({mssg: 'register'})
})



//connection mongo
mongoose.connect(process.env.mongo_url)
    .then( ()=> {
        app.listen(process.env.PORT, () => {
            console.log("connected", process.env.PORT) 
        })
    })
    .catch((error)=>{
        console.log(error)
    })


