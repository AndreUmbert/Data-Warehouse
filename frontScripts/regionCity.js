//Que? Quiero hacer un array de objetos con otros objetos dentro (Nested Array).
//Como? Usando array multidimensinal, pero primero tengo que definir desde abajo hacia arriba, es decir desde ciudades hasta regiones y luego incluirlas dentro
//Para que? Para tener todas las regiones, paises y ciudades debidamente y hacer una especia de diagrama de arbol
//Por que? Al usar un nested array de objetos, esto me permite poder acceder a cada uno de los valores de los objetos que cree. 

const regionCity = document.getElementById("regionCity");
const regionUl = document.getElementById("regionCityUl");

const americaCities = [{ name: "New York", value: 1 }, { name: "Las Vegas", value: 2 }, { name: "Orlando", value: 3 }, { name: "Las Vegas", value: 4 }];
const canadaCities = [{ name: "Toronto", value: 1 }, { name: "Ottawa", value: 2 }, { name: "Vancouver", value: 3 }, { name: "Quebec", value: 4 }];
const mexicoCities = [{ name: "Ciudad de mexico", value: 1 }, { name: "Guadalajara", value: 2 }, { name: "Monterrey", value: 3 }, { name: "Tijuana", value: 4 }];
const argentinaCities = [{ name: "Córdoba", value: 1 }, { name: "La Plata", value: 2 }, { name: "Ciudad Autonoma de Buenos Aires", value: 3 }, { name: "La Rioja", value: 4 }];
const brasilCities = [{ name: "Rio de Janeiro", value: 1 }, { name: "Brasilia", value: 2 }, { name: "Manaos", value: 3 }, { name: "Curitiba", value: 4 }];
const colombiaCities = [{ name: "Bogota", value: 1 }, { name: "Medellin", value: 2 }, { name: "Cartajena", value: 3 }, { name: "Calí", value: 4 }];

const americaCountry = { name: "Estados Unidos", cities: americaCities, value: 1 };
const canadaCountry = { name: "Canada", cities: canadaCities, value: 2 };
const mexicoCountry = { name: "Mexico", cities: mexicoCities, value: 3 };

const argentinaCountry = { name: "Argentina", cities: argentinaCities, value: 1 };
const brasilCountry = { name: "Brasil", cities: brasilCities, value: 2 };
const colombiaCountry = { name: "Colombia", cities: colombiaCities, value: 3 };

const regions = [
    { name: "North America", countries: [americaCountry, canadaCountry, mexicoCountry] }, { name: "South America", countries: [argentinaCountry, brasilCountry, colombiaCountry] }
];

// regions[0].northAmericaCountries.forEach(function (e) {console.log(e.name)}

function showRegions() {
    for (let region of regions) {
        console.log(region);
        const regionEntry = document.createElement('div');
        regionEntry.setAttribute("class", "regionEntry");
        regionUl.appendChild(regionEntry);
        const regionPlusAddButton = document.createElement('div');
        regionPlusAddButton.setAttribute("class", "regionPlusAddButton");
        regionEntry.appendChild(regionPlusAddButton);
        const regionNameUl = regionPlusAddButton.appendChild(document.createElement('ul'));
        regionNameUl.setAttribute("class", "regionNameUl");
        regionNameUl.appendChild(document.createTextNode(region.name));
        regionPlusAddButton.appendChild(regionNameUl);
        const regionAddCountryButton = document.createElement('div');
        regionAddCountryButton.setAttribute("class", "regionAddCountryButton");
        const regionAddCountryButtonText = document.createElement("p");
        regionAddCountryButtonText.setAttribute("class", "regionAddCountryButtonText")
        regionAddCountryButtonText.appendChild(document.createTextNode("Add Country"))
        regionAddCountryButton.appendChild(regionAddCountryButtonText);
        regionPlusAddButton.appendChild(regionAddCountryButton)
        regionUl.appendChild(regionEntry);
        for (let country of region.countries.values()) {
            console.log(country);
            const countryEntry = document.createElement('div');
            countryEntry.setAttribute("class", "countryEntry")
            const countryNameUl = document.createElement("ul");
            countryNameUl.setAttribute("class", "countryNameUl");
            countryEntry.appendChild(countryNameUl);
            countryNameUl.appendChild(document.createTextNode(country.name));
            regionNameUl.appendChild(countryEntry);
            //Boton Edit
            const editCountry = document.createElement("div");
            editCountry.setAttribute("class", "editCountry");
            countryEntry.appendChild(editCountry);
            const editCountryText = document.createElement("p");
            editCountryText.setAttribute("class", " editCountryText");
            editCountryText.appendChild(document.createTextNode("Edit"));
            editCountry.appendChild(editCountryText);
            //boton Add
            const addCityButton = document.createElement("div");
            addCityButton.setAttribute("class", "addCityButton");
            countryEntry.appendChild(addCityButton);
            const addCityButtonText = document.createElement("p");
            addCityButtonText.setAttribute("class", " addCityButtonText");
            addCityButtonText.appendChild(document.createTextNode("Add City"));
            addCityButton.appendChild(addCityButtonText);
            // for (let city of country.cities.values()) {
            //     // console.log(city.name);
            //     const cityEntry = document.createElement('li');
            //     cityEntry.appendChild(document.createTextNode(city.name));
            //     countryEntry.appendChild(cityEntry);
            // }
        }
    }
}

showRegions();