const companiesList =document.getElementById("companiesList");
const companiesListInfoGrid = document.getElementById("companiesListInfoGrid");

const companies = [
    {name:  "crunchyroll", country: "Mexico", address: "Mexico DF 889"},
    {name:  "disney", country: "Estados Unidos", address: "Orlando 544"},
    {name:  "iClub", country: "Argentina", address: "Villa Allende Plodeportivo"},
    {name:  "toyota", country: "Japon", address: "Tokio 123"}
];


function showCompanies() {
    for (let company of companies) {
        console.log(company.name);
        //div
        const companyDiv= document.createElement("div");
        companyDiv.setAttribute("class", "companyDiv");
        companiesListInfoGrid.appendChild(companyDiv);
        //name
        const companyName = document.createElement("p");
        companyName.setAttribute("class", "companyName");
        companyName.appendChild(document.createTextNode(company.name));
        companyDiv.appendChild(companyName);
        //company
        const companyCountry= document.createElement("p");
        companyCountry.setAttribute("class", "companyCountry");
        companyCountry.appendChild(document.createTextNode(company.country));
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

showCompanies();