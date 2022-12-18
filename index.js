
const app = require('./server');
const { PORT } = require('./config/mongo');
const { getConnection } = require('./db/conexion')

/* 
conectar a la base de datos y 
levantar la aplicaciòn
 */

getConnection().then((mensaje) =>{
    console.log(mensaje);
}).catch(console.log); 

app.listen(PORT, ()=>{
    console.log(`Aplicación corriendo en el Puerto ${PORT}`);
});



/*
const app = require('./server');
const { PORT } = require('./config/mongo');
const { getConnection } = require ('./db/conexion');
//const sql = require ('./config/sql');

//Conectar a la base de datos y levantar la aplicacion//

//sql.database

getConnection().then ((mensaje) =>{
    console.log(mensaje);
}).catch (console.log(mensaje));

app.listen(PORT, ()=>{
    console.log(`Aplicacion corriendo en el Puerto ${PORT}`);
});

*/