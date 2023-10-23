import db from "../db.js"
import {Model, DataTypes} from 'sequelize'
import Client from "./client.model.js"

class Pet extends Model{}

Pet.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING
    },
    birth: {
        type: DataTypes.STRING
    }
}, {sequelize: db, timestamps: false})

Pet.belongsTo(Client)
Client.hasMany(Pet)

export default Pet