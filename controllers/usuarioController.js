
const userServicio = require('../servicios/userServicio');
const user = new userServicio();

const guardarUsuario = async (req,res) => {

    await user.createUser(req.body);

    res.json({
        user: 'Creado'
    })
    console.log(req.body);

}

const listarUsuario = async (req,res) => {

    const usuarios = await user.getAllUser();

    res.json (usuarios)
        
    //console.log(req.body);

    
}


const actualizarUsuario = async (req, res) => {   
    const {
        body,
        params:{ id }
    } = req;

    const actualizado = await user.updateUser(id, body);
    res.json(actualizado);
    }
    


const borrarUsuario = async (req,res) => {
    const {
        body,
        params: { id }
    }=req;
    const borrado = await user.deleteUser(id);
    res.json(borrado);
}


module.exports = {
    guardarUsuario,
    listarUsuario,
    actualizarUsuario,
    borrarUsuario
}