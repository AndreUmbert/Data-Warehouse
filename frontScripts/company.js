const companiesList = document.getElementById("companiesList");
const companiesListInfoGrid = document.getElementById("companiesListInfoGrid");
const token = localStorage.getItem("token");
const config = { headers: { Authorization: `Bearer ${token}` } };


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

function showCompanies(companies,) {
    for (let company of companies.data) {
        console.log(company.name);
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
