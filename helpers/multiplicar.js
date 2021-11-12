const { rejects } = require('assert/strict');
const colors = require('colors');

const fs = require('fs');

// const crearArchivo = ( base ) =>{
//     return new Promise((resolve,reject) => {
//         console.log('==============================');
//         console.log('         TABLA DEL ',base);
//         console.log('==============================');
//         let salida = '';
//         for(let i = 1 ; i <= 10 ; i ++){
//             salida += `${base} X ${i} = ${( base * i )}\n`
//         } 
//         try {
//             fs.writeFileSync(`Tabla-${base}.txt`,salida);
//             resolve(`tabla-${base}.txt creado`);
//         } catch (error) {
//             reject(`la tabla del ${base} no se creo`);
//         }
//     });    
// }

const crearArchivo = async ( base , listado , hasta ) =>{
    try {
        if( listado){
            console.log('==============================');
            console.log('         TABLA DEL ',base);
            console.log('==============================');
        }
        let salida = '';
        let = base1 = base;
        for(base1 ; base1 <= hasta ; base1 ++){
            
            for(let i = 1 ; i <= 10 ; i ++){
                salida += `${base1} X ${i} = ${( base1 * i )}\n`
            } 
        }
        
        fs.writeFileSync(`./salida/Tabla-${base} al ${hasta} .txt`,salida);  
        const formato =  `Tabla-${base} al ${hasta} .txt se creo`;
        
        if( listado ){
            return salida += `${formato}\n`;
        }else{
            return formato;
        }

    } catch (error) {
        return error;
    }
        
}

module.exports = {
    // crearArchivo:crearArchivo esto es redundante
    crearArchivo
}