//Que? Quiero hacer un array de objetos con otros objetos dentro (Nested Array).
//Como? Usando array multidimensinal, pero primero tengo que definir desde abajo hacia arriba, es decir desde ciudades hasta regiones y luego incluirlas dentro
//Para que? Para tener todas las regiones, paises y ciudades debidamente y hacer una especia de diagrama de arbol

//Por que? Al usar un nested array de objetos, esto me permite poder acceder a cada uno de los valores de los objetos que cree.
const blur = document.getElementById("blurSection");
const token = localStorage.getItem("token");
const config = { headers: { Authorization: `Bearer ${token}` } };
const regionCity = document.getElementById("regionCity");
const regionUl = document.getElementById("regionCityUl");
const addRegionCityButton = document.getElementById("addRegionCityButton");
const addRegionFormContainer = document.getElementById(
    "addRegionFormContainer"
);
const inputRegion = document.getElementById("inputRegion");
let formControl = document.getElementById("formControl");
const regionAddButton = document.getElementsByClassName("regionAddButton");
let contador = 0;
let indexCountry = 0;

// regions[0].northAmericaCountries.forEach(function (e) {console.log(e.name)}

// Get regions from server
const getDemographics = async () => {
    let paises = await axios.get(
        "http://localhost:3000/country/dashboard",
        config
    );

    console.log(paises.data);
    let cities = await axios.get("http://localhost:3000/city/dashboard", config);

    for (let pIndex = 0; pIndex < paises.data.length; pIndex++) {
        paises.data[pIndex].cities = [];
        for (let cIndex = 0; cIndex < cities.data.length; cIndex++) {
            if (paises.data[pIndex].id == cities.data[cIndex].countryId) {
                paises.data[pIndex].cities.push(cities.data[cIndex]);
            }
        }
    }

    getAndShowRegions(paises);
};

const getAndShowRegions = async (paises) => {
    let regiones = await axios.get(
        "http://localhost:3000/region/dashboard",
        config
    );

    for (let rIndex = 0; rIndex < regiones.data.length; rIndex++) {
        regiones.data[rIndex].countries = [];
        for (let pIndex = 0; pIndex < paises.data.length; pIndex++) {
            if (regiones.data[rIndex].id == paises.data[pIndex].regionId) {
                regiones.data[rIndex].countries.push(paises.data[pIndex]);
            }
        }
    }

    showRegions(regiones.data);
};

getDemographics();


function showRegions(regions) {
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
        regionName.appendChild(document.createTextNode(region.regionName));
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
        regionAddCountryButton.setAttribute("countryNumber", indexCountry);
        indexCountry = indexCountry + 1;
        regionAddCountryButton.setAttribute("onclick", "createCountry(this)");
        for (let country of region.countries.values()) {
            // country:
            const countryEntry = document.createElement("div");
            countryEntry.setAttribute("class", "countryEntry");
            const countryNameUl = document.createElement("ul");
            countryNameUl.setAttribute("class", "countryNameUl");
            countryEntry.appendChild(countryNameUl);
            countryNameUl.appendChild(document.createTextNode(country.name));
            regionNameUl.appendChild(countryEntry);
            //Edit Country Button:
            const editCountry = document.createElement("div");
            editCountry.setAttribute("class", "editCountry");
            editCountry.setAttribute("onclick", "editCountry(this)");
            countryEntry.appendChild(editCountry);
            const editCountryText = document.createElement("p");
            editCountryText.setAttribute("class", " editCountryText");
            editCountryText.appendChild(document.createTextNode("Edit"));
            editCountry.appendChild(editCountryText);
            editCountry.setAttribute("countryName", country.name);
            //Delete Country Button:
            const deleteCountry = document.createElement("div");
            deleteCountry.setAttribute("class", "deleteCountry");
            deleteCountry.setAttribute("countryName", country.name);
            deleteCountry.setAttribute("onclick", "deleteCountry(this)");
            deleteCountry.setAttribute("citiesLength", country.cities.length);
            countryEntry.appendChild(deleteCountry);
            const deleteCountryText = document.createElement("p");
            deleteCountryText.setAttribute("class", " deleteCountryText");
            deleteCountryText.appendChild(document.createTextNode("Delete"));
            deleteCountry.appendChild(deleteCountryText);
            deleteCountry.setAttribute("countryId", country.id);
            //Add City Button:
            const addCity = document.createElement("div");
            addCity.setAttribute("onclick", "createCity(this)");
            // console.log(country);
            addCity.setAttribute("countryId", country.id);
            addCity.setAttribute("class", "addCity");
            countryEntry.appendChild(addCity);
            const addCityText = document.createElement("p");
            addCityText.setAttribute("class", "addCityText");
            addCityText.appendChild(document.createTextNode("Add City"));
            addCity.appendChild(addCityText);
            const cities = document.createElement("div");
            cities.setAttribute("class", "cities");
            countryEntry.appendChild(cities);
            for (let city of country.cities.values()) {
                //city
                const cityEntry = document.createElement("li");
                cityEntry.setAttribute("class", "cityEntry");
                cityEntry.appendChild(document.createTextNode(city.name));
                countryEntry.appendChild(cityEntry);
                cities.appendChild(cityEntry);
                //Edit City Button
                const editCity = document.createElement("div");
                editCity.setAttribute("class", "editCity");
                cityEntry.appendChild(editCity);
                const editCityText = document.createElement("p");
                editCityText.setAttribute("class", "editCityText");
                editCityText.appendChild(document.createTextNode("Edit"));
                editCity.appendChild(editCityText);
                editCity.setAttribute("onclick", "editCity(this)");
                editCity.setAttribute("cityName", city.name);
                // Delete City Button
                const deleteCity = document.createElement("div");
                deleteCity.setAttribute("class", "deleteCity");
                deleteCity.setAttribute("onclick", "deleteCity(this)");
                deleteCity.setAttribute("cityName", city.name);
                cityEntry.appendChild(deleteCity);
                const deleteCityText = document.createElement("p");
                deleteCityText.setAttribute("class", "deleteCityText");
                deleteCityText.appendChild(document.createTextNode("Delete"));
                deleteCity.appendChild(deleteCityText);
            }
        }
    }
}

