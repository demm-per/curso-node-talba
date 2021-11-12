// const { argv } = require('process');
// const { number, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const yargs = require('./config/yargs');

console.clear();
 
const createTable = async (base,listado,hasta) => {
    try {
        const resultadoMultiplicacion = await crearArchivo(base,listado,hasta);
        console.log(resultadoMultiplicacion);
    } catch (error) {
        console.log(error);
    }
}


createTable( yargs.b , yargs.l , yargs.a);
// DE ESTA FORMA NO SE DEBEN DE TOMAR LOS VALORES DE CONSOLA
// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base = 5 ] = arg3.split('=');
// console.log(base);

//const base = 4;
// crearArchivo( base )
//     .then(resultado => console.log(resultado))
//     .catch(err => console.log(err));