 /*
 responde a la ruta /user
 */
const { Router } = require ('express');
const router = Router();
const {
    guardarUsuario,
    listarUsuario,
    actualizarUsuario,
    borrarUsuario,
    buscarUno
} = require('../controllers/usuarioController')

router.get('/',listarUsuario );
router.get('/:id',buscarUno);
router.post('/guardar', guardarUsuario);
router.put('/actualizar/:id', actualizarUsuario);
//si usamos patch en vez de put, actualiza todos los datos
router.delete('/borrar/:id',borrarUsuario);

module.exports = router; //aca exporto el router
