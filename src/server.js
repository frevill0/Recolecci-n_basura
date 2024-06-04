import express from 'express'

//inicializaciones
const app = express()

app.set('port', process.env.port || 3000)

app.use(express.json())

app.get('/', (req,res) => res.send("Server on"))

export default app 