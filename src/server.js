import express from 'express'
import routes from './routes/routes.js'

const app = express()
const port = '3000'

app.get('/', (request, response) => {
    response.send('Hello world')  
})

app.use(routes)

app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`)
})
