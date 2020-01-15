module.exports = (arryAsString) =>{
    return arryAsString.split(',').map(tech => tech.trim());
}