import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const PORT = process.env.PORT

const app = express()

app.get('/', (req, res)=>{
	console.log('Client connected')
	res.send('APP Home page')
})

app.listen(PORT, ()=>{
	console.log(`server on port ${PORT}`)
})