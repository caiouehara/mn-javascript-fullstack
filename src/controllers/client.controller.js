import Client from '../model/client.model.js'

let findAll = (request, response) => {
    Client.findAll().then( results => {
        response.status(200).json(results)
    }).catch(error => {
        console.log(error)
    })
}


export default {findAll}