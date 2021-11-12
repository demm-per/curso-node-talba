const { number } = require('yargs');

const yargs = require('yargs')
    .option('b',{
            alias:'base',
            type:'number',
            demandOption:true,
            describe:'Es la base de la tabla de multiplicar'
        }
    )    
    .check((argv,options) =>{
        if ( isNaN(argv.b) ) throw 'La base tiene que ser un numero';
        return true;
    })
    .option('l',{
        alias : 'listado',
        type : 'boolean',
        demandOption : true,
        default : false,
        describe:'Muestra la tabla en consola'
    })
    .option('a',{
        alias: 'hasta',
        type : 'number',
        demandOption: true,
        default: 1,
        description: 'hasta que numero se desea la tabla'
    }).check((argv,options) =>{
        if ( isNaN(argv.a) ) throw 'Hasta que tabla tiene que ser un numero';
        return true;
    })
    .argv;

    module.exports = yargs;