//Add Region Button:
addRegionCityButton.addEventListener("click", () => {
    contador = contador + 1;
    if (!(contador % 2 == 0)) {
        addRegionFormContainer.style.display = "block";
        addRegionFormContainer.style.position = "relative";
        addRegionFormContainer.style.width = "20%";
        addRegionFormContainer.style.margin = "0 0 0 75.8%";
        addRegionFormContainer.style.border = "1px solid rgb(85, 85, 209)";
        inputRegion.style.display = "flex";
    } else {
        addRegionFormContainer.style.display = "none";
    }
    console.log(contador);
});

function createRegion() {
    console.log(formControl.value);
    axios.post(
        "http://localhost:3000/region/create",
        { regionName: formControl.value },
        config
    );
    location.reload();
}

//Add Country Button:
function createCountry(element) {
    console.log(element.getAttribute("countrynumber"));
    const blurDiv = document.createElement("blurDiv");
    blur.appendChild(blurDiv);
    blurDiv.style.position = "absolute";
    blurDiv.style.width = "100%";
    blurDiv.style.height = "100%";
    blurDiv.style.top = "0";
    regionCity.style.filter = "blur(8px)";
    const inputCountryContainer = document.createElement("Container");
    blurDiv.appendChild(inputCountryContainer);
    inputCountryContainer.style.position = "absolute";
    inputCountryContainer.style.display = "flex";
    inputCountryContainer.style.flexDirection = "column";
    inputCountryContainer.style.alignItems = "center";
    inputCountryContainer.style.width = "50%";
    inputCountryContainer.style.margin = " 0 0 0 25%";
    inputCountryContainer.style.backgroundColor = "rgb(130, 174, 255)";
    inputCountryContainer.style.height = "15vw";
    inputCountryContainer.style.top = "25vw";
    inputCountryContainer.style.border = "1px solid rgb(85, 85, 209)";
    inputCountryContainer.style.borderRadius = "1.5vw";
    const inputCountryText = document.createElement("p");
    inputCountryText.appendChild(document.createTextNode("Create Country"));
    inputCountryContainer.appendChild(inputCountryText);
    const inputCountry = document.createElement("input");
    inputCountry.setAttribute("type", "text");
    inputCountry.setAttribute("placeholder", "Country Name");
    inputCountryContainer.appendChild(inputCountry);
    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("id", " buttonsContainer");
    inputCountryContainer.appendChild(buttonsContainer);
    const createButton = document.createElement("button");
    createButton.setAttribute("id", "createButton");
    buttonsContainer.appendChild(createButton);
    createButton.setAttribute("type", "button");
    createButton.appendChild(document.createTextNode("Create"));
    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancelButton");
    buttonsContainer.appendChild(cancelButton);
    cancelButton.setAttribute("type", "button");
    cancelButton.appendChild(document.createTextNode("Close"));
    cancelButton.addEventListener("click", () => {
        blur.removeChild(blurDiv);
        regionCity.style.filter = "none";
    });
    createButton.addEventListener("click", async () => {
        let reg = await axios.get("http://localhost:3000/region/dashboard", config);
        // console.log(reg.data[element.getAttribute("countrynumber")].id);
        let regPost = await axios.post("http://localhost:3000/country/create", { "name": inputCountry.value, "regionId": reg.data[element.getAttribute("countrynumber")].id }, config);
        location.reload();
    });
}


