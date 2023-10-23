import express from 'express'
import routes from './routes/routes.js'
import cors from 'cors'

const app = express()
const port = '3000'

app.get('/', (request, response) => {
    response.send('Hello world')  
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`)
})
