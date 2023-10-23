import Pet from '../model/pet.model.js'

let findAll = (request, response) => {
    Pet.findAll().then( results => {
        response.status(200).json(results)
    }).catch(e => { console.log(e) })
}

let findByPk = (request, response) => {
    Pet.findByPk(request.params.id).then(result => {
        response.status(200).json(result)
    }).catch(e => { console.log(e) })
}

let findPetsOfClient = (request, response) => {
    Pet.findAll({where: {ClientId: request.params.id}}).then(result => {
        response.status(200).json(result)
    }).catch(e => { console.log(e) })
}

let create = async (request, response) => {
    Pet.create({
        name: request.body.name,
        type: request.body.type,
        breed: request.body.breed,
        birth: request.body.birth,
        ClientId: request.body.ClientId
    }).then(result => {
        response.status(201).json(result)
    }).catch(e => { console.log(e) })
}

async function update(request, response) {
    Pet.update({
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
    Pet.destroy({
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


export default {findAll, findByPk, findPetsOfClient, create, update, deleteByPk}