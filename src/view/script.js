const url = "http://localhost:3000"

function getClients(){
    axios.get(url + '/clients').then(function(result){
        console.log(result)
        const clients = result.data
        for(let client of clients){
            addClient(client)
        }
    })
}

function postClient(){
    const cliName = document.getElementById('name').value
    const cliDoc = document.getElementById('document').value

    axios.post(url + '/clients', {
        name: cliName,
        document: cliDoc, 
    }).then(result => {
        addClient(result.data)
    })
}

function addClient(client){
    const p = document.createElement('p')
    p.innerHTML = client.name + ', ' + client.document
    document.getElementById('div-clients').appendChild(p)
}