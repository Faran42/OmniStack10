module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}

//split divide o array no caractere informado
//trim remove espaços antes e depois