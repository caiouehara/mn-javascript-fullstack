import breads from '../model/dogbreads.model.js'

function getRandom(request, response){
    const i = Math.floor(Math.random() * breads.length)
    response.send(breads[i])
}

function getById(request, response){
    //not updated
    console.log(request.params.id)
    response.send(breads.find( (i) => i == id))
}

export default { getRandom, getById }