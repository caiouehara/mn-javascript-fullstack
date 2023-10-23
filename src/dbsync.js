import Client from "./model/client.model.js"
import Pet from "./model/pet.model.js"

await Client.sync()
await Pet.sync()


await Client.findAll().then(function(results) {
    for(let client of results) {
        console.log(client.dataValues)
    }
})

await Pet.findAll().then(function(results) {
    for(let pet of results) {
        console.log(pet.dataValues)
    }
})