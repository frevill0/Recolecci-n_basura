import express from 'express'
import morgan from 'morgan'

import reclamosRoute from './routes/reclamos_routes.js'

//inicializaciones
const app = express()
app.use(morgan('dev'))

app.set('port', process.env.port || 3000)

app.use(express.json())

app.get('/', (req,res) => res.send("Server on"))


app.use('/api/v1',reclamosRoute)

export default app 