//addCityButton:
function createCity(element) {
    console.log(element);
    const blurDiv = document.createElement("blurDiv");
    blur.appendChild(blurDiv);
    blurDiv.style.position = "absolute";
    blurDiv.style.width = "100%";
    blurDiv.style.height = "100%";
    blurDiv.style.top = "0";
    regionCity.style.filter = "blur(8px)";
    const inputCityContainer = document.createElement("Container");
    blurDiv.appendChild(inputCityContainer);
    inputCityContainer.style.position = "absolute";
    inputCityContainer.style.display = "flex";
    inputCityContainer.style.flexDirection = "column";
    inputCityContainer.style.alignItems = "center";
    inputCityContainer.style.width = "50%";
    inputCityContainer.style.margin = " 0 0 0 25%";
    inputCityContainer.style.backgroundColor = "rgb(130, 174, 255)";
    inputCityContainer.style.height = "15vw";
    inputCityContainer.style.top = "25vw";
    inputCityContainer.style.border = "1px solid rgb(85, 85, 209)";
    inputCityContainer.style.borderRadius = "1.5vw";
    const inputCityText = document.createElement("p");
    inputCityText.appendChild(document.createTextNode("Create City"));
    inputCityContainer.appendChild(inputCityText);
    const inputCity = document.createElement("input");
    inputCity.setAttribute("type", "text");
    inputCity.setAttribute("placeholder", "City Name");
    inputCityContainer.appendChild(inputCity);
    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("id", " buttonsContainer");
    inputCityContainer.appendChild(buttonsContainer);
    const createButton = document.createElement("button");
    createButton.setAttribute("id", "createButton");
    buttonsContainer.appendChild(createButton);
    createButton.setAttribute("type", "button");
    createButton.appendChild(document.createTextNode("Create"));
    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancelButton");
    buttonsContainer.appendChild(cancelButton);
    cancelButton.setAttribute("type", "button");
    cancelButton.appendChild(document.createTextNode("Close"));
    cancelButton.addEventListener("click", () => {
        blur.removeChild(blurDiv);
        regionCity.style.filter = "none";
    });
    //arreglar que se agregue por nombre y no por indice, ya que se rompe
    createButton.addEventListener("click", async () => {
        let count = await axios.get("http://localhost:3000/country/dashboard", config);
        console.log(element.getAttribute("countryId"));
        let countPost = await axios.post("http://localhost:3000/city/create", { "name": inputCity.value, "countryId": element.getAttribute("countryId") }, config);
        location.reload();
    });
}


//cityDelete:
function deleteCity(element) {
    const city = element.getAttribute("cityName");

    axios.delete(
        `http://localhost:3000/city/delete/${city}`,
        config
    );
    location.reload();
}

//countryDalete:

async function deleteAllCities(countryId) {
    await axios.delete(
        `http://localhost:3000/country/deleteAllCities/${countryId}`,
        config
    );
}

async function deleteCountry(element) {
    console.log(element);
    const countryName = element.getAttribute("countryname");
    const countryId = element.getAttribute("countryid");
    const numberOfCities = element.getAttribute("citieslength");

    (numberOfCities > 0) && await deleteAllCities(countryId)

    await axios.delete(
        `http://localhost:3000/country/delete/${countryName}`,
        config
    );

    location.reload();
}


//cityUpdate:
function editCity(element) {
    console.log(element);
    const blurDiv = document.createElement("blurDiv");
    blur.appendChild(blurDiv);
    blurDiv.style.position = "absolute";
    blurDiv.style.width = "100%";
    blurDiv.style.height = "100%";
    blurDiv.style.top = "0";
    regionCity.style.filter = "blur(8px)";
    const editInputCity = document.createElement("Container");
    blurDiv.appendChild(editInputCity);
    editInputCity.style.position = "absolute";
    editInputCity.style.display = "flex";
    editInputCity.style.flexDirection = "column";
    editInputCity.style.alignItems = "center";
    editInputCity.style.width = "50%";
    editInputCity.style.margin = " 0 0 0 25%";
    editInputCity.style.backgroundColor = "rgb(130, 174, 255)";
    editInputCity.style.height = "15vw";
    editInputCity.style.top = "25vw";
    editInputCity.style.border = "1px solid rgb(85, 85, 209)";
    editInputCity.style.borderRadius = "1.5vw";
    const editInputCityText = document.createElement("p");
    editInputCityText.appendChild(document.createTextNode("Edit City"));
    editInputCity.appendChild(editInputCityText);
    const editCity = document.createElement("input");
    editCity.setAttribute("type", "text");
    editCity.setAttribute("placeholder", "New City Name");
    editInputCity.appendChild(editCity);
    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("id", " buttonsContainer");
    editInputCity.appendChild(buttonsContainer);
    const editButton = document.createElement("button");
    editButton.setAttribute("id", "editButton");
    buttonsContainer.appendChild(editButton);
    editButton.setAttribute("type", "button");
    editButton.appendChild(document.createTextNode("Edit"));
    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancelButton");
    buttonsContainer.appendChild(cancelButton);
    cancelButton.setAttribute("type", "button");
    cancelButton.appendChild(document.createTextNode("Close"));
    cancelButton.addEventListener("click", () => {
        blur.removeChild(blurDiv);
        regionCity.style.filter = "none";
    });
    const cityName = element.getAttribute("cityname");
    editButton.addEventListener("click", async (element) => {
        let cityEdit = await axios.put(`http://localhost:3000/city/update/${cityName}`, { "newName": editCity.value }, config);
        location.reload();
    });
    console.log(element.getAttribute("cityname"));
    // console.log(newCity);
}

//countryUpdate:
function editCountry(element) {
    const blurDiv = document.createElement("blurDiv");
    blur.appendChild(blurDiv);
    blurDiv.style.position = "absolute";
    blurDiv.style.width = "100%";
    blurDiv.style.height = "100%";
    blurDiv.style.top = "0";
    regionCity.style.filter = "blur(8px)";
    const editInputCountry = document.createElement("Container");
    blurDiv.appendChild(editInputCountry);
    editInputCountry.style.position = "absolute";
    editInputCountry.style.display = "flex";
    editInputCountry.style.flexDirection = "column";
    editInputCountry.style.alignItems = "center";
    editInputCountry.style.width = "50%";
    editInputCountry.style.margin = " 0 0 0 25%";
    editInputCountry.style.backgroundColor = "rgb(130, 174, 255)";
    editInputCountry.style.height = "15vw";
    editInputCountry.style.top = "25vw";
    editInputCountry.style.border = "1px solid rgb(85, 85, 209)";
    editInputCountry.style.borderRadius = "1.5vw";
    const editInputCountryText = document.createElement("p");
    editInputCountryText.appendChild(document.createTextNode("Edit Country"));
    editInputCountry.appendChild(editInputCountryText);
    const editCountry = document.createElement("input");
    editCountry.setAttribute("type", "text");
    editCountry.setAttribute("placeholder", "New Country Name");
    editInputCountry.appendChild(editCountry);
    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("id", " buttonsContainer");
    editInputCountry.appendChild(buttonsContainer);
    const editButton = document.createElement("button");
    editButton.setAttribute("id", "editButton");
    buttonsContainer.appendChild(editButton);
    editButton.setAttribute("type", "button");
    editButton.appendChild(document.createTextNode("Edit"));
    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancelButton");
    buttonsContainer.appendChild(cancelButton);
    cancelButton.setAttribute("type", "button");
    cancelButton.appendChild(document.createTextNode("Close"));
    cancelButton.addEventListener("click", () => {
        blur.removeChild(blurDiv);
        regionCity.style.filter = "none";
    });
    const countryName = element.getAttribute("countryName");
    console.log(element.getAttribute("countryName"));
    editButton.addEventListener("click", async (element) => {
        let countryEdit = await axios.put(`http://localhost:3000/country/update/${countryName}`, { "newName": editCountry.value }, config);
        location.reload();
    });
}