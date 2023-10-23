import Client from '../model/client.model.js'

let findAll = (request, response) => {
    Client.findAll().then( results => {
        response.status(200).json(results)
    }).catch(error => {
        console.log(error)
    })
}

let findByPk = (request, response) => {
    Client.findByPk(request.params.id).then(result => {
        response.status(200).json(result)
    })
}

let create = (request, response) => {
    Client.create({
        name: request.body.name,
        document: request.body.document,
    }).then(result => {
        response.status(201).json(result)
    }).catch(error => {
        console.log(error)
    })
}

export default {findAll, findByPk, create}