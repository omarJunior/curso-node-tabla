
const fs = require("fs");
const colors = require("colors");

const crearArchivoTabla = async(base = 5, listar = false, hasta = 10)=>{ 
    try{
        let salida = "";
        let consola = "";
        
        for(let i = 1 ; i <= hasta; i++){
            salida += `${base} * ${i} = ${base * i}\n`;
            consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
        }

        if(listar){
            console.log("=====================".green);
            console.log("Tabla del:".green, colors.blue(base));
            console.log("=====================".green);        
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return await `tabla-${base}.txt`;

    }catch(e){
        console.log(e);
    }
       
}

module.exports = {
    crearArchivoTabla
};