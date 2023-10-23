import breads from '../model/dogbreads.model.js'

function getRandom(request, response){
    const i = Math.floor(Math.random() * breads.length)
    response.send(breads[i])
}

function getById(request, response){
    console.log(request.query.id)
    response.send(breads.find( (i) => i == id))
}

export default { getRandom, getById }