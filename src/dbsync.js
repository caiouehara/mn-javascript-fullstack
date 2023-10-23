import Client from "./model/client.model.js";

await Client.sync()

await Client.create({name: "Maria Maria Zellkreim", document:"222.134.456-34"})

await Client.findAll().then(function(results) {
    for(let client of results) {
        console.log(client.dataValues)
    }
})