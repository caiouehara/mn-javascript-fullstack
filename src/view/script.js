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
    const div = document.getElementById('div-clients')
    const container = document.createElement('div')
    container.classList.add('client-list')
    container.id = client.id

    const c = document.createElement('p')
    c.innerText = client.name + ', ' + client.document

    const view = document.createElement('spam')
    view.classList.add('material-symbols-outlined')
    view.innerText = 'pageview'
    view.setAttribute('onclick','getPets(' + client.id + ', "' + client.name + '")')
    const trash = document.createElement('spam')
    trash.classList.add('material-symbols-outlined')
    trash.innerText = 'delete'
    trash.setAttribute('onclick','deleteClient(' + client.id + ')')

    container.appendChild(c)
    container.appendChild(view)
    container.appendChild(trash)
    div.appendChild(container)
}

function deleteClient(id) {
    axios.delete(url + '/clients/' + id
    ).then(function (response) {
        document.getElementById(id).remove()
    }).catch(function (e) {
        console.error(e)
    })
}