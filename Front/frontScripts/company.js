const blur = document.getElementById("blurSection");
const companiesList = document.getElementById("companiesList");
const companiesListInfoGrid = document.getElementById("companiesListInfoGrid");
const token = localStorage.getItem("token");
const config = { headers: { Authorization: `Bearer ${token}` } };
const companySection = document.getElementById("companySection");

const getCompanies = async () => {
  //get companies:
  let companies = await axios.get(
    "http://localhost:3000/company/dashboard",
    config
  );

  //get cities:
  let cities = await axios.get(
    "http://localhost:3000/city/dashboard",
    config
  );


  //get countries:
  let countries = await axios.get(
    "http://localhost:3000/country/dashboard",
    config
  );
  console.log(countries);

  for (let pIndex = 0; pIndex < countries.data.length; pIndex++) {
    countries.data[pIndex].cities = [];
    for (let cIndex = 0; cIndex < cities.data.length; cIndex++) {
      if (countries.data[pIndex].id == cities.data[cIndex].countryId) {
        countries.data[pIndex].cities.push(cities.data[cIndex]);
        cities.data[cIndex].countryName = countries.data[pIndex].countryName;
      }
    }
  }

  console.log(cities);
  for (
    let companyIndex = 0;
    companyIndex < companies.data.length;
    companyIndex++
  ) {
    companies.data[companyIndex].countryName = "";
    for (
      let cityIndex = 0;
      cityIndex < cities.data.length;
      cityIndex++
    ) {
      if (
        companies.data[companyIndex].cityId ==
        cities.data[cityIndex].id
      ) {
        companies.data[companyIndex].cityName =
          cities.data[cityIndex].countryName;
      }
    }
  }

  showCompanies(companies);
};

getCompanies();

function showCompanies(companies) {
  console.log(companies);
  for (let company of companies.data) {
    // console.log(company.name);
    //div
    const companyDiv = document.createElement("div");
    companyDiv.setAttribute("class", "companyDiv");
    companiesListInfoGrid.appendChild(companyDiv);
    //name
    const companyName = document.createElement("p");
    companyName.setAttribute("class", "companyName");
    companyName.appendChild(document.createTextNode(company.companyName));
    companyDiv.appendChild(companyName);
    //company
    const companyCountry = document.createElement("p");
    companyCountry.setAttribute("class", "companyCountry");
    companyCountry.appendChild(document.createTextNode(company.cityName));
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
    companyEditButton.setAttribute("onclick", "editcompany(this)");
    companyEditButton.setAttribute("companyName", company.companyName);
    //deleteButton
    const companyDeleteButton = document.createElement("button");
    companyDeleteButton.setAttribute("class", "companyDeleteButton");
    companyDeleteButton.setAttribute("type", "button");
    companyDeleteButton.setAttribute("onclick", "deleteCompany(this)");
    companyDeleteButton.setAttribute("companyName", company.companyName);
    companyDeleteButton.appendChild(document.createTextNode("X"));
    companyButtonsDiv.appendChild(companyDeleteButton);
  }
}

