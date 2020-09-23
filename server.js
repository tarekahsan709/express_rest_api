const express = require('express')

const morgan = require('morgan')
const bodyParser = require('body-parser')

const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contacts-db');
const db = mongoose.connection

db.on('error',(err)=>{


    console.log(err)
}



)


db.once('open', () => {


    console.log('Database connected Successfully')
}



)














const contactRoute = require('./api/routes/contact')

/*
const schema = mongoose.Schema
const contactSchema= new Schema({
    
         name: {
            type: String,
            required: true,
            minlength: 3   

         },
         phone: {
             type: String,
             require: true  




         }



}



)

const Contact = mongoose.model('Contact',contactSchema)



*/


















console.log(express)
const app = express()



app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



const PORT=process.env.PORT || 3000


/*
app.use((req,res,next)=>{

    console.log('i am middleware')
    next()
})

*/


app.use('/api/contacts',contactRoute)

app.get('/',(req,res)=>{

    res.send('<h1>Hello World</h1>')
}

)

app.get('/posts', (req, res) => {

    res.send('<h1>Another Route</h1>')
}

)


app.get('/api/contacts', (req, res) => {

    res.send('<h1>contacts</h1>')
}

)
/*
app.post('/api/contacts', (req, res) => {

    res.json({

        message: 'i am postman'
    })
}

)

*/







app.listen(PORT,()=>{

console.log(`server is running of PORT ${PORT}`)

})