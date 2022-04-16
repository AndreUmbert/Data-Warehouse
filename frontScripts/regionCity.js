//Que? Quiero hacer un array de objetos con otros objetos dentro (Nested Array).
//Como? Usando array multidimensinal, pero primero tengo que definir desde abajo hacia arriba, es decir desde ciudades hasta regiones y luego incluirlas dentro
//Para que? Para tener todas las regiones, paises y ciudades debidamente y hacer una especia de diagrama de arbol
//Por que? Al usar un nested array de objetos, esto me permite poder acceder a cada uno de los valores de los objetos que cree.

const token = localStorage.getItem("token");
// console.log(token);
const config = { headers: { Authorization: `Bearer ${token}` } };
console.log(config);
const regionCity = document.getElementById("regionC4ity");
const regionUl = document.getElementById("regionCityUl");

// const americaCities = [
//     { name: "New York", value: 1 },
//     { name: "Las Vegas", value: 2 },
//     { name: "Orlando", value: 3 },
//     { name: "Las Vegas", value: 4 },
// ];
// const canadaCities = [
//     { name: "Toronto", value: 1 },
//     { name: "Ottawa", value: 2 },
//     { name: "Vancouver", value: 3 },
//     { name: "Quebec", value: 4 },
// ];
// const mexicoCities = [
//     { name: "Ciudad de mexico", value: 1 },
//     { name: "Guadalajara", value: 2 },
//     { name: "Monterrey", value: 3 },
//     { name: "Tijuana", value: 4 },
// ];
// const argentinaCities = [
//     { name: "Córdoba", value: 1 },
//     { name: "La Plata", value: 2 },
//     { name: "Ciudad Autonoma de Buenos Aires", value: 3 },
//     { name: "La Rioja", value: 4 },
// ];
// const brasilCities = [
//     { name: "Rio de Janeiro", value: 1 },
//     { name: "Brasilia", value: 2 },
//     { name: "Manaos", value: 3 },
//     { name: "Curitiba", value: 4 },
// ];
// const colombiaCities = [
//     { name: "Bogota", value: 1 },
//     { name: "Medellin", value: 2 },
//     { name: "Cartajena", value: 3 },
//     { name: "Calí", value: 4 },
// ];

// const americaCountry = {
//     name: "Estados Unidos",
//     cities: americaCities,
//     value: 1,
// };
// const canadaCountry = { name: "Canada", cities: canadaCities, value: 2 };
// const mexicoCountry = { name: "Mexico", cities: mexicoCities, value: 3 };

// const argentinaCountry = {
//     name: "Argentina",
//     cities: argentinaCities,
//     value: 1,
// };
// const brasilCountry = { name: "Brasil", cities: brasilCities, value: 2 };
// const colombiaCountry = { name: "Colombia", cities: colombiaCities, value: 3 };

const regions = [
    // {
    //     name: "North America",
    //     countries: [americaCountry, canadaCountry, mexicoCountry],
    // }
];

// regions[0].northAmericaCountries.forEach(function (e) {console.log(e.name)}

