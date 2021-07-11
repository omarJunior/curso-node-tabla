
const { crearArchivoTabla } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

//console.log(argv) 

crearArchivoTabla(argv.b, argv.l, argv.h)
.then( nombreArchivo => {
  console.log(nombreArchivo.rainbow, "creado");
} )
.catch( e => console.log(e) ); 


