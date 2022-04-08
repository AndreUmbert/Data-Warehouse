//Que? Quiero hacer un array de objetos con otros objetos dentro (Nested Array).
//Como? Usando array multidimensinal, pero primero tengo que definir desde abajo hacia arriba, es decir desde ciudades hasta regiones y luego incluirlas dentro
//Para que? Para tener todas las regiones, paises y ciudades debidamente y hacer una especia de diagrama de arbol
const regionCity = document.getElementById("regionCity");
const americaCities = ["New York", "Las Vegas", "Orlando", "Los Angeles"];
const canadaCities = ["Toronto", "Ottawa", "Vancouver", "Quebec"];
const mexicoCities = ["Ciudad de Mexico", "Guadalajara", "Monterrey","Tijuana"];
const argentinaCities = ["Córdoba","La Plata", "Ciuedad Autonoma de Buenos Aires", "La Rioja"];
const brasilCities = ["Rio de Janeiro", "Brasilia", "Manaos", "Curitiba"];
const colombiaCities = ["Bogota", "Medellin","Cartagena", "Calí"];

const regions = [
   ["North America", ["Estados Unidos",[americaCities]],["Canada",[canadaCities]], ["Mexico", [mexicoCities]]], ["South America",["Argentina",[argentinaCities]], ["Brasil",[brasilCities]], ["Colombia", [colombiaCities]]]
];

function  showRegions() {
    console.log(regions);
    regionCity.innerHTML = `${regions}`
}

showRegions();