const express = require ('express')
const app = express()
const PORT = 3000
const dotenv = require('dotenv')
dotenv.config()
const swaggerUi = require('swagger-ui-express');
require('./dbConnection').connectdb()

const swaggerDocument={
    explorer:true,
    swaggerOptions:[
        {
            url:"/document",
            name: "User API"
        },
        {
            url:"/document/club",
            name: "Club API"
        },
    ]
    
}


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null,swaggerDocument));
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})