//add company:
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
  inputCompany.setAttribute("id", "inputCompany");
  inputCompany.style.width = "26.1%";
  //cityName Input:
  const selectCompanyCountry = document.createElement("select");
  selectCompanyCountry.setAttribute("class", "selectCompanyCountry");
  selectCompanyCountry.setAttribute("placeholder", "Select Country");
  inputCompanyContainer.appendChild(selectCompanyCountry);
  selectCompanyCountry.style.width = "27.3%";

  let cities = await axios.get(
    "http://localhost:3000/city/dashboard",
    config
  );
  for (
    let cityIndex = 0;
    cityIndex < cities.data.length;
    cityIndex++
  ) {
    const option = document.createElement(
      "option",
      cities.data[cityIndex].id
    );
    option.setAttribute("value", cities.data[cityIndex].id);
    selectCompanyCountry
      .appendChild(option)
      .appendChild(
        document.createTextNode(cities.data[cityIndex].cityName)
      );
  }
  // console.log(selectCompanyCountry.options[(selectCompanyCountry.selectedIndex)].value);

  //address Input:
  const inputAddress = document.createElement("input");
  inputAddress.setAttribute("type", "text");
  inputAddress.setAttribute("placeholder", "Address Direction");
  inputAddress.setAttribute("id", "inputAddress");
  inputAddress.style.width = "26.1%";
  inputCompanyContainer.appendChild(inputAddress);
  //email Input:
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "text");
  inputEmail.setAttribute("placeholder", "Email");
  inputCompanyContainer.appendChild(inputEmail);
  inputEmail.setAttribute("id", " inputEmail");
  inputEmail.style.width = "26.1%";
  //phone Input:
  const inputPhoneNumber = document.createElement("input");
  inputPhoneNumber.setAttribute("type", "text");
  inputPhoneNumber.setAttribute("placeholder", "Phone Number");
  inputCompanyContainer.appendChild(inputPhoneNumber);
  inputPhoneNumber.setAttribute("id", "inputPhoneNumber");
  inputPhoneNumber.style.width = "26.1%";
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
    let count = await axios.get(
      "http://localhost:3000/city/dashboard",
      config
    );
    console.log(
      selectCompanyCountry.options[selectCompanyCountry.selectedIndex].value
    );
    console.log(inputCompany.value);
    console.log(inputAddress.value);
    let countPost = await axios.post(
      "http://localhost:3000/company/create",
      {
        companyName: inputCompany.value,
        cityId:
          selectCompanyCountry.options[selectCompanyCountry.selectedIndex]
            .value,
        address: inputAddress.value,
        email: inputEmail.value,
        phoneNumber: inputPhoneNumber.value,
      },
      config
    );
    location.reload();
  });
}

//delete company:
function deleteCompany(element) {
  console.log(element);
  const company = element.getAttribute("companyName");
  axios.delete(`http://localhost:3000/company/delete/${company}`, config);
  location.reload();
}

// //edit company:
function editcompany(element) {
  console.log(element);
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
  inputCompanyText.appendChild(document.createTextNode("Edit Company"));
  inputCompanyContainer.appendChild(inputCompanyText);
  //name input:
  const inputCompany = document.createElement("input");
  inputCompany.setAttribute("type", "text");
  inputCompany.setAttribute("placeholder", "Company Name");
  inputCompanyContainer.appendChild(inputCompany);
  //address Input:
  const inputAddress = document.createElement("input");
  inputAddress.setAttribute("type", "text");
  inputAddress.setAttribute("placeholder", "Address Direction");
  inputCompanyContainer.appendChild(inputAddress);
  //email Input:
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "text");
  inputEmail.setAttribute("placeholder", "Email");
  inputCompanyContainer.appendChild(inputEmail);
  //phone Input:
  const inputPhoneNumber = document.createElement("input");
  inputPhoneNumber.setAttribute("type", "text");
  inputPhoneNumber.setAttribute("placeholder", "Phone Number");
  inputCompanyContainer.appendChild(inputPhoneNumber);
  //modal Buttons:
  const buttonsContainer = document.createElement("div");
  buttonsContainer.setAttribute("id", " buttonsContainer");
  inputCompanyContainer.appendChild(buttonsContainer);
  const createButton = document.createElement("button");
  createButton.setAttribute("id", "createButton");
  buttonsContainer.appendChild(createButton);
  createButton.setAttribute("type", "button");
  createButton.appendChild(document.createTextNode("Edit"));
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
    const companyName = element.getAttribute("companyName");
    let countPost = await axios.put(
      `http://localhost:3000/company/update/${companyName}`,
      {
        newName: inputCompany.value,
        address: inputAddress.value,
        email: inputEmail.value,
        phoneNumber: inputPhoneNumber.value,
      },
      config
    );
    location.reload();
    //agregar que se borren todos los contactos que trabajen en esa empresa
  });
}
