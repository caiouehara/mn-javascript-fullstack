import breads from '../model/dogbreads.model.js'

function getRandom(request, response){
    const i = Math.floor(Math.random() * breads.length)
    response.send(breads[i])
}

export default { getRandom }