function showRegions() {
    for (let region of regions) {
        // console.log(region);
        const regionEntry = document.createElement("div");
        regionEntry.setAttribute("class", "regionEntry");
        regionUl.appendChild(regionEntry);
        const regionPlusAddButton = document.createElement("div");
        regionPlusAddButton.setAttribute("class", "regionPlusAddButton");
        regionEntry.appendChild(regionPlusAddButton);
        const regionNameUl = regionPlusAddButton.appendChild(
            document.createElement("ul")
        );
        regionNameUl.setAttribute("class", "regionNameUl");
        const regionName = document.createElement("p");
        regionName.setAttribute("class", "regionName");
        regionName.appendChild(document.createTextNode(region.name));
        regionNameUl.appendChild(regionName);
        regionPlusAddButton.appendChild(regionNameUl);
        const regionAddCountryButton = document.createElement("div");
        regionAddCountryButton.setAttribute("class", "regionAddCountryButton");
        const regionAddCountryButtonText = document.createElement("p");
        regionAddCountryButtonText.setAttribute(
            "class",
            "regionAddCountryButtonText"
        );
        regionAddCountryButtonText.appendChild(
            document.createTextNode("Add Country")
        );
        regionAddCountryButton.appendChild(regionAddCountryButtonText);
        regionPlusAddButton.appendChild(regionAddCountryButton);
        regionUl.appendChild(regionEntry);
        for (let country of region.countries.values()) {
            // console.log(country);
            const countryEntry = document.createElement("div");
            countryEntry.setAttribute("class", "countryEntry");
            const countryNameUl = document.createElement("ul");
            countryNameUl.setAttribute("class", "countryNameUl");
            countryEntry.appendChild(countryNameUl);
            countryNameUl.appendChild(document.createTextNode(country.name));
            regionNameUl.appendChild(countryEntry);
            //Edit Country Button
            const editCountry = document.createElement("div");
            editCountry.setAttribute("class", "editCountry");
            countryEntry.appendChild(editCountry);
            const editCountryText = document.createElement("p");
            editCountryText.setAttribute("class", " editCountryText");
            editCountryText.appendChild(document.createTextNode("Edit"));
            editCountry.appendChild(editCountryText);
            //Delete Country Button
            const deleteCountry = document.createElement("div");
            deleteCountry.setAttribute("class", "deleteCountry");
            countryEntry.appendChild(deleteCountry);
            const deleteCountryText = document.createElement("p");
            deleteCountryText.setAttribute("class", " deleteCountryText");
            deleteCountryText.appendChild(document.createTextNode("Delete"));
            deleteCountry.appendChild(deleteCountryText);
            //Add City Button
            const addCity = document.createElement("div");
            addCity.setAttribute("class", "addCity");
            countryEntry.appendChild(addCity);
            const addCityText = document.createElement("p");
            addCityText.setAttribute("class", " addCityText");
            addCityText.appendChild(document.createTextNode("Add City"));
            addCity.appendChild(addCityText);
            const cities = document.createElement("div");
            cities.setAttribute("class", "cities");
            countryEntry.appendChild(cities);
            for (let city of country.cities.values()) {
                const cityEntry = document.createElement("li");
                cityEntry.setAttribute("class", "cityEntry");
                cityEntry.appendChild(document.createTextNode(city.name));
                countryEntry.appendChild(cityEntry);
                cities.appendChild(cityEntry);
                //Edit Country Button
                const editCity = document.createElement("div");
                editCity.setAttribute("class", "editCity");
                cityEntry.appendChild(editCity);
                const editCityText = document.createElement("p");
                editCityText.setAttribute("class", " editCityText");
                editCityText.appendChild(document.createTextNode("Edit"));
                editCity.appendChild(editCityText);
                // Delete City Button
                const deleteCity = document.createElement("div");
                deleteCity.setAttribute("class", "deleteCity");
                cityEntry.appendChild(deleteCity);
                const deleteCityText = document.createElement("p");
                deleteCityText.setAttribute("class", " deleteCityText");
                deleteCityText.appendChild(document.createTextNode("Delete"));
                deleteCity.appendChild(deleteCityText);
            }
        }
    }
}

// Get regions from server

const getRegions = async () => {
    const regiones = await axios.get(
        "http://localhost:3000/region/dashboard",
        config
    );
    regiones.data.forEach((item) =>
        regions.push({ name: item.regionName, id: item.id, countries: [] })
    );
    return regions;
};

getRegions();

const getCountries = async (regions) => {
    let paises = await axios.get(
        "http://localhost:3000/country/dashboard",
        config
    );

    for (let rIndex = 0; rIndex < regions.length; rIndex++) {
        for (let pIndex = 0; pIndex < paises.data.length; pIndex++) {
            if (regions[rIndex].id == paises.data[pIndex].regionId) {
                regions[rIndex].countries.push(paises.data[pIndex])

            }
        }
    }
    console.log(regions);
};

getCountries(regions);

const getCities = () => {
    axios.get("http://localhost:3000/city/dashboard", config);
    // .then(function (response) {
    //     console.log(response);
    // });
};

getCities();
