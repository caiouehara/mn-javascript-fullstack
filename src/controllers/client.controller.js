import Client from '../model/client.model.js'

let findAll = (request, response) => {
    Client.findAll().then( results => {
        response.status(200).json(results)
    }).catch(e => { console.log(e) })
}

let findByPk = (request, response) => {
    console.log(request.params.id)
    Client.findByPk(request.params.id).then(result => {
        response.status(200).json(result)
    }).catch(e => { console.log(e) })
}

let create = async (request, response) => {
    Client.create({
        name: request.body.name,
        document: request.body.document,
    }).then(result => {
        response.status(201).json(result)
    }).catch(e => { console.log(e) })
}

async function update(request, response) {
    Client.update({
        name: request.body.name,
        document: request.body.document
    }, {
        where: {
            id: request.params.id
        }
    }).then(result => {
        response.status(200).json(result)
    }).catch((e) => console.log(e))
}

async function deleteByPk(request, response) {
    Client.destroy({
        where: {
            id: request.params.id
        }
    }).then(result => {
        if (result == 1) {
            response.status(200).send()
        } else {
            response.status(404).send()
        }
    }).catch((e) => console.log(e))

}


export default {findAll, findByPk, create, update, deleteByPk}