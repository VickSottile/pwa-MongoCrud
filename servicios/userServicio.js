const userModel = require ('../db/userModel');

module.exports =  class {

    async createUser(user){
        await userModel.create(user)
    }

    async getAllUser(){
        const todos = await userModel.find()
        return todos;
    } 

    async getUser(id){
        const buscado = await userModel.findById(id)
        return buscado;

    }
    


    async updateUser(id,userActualizar){
        const actualizado = await userModel.findByIdAndUpdate(id, userActualizar);
        return userActualizar;
    }

    async deleteUser(id){
        const borrado = await userModel.findByIdAndDelete(id);
        return borrado;
    }
}