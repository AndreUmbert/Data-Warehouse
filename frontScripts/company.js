const blur = document.getElementById("blurSection");
const companiesList = document.getElementById("companiesList");
const companiesListInfoGrid = document.getElementById("companiesListInfoGrid");
const token = localStorage.getItem("token");
const config = { headers: { Authorization: `Bearer ${token}` } };
const companySection = document.getElementById("companySection");


//get companies:
const getCompanies = async () => {
    let companies = await axios.get(
        "http://localhost:3000/company/dashboard",
        config
    );


    //get companyCountry:
    let countries = await axios.get(
        "http://localhost:3000/country/dashboard",
        config
    );

    for (let companyIndex = 0; companyIndex < companies.data.length; companyIndex++) {
        companies.data[companyIndex].countryName = "";
        for (let countryIndex = 0; countryIndex < countries.data.length; countryIndex++) {
            if (companies.data[companyIndex].countryId == countries.data[countryIndex].id) {
                companies.data[companyIndex].countryName = countries.data[countryIndex].name;
            }
        }
    }

    showCompanies(companies);
}

getCompanies();

function showCompanies(companies) {
    for (let company of companies.data) {
        // console.log(company.name);
        //div
        const companyDiv = document.createElement("div");
        companyDiv.setAttribute("class", "companyDiv");
        companiesListInfoGrid.appendChild(companyDiv);
        //name
        const companyName = document.createElement("p");
        companyName.setAttribute("class", "companyName");
        companyName.appendChild(document.createTextNode(company.name));
        companyDiv.appendChild(companyName);
        //company
        const companyCountry = document.createElement("p");
        companyCountry.setAttribute("class", "companyCountry");
        companyCountry.appendChild(document.createTextNode(company.countryName));
        companyDiv.appendChild(companyCountry);
        //address
        const companyAddress = document.createElement("p");
        companyAddress.setAttribute("class", "companyAddress");
        companyAddress.appendChild(document.createTextNode(company.address));
        companyDiv.appendChild(companyAddress);
        //buttonsDiv
        const companyButtonsDiv = document.createElement("div");
        companyButtonsDiv.setAttribute("class", "companyButtonsDiv");
        companyDiv.appendChild(companyButtonsDiv);
        //editButton
        const companyEditButton = document.createElement("button");
        companyEditButton.setAttribute("class", "companyEditButton");
        companyEditButton.setAttribute("type", "button");
        companyEditButton.appendChild(document.createTextNode("Edit"));
        companyButtonsDiv.appendChild(companyEditButton);
        //deleteButton
        const companyDeleteButton = document.createElement("button");
        companyDeleteButton.setAttribute("class", "companyDeleteButton");
        companyDeleteButton.setAttribute("type", "button");
        companyDeleteButton.appendChild(document.createTextNode("X"));
        companyButtonsDiv.appendChild(companyDeleteButton);
    }
}

//add companie:
async function createCompany(element) {
    // console.log(element);
    const blurDiv = document.createElement("blurDiv");
    blur.appendChild(blurDiv);
    blurDiv.style.position = "absolute";
    blurDiv.style.width = "100%";
    blurDiv.style.height = "100%";
    blurDiv.style.top = "0";
    companySection.style.filter = "blur(8px)";
    //createContainer:
    const inputCompanyContainer = document.createElement("Container");
    blurDiv.appendChild(inputCompanyContainer);
    inputCompanyContainer.style.position = "absolute";
    inputCompanyContainer.style.display = "flex";
    inputCompanyContainer.style.flexDirection = "column";
    inputCompanyContainer.style.alignItems = "center";
    inputCompanyContainer.style.width = "50%";
    inputCompanyContainer.style.margin = " 0 0 0 25%";
    inputCompanyContainer.style.backgroundColor = "rgb(130, 174, 255)";
    inputCompanyContainer.style.height = "15vw";
    inputCompanyContainer.style.top = "25vw";
    inputCompanyContainer.style.border = "1px solid rgb(85, 85, 209)";
    inputCompanyContainer.style.borderRadius = "1.5vw";
    const inputCompanyText = document.createElement("p");
    inputCompanyText.appendChild(document.createTextNode("Create Company"));
    inputCompanyContainer.appendChild(inputCompanyText);
    //name input:
    const inputCompany = document.createElement("input");
    inputCompany.setAttribute("type", "text");
    inputCompany.setAttribute("placeholder", "Company Name");
    inputCompanyContainer.appendChild(inputCompany);
    //countryName Input:
    const selectCompanyCountry = document.createElement("select");
    selectCompanyCountry.setAttribute("class", "selectCompanyCountry");
    selectCompanyCountry.setAttribute("placeholder", "Select Country");
    inputCompanyContainer.appendChild(selectCompanyCountry);
    selectCompanyCountry.style.width = "27.3%";

    let countries = await axios.get(
        "http://localhost:3000/country/dashboard",
        config
    );
    for (let countryIndex = 0; countryIndex < countries.data.length; countryIndex++) {
        const option = document.createElement("option", countries.data[countryIndex].id);
        option.setAttribute("value", countries.data[countryIndex].id);
        selectCompanyCountry.appendChild(option).appendChild(document.createTextNode(countries.data[countryIndex].name));

    }
    // console.log(selectCompanyCountry.options[(selectCompanyCountry.selectedIndex)].value);

    //address Input:
    const inputAddress = document.createElement("input");
    inputAddress.setAttribute("type", "text");
    inputAddress.setAttribute("placeholder", "Address Direction");
    inputCompanyContainer.appendChild(inputAddress);
    //modal Buttons:
    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("id", " buttonsContainer");
    inputCompanyContainer.appendChild(buttonsContainer);
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
        companySection.style.filter = "none";
    });
    //arreglar que se agregue por nombre y no por indice, ya que se rompe
    createButton.addEventListener("click", async () => {
        let count = await axios.get("http://localhost:3000/country/dashboard", config);
        console.log(selectCompanyCountry.options[(selectCompanyCountry.selectedIndex)].value);
        // let countPost = await axios.post("http://localhost:3000/company/create", { "name": inputCompany.value, "countryId": selectCompanyCountry.options[(selectCompanyCountry.selectedIndex)].value, "address": inputAddress.value }, config);
        // location.reload();
    });
}
