const id = window.localStorage.getItem("id");
const token = localStorage.getItem("token");
const config = { headers: { Authorization: `Bearer ${token}` } };
const contactDashboardDynamic = document.getElementById(
  "contactDashboardDynamic"
);
const addContact = document.getElementById("addContact");
const blurSection = document.getElementById("blurSection");
const contactSection = document.getElementById("contactSection");
const contactsDashboardContactsOrderImg = document.getElementById(
  "contactsDashboardContactsOrderImg"
);
const contactsDashboardCountryRegionOrderImg = document.getElementById(
  "contactsDashboardCountryRegionOrderImg"
);
const contactsDashboardCompanyOrderImg = document.getElementById(
  "contactsDashboardCompanyOrderImg"
);
const contactsDashboardPositionsOrderImg = document.getElementById(
  "contactsDashboardPositionsOrderImg"
);
const contactsDashboardInterestsOrderImg = document.getElementById(
  "contactsDashboardInterestsOrderImg"
);
const contactsSearchBarTextInput = document.getElementById(
  "contactsSearchBarTextInput"
);
const contatsSearchBarResults = document.getElementById("contatsSearchBarResults");
const contactsSearchBarArrowIcon = document.getElementById("contactsSearchBarArrowIcon");

const contactsFullData = [];

//==========================================================
// CONTACT GET:
//==========================================================

const getContacts = async () => {
  // console.log(contactsFullData);
  //get contacts:
  let contacts = await axios.get(
    "http://localhost:3000/contact/dashboard",
    config
  );
  // console.log(contacts.data);

  let regions = await axios.get(
    "http://localhost:3000/region/dashboard",
    config
  );

  let companies = await axios.get(
    "http://localhost:3000/company/dashboard",
    config
  );

  let cities = await axios.get("http://localhost:3000/city/dashboard", config);

  let countries = await axios.get(
    "http://localhost:3000/country/dashboard",
    config
  );

  let users = await axios.get("http://localhost:3000/user/dashboard", config);

  for (
    let contactIndex = 0;
    contactIndex < contacts.data.length;
    contactIndex++
  ) {
    for (
      let companyIndex = 0;
      companyIndex < companies.data.length;
      companyIndex++
    ) {
      if (
        contacts.data[contactIndex].companyId == companies.data[companyIndex].id
      ) {
        contacts.data[contactIndex].companyName =
          companies.data[companyIndex].companyName;
      }
    }
  }

  for (
    let contactIndex = 0;
    contactIndex < contacts.data.length;
    contactIndex++
  ) {
    if (contacts.data[contactIndex].usertableId == id) {
      contactsFullData.push(contacts.data[contactIndex]);
    }
  }

  showContacts(contacts.data);
};

getContacts();

function showContacts(contacts) {
  // console.log(contacts);
  for (let contact of contactsFullData) {
    // console.log(contact);
    // create contactDiv
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contactDiv");
    contactDashboardDynamic.appendChild(contactDiv);
    //createCheckBox:
    const contactCheckBoxDiv = document.createElement("div");
    contactCheckBoxDiv.setAttribute("class", "contactCheckBoxDiv");
    contactDiv.appendChild(contactCheckBoxDiv);
    const contactCheckBox = document.createElement("input");
    contactCheckBox.setAttribute("type", "checkbox");
    contactCheckBox.setAttribute("class", " contactCheckBox");
    contactCheckBoxDiv.appendChild(contactCheckBox);
    //contactPersonalInfo:
    const contactPersonalInfo = document.createElement("div");
    contactPersonalInfo.setAttribute("class", "contactPersonalInfo");
    contactDiv.appendChild(contactPersonalInfo);
    //contactImg:
    // const contactImg = document.createElement("img");
    // contactImg.setAttribute("src", contact.image);
    // contactImg.setAttribute("class", "contactImg");
    // contactPersonalInfo.appendChild(contactImg);
    // contactNamePlusEmail:
    const contactNamePlusEmail = document.createElement("div");
    contactNamePlusEmail.setAttribute("class", "contactNamePlusEmail");
    contactPersonalInfo.appendChild(contactNamePlusEmail);
    // contactName:
    const contactName = document.createElement("p");
    contactName.setAttribute("class", "contactName");
    contactName.appendChild(
      document.createTextNode(contact.contactName + " " + contact.lastname)
    );
    contactNamePlusEmail.appendChild(contactName);
    // ContactEmail:
    const contactEmail = document.createElement("p");
    contactEmail.setAttribute("class", "contactEmail");
    contactEmail.appendChild(document.createTextNode(contact.email));
    contactNamePlusEmail.appendChild(contactEmail);
    //ContactCountryPlusRegion:
    const contactCountryPlusRegion = document.createElement(
      "ccontactCountryPlusRegion"
    );
    contactCountryPlusRegion.setAttribute("class", "contactCountryPlusRegion");
    contactDiv.appendChild(contactCountryPlusRegion);
    //contactCountry:
    const contactCountry = document.createElement("p");
    contactCountry.setAttribute("class", "contactCountry");
    contactCountryPlusRegion.appendChild(contactCountry);
    contactCountry.appendChild(document.createTextNode(contact.countryName));
    //contactRegion:
    const contactRegion = document.createElement("p");
    contactRegion.setAttribute("class", "contactRegion");
    contactCountryPlusRegion.appendChild(contactRegion);
    contactRegion.appendChild(document.createTextNode(contact.regionName));
    //contactCompany:
    const contactCompany = document.createElement("p");
    contactCompany.setAttribute("class", "contactCompany");
    contactDiv.appendChild(contactCompany);
    contactCompany.appendChild(document.createTextNode(contact.companyName));
    //contactPosition:
    const contactPosition = document.createElement("p");
    contactPosition.setAttribute("class", "contactPosition");
    contactDiv.appendChild(contactPosition);
    contactPosition.appendChild(document.createTextNode(contact.position));
    //-------------------------------------------------------------
    //contactPreferedChannel:
    //-------------------------------------------------------------
    // const contactPreferedChannelContainer = document.createElement("div");
    // contactPreferedChannelContainer.setAttribute("class", "contactPreferedChannelContainer");
    // contactDiv.appendChild(contactPreferedChannelContainer);
    // if (contact.channels.length > 2) {
    //     //Agregar boton ... en el caso de que el usuario tenga mas de 2 canales preferidos de contatos y que al apretar agrande el div y los muestre.
    //     //div
    //     let channel1 = document.createElement("div")
    //     channel1.setAttribute("attribute", "channel1");
    //     contactPreferedChannelContainer.appendChild(channel1);
    //     channel1.setAttribute("class", "contactPreferedChannelDiv");
    //     //p
    //     let channel1Text = document.createElement("p");
    //     channel1.appendChild(channel1Text);
    //     channel1Text.setAttribute("attribute", "channel1Text");
    //     channel1Text.setAttribute("class", "contactPrefreredChannelText");
    //     channel1Text.appendChild(document.createTextNode(contact.channels[0]));
    //     //div
    //     let channel2 = document.createElement("div")
    //     channel2.setAttribute("attribute", "channel2");
    //     contactPreferedChannelContainer.appendChild(channel2);
    //     channel2.setAttribute("class", "contactPreferedChannelDiv");
    //     //p
    //     let channel2Text = document.createElement("p");
    //     channel2.appendChild(channel2Text);
    //     channel2Text.setAttribute("attribute", "channel2Text");
    //     channel2Text.setAttribute("class", "contactPrefreredChannelText");
    //     channel2Text.appendChild(document.createTextNode(contact.channels[1]));
    //     //button
    //     const channelsButton = document.createElement("button");
    //     channelsButton.appendChild(document.createTextNode("..."));
    //     contactPreferedChannelContainer.appendChild(channelsButton);
    //     channelsButton.addEventListener("click", (channelsButtonEvent) => {
    //         currentContactDiv = contactDiv;
    //         currentContactDiv.style.height = "auto";
    //         channel1.style.display = "none";
    //         channel2.style.display = "none";
    //         channelsButton.style.display = "none";
    //         contactPreferedChannelContainer.style.margin = "1vw 0.5vw"
    //         contactPreferedChannelContainer.style.flexWrap = "wrap";
    //         contactImg.style.display = "none";
    //         contact.channels.forEach(channel => {
    //             //father
    //             contactPreferedChannelContainer.setAttribute("class", `contactPreferedChannelContainer current`);
    //             //children
    //             const contactPreferedChannelDiv = document.createElement("div");
    //             contactPreferedChannelDiv.setAttribute("class", `contactPreferedChannelDiv created ${contact.name}`);
    //             contactPreferedChannelContainer.appendChild(contactPreferedChannelDiv);
    //             //text
    //             const contactPrefreredChannelText = document.createElement("p");
    //             contactPrefreredChannelText.setAttribute("class", "contactPrefreredChannelText");
    //             contactPreferedChannelDiv.appendChild(contactPrefreredChannelText);
    //             contactPrefreredChannelText.appendChild(document.createTextNode(channel));
    //             contactPreferedChannelDiv.style.margin = "0.5vw";
    //         });

    //         const revertButton = document.createElement("button");
    //         revertButton.setAttribute("class", "revertButton");
    //         revertButton.setAttribute("id", `${contact.name}`)
    //         revertButton.appendChild(document.createTextNode("<<<"));
    //         revertButton.setAttribute("onclick", "deleteChildren(this)");
    //         revertButton.addEventListener('click', () => {
    //             console.log(channel1);
    //             channel1.style.display = "flex";
    //             channel2.style.display = "flex";
    //             channelsButton.style.display = "flex";
    //             revertButton.remove();
    //             contactImg.style.display = "block";
    //             contactDiv.style.height = "6vw";
    //         })
    //         contactPreferedChannelContainer.appendChild(revertButton);
    //     })

    // } else {
    //     contact.channels.forEach(channel => {
    //         // console.log(channel);
    //         const contactPreferedChannelDiv = document.createElement("div");
    //         contactPreferedChannelDiv.setAttribute("class", "contactPreferedChannelDiv");
    //         contactPreferedChannelContainer.appendChild(contactPreferedChannelDiv);
    //         const contactPrefreredChannelText = document.createElement("p");
    //         contactPrefreredChannelText.setAttribute("class", "contactPrefreredChannelText");
    //         contactPreferedChannelDiv.appendChild(contactPrefreredChannelText);
    //         contactPrefreredChannelText.appendChild(document.createTextNode(channel));
    //     });
    // }
    //contactInterest:
    //contactInterestContainer:
    const contactInterestConteiner = document.createElement("div");
    contactInterestConteiner.setAttribute("class", "contactInterestConteiner");
    contactDiv.appendChild(contactInterestConteiner);
    //contactInterestNumber:
    const contactInterestNumber = document.createElement("p");
    contactInterestNumber.setAttribute("class", "contactInterestNumber");
    contactInterestNumber.appendChild(
      document.createTextNode(contact.interest.toString() + "%")
    );
    contactInterestConteiner.appendChild(contactInterestNumber);
    //contactInterestBar:
    const contactInterestBar = document.createElement("div");
    contactInterestBar.setAttribute("class", "contactInterestBar");
    contactInterestConteiner.appendChild(contactInterestBar);
    const contactInterestColoredBar = document.createElement("div");
    contactInterestColoredBar.setAttribute(
      "class",
      "contactInterestColoredBar"
    );
    if (contact.interest == 0) {
      contactInterestColoredBar.style.width = "0%";
      contactInterestColoredBar.style.background = "none";
    }
    if (contact.interest == 25) {
      contactInterestColoredBar.style.width = "25%";
      contactInterestColoredBar.style.background = "blue";
    }
    if (contact.interest == 50) {
      contactInterestColoredBar.style.width = "50%";
      contactInterestColoredBar.style.background = "yellow";
    }
    if (contact.interest == 75) {
      contactInterestColoredBar.style.width = "75%";
      contactInterestColoredBar.style.background = "orange";
    }
    if (contact.interest == 100) {
      contactInterestColoredBar.style.width = "100%";
      contactInterestColoredBar.style.background = "red";
    }
    contactInterestBar.appendChild(contactInterestColoredBar);
    //contactAccionsButtonContainer:
    const contactAccionsButtonContainer = document.createElement("div");
    contactAccionsButtonContainer.setAttribute(
      "class",
      "contactAccionsButtonContainer"
    );
    contactDiv.appendChild(contactAccionsButtonContainer);
    //contactAccionsButtonDiv:
    const contactAccionsButtonDiv = document.createElement("div");
    contactAccionsButtonDiv.setAttribute("class", "contactAccionsButtonDiv");
    contactAccionsButtonContainer.appendChild(contactAccionsButtonDiv);
    //contactAccionsButtonText:
    const contactAccionsButtonText = document.createElement("p");
    contactAccionsButtonText.setAttribute("class", "contactAccionsButtonText");
    contactAccionsButtonText.appendChild(document.createTextNode("..."));
    contactAccionsButtonDiv.appendChild(contactAccionsButtonText);
  }
}

function deleteChildren(element) {
  console.log(element);
  const currentContainer = document.getElementsByClassName(element.id);
  for (var i = 0; i <= currentContainer.length; i++) {
    i = 0;
    currentContainer[i].remove();
  }
}
//===================================================================
//  SORTS:
//===================================================================
contactsDashboardContactsOrderImg.addEventListener("click", () => {
  contactsFullData.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

contactsDashboardContactsOrderImg.addEventListener("dblclick", () => {
  contactsFullData.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  contactsFullData.reverse();
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

contactsDashboardCountryRegionOrderImg.addEventListener("click", () => {
  contactsFullData.sort((a, b) => {
    return a.country > b.country ? 1 : -1;
  });
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

contactsDashboardCountryRegionOrderImg.addEventListener("dblclick", () => {
  contactsFullData.sort((a, b) => {
    return a.country > b.country ? 1 : -1;
  });
  contactsFullData.reverse();
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

contactsDashboardCompanyOrderImg.addEventListener("click", () => {
  contactsFullData.sort((a, b) => {
    return a.company > b.company ? 1 : -1;
  });
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

contactsDashboardCompanyOrderImg.addEventListener("dblclick", () => {
  contactsFullData.sort((a, b) => {
    return a.company > b.company ? 1 : -1;
  });
  contactsFullData.reverse();
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

contactsDashboardPositionsOrderImg.addEventListener("click", () => {
  contactsFullData.sort((a, b) => {
    return a.position > b.position ? 1 : -1;
  });
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

contactsDashboardPositionsOrderImg.addEventListener("dblclick", () => {
  contactsFullData.sort((a, b) => {
    return a.position > b.position ? 1 : -1;
  });
  contactsFullData.reverse();
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

contactsDashboardInterestsOrderImg.addEventListener("click", () => {
  contactsFullData.sort((a, b) => {
    return a.interest > b.interest ? 1 : -1;
  });
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

contactsDashboardInterestsOrderImg.addEventListener("dblclick", () => {
  contactsFullData.sort((a, b) => {
    return a.interest > b.interest ? 1 : -1;
  });
  contactsFullData.reverse();
  console.log(contactsFullData);
  contactDashboardDynamic.innerHTML = "";
  showContacts();
});

//===================================================================
//  SEARCH BAR:
//===================================================================

contactsSearchBarArrowIcon.setAttribute("boolean", "false");

//FIND WORDS AND SHOW EVENT:

contactsSearchBarTextInput.addEventListener("input", async (e) => {

  contatsSearchBarResults.innerHTML = "";

  //search bar value.
  let value = e.target.value;

  //get data from DB whit axios:
  let contacts = await axios.get(
    "http://localhost:3000/contact/dashboard",
    config
  );

  let regions = await axios.get(
    "http://localhost:3000/region/dashboard",
    config
  );

  let companies = await axios.get(
    "http://localhost:3000/company/dashboard",
    config
  );

  let cities = await axios.get("http://localhost:3000/city/dashboard", config);

  let countries = await axios.get(
    "http://localhost:3000/country/dashboard",
    config
  );

  //Empty arrays, i need to put in these the results of the search:
  let searchContact = [];
  let searchCompany = [];
  let searchCountry = [];
  let searchCity = [];
  let searchRegion = [];


  //PRINT INFO IN DIV CONTAINER:

  for (let index = 0; index < contacts.data.length; index++) {
    const fullName =
      contacts.data[index].contactName + " " + contacts.data[index].lastname;

    const reverseFullname =
      contacts.data[index].lastname + " " + contacts.data[index].contactName;

    if (fullName.includes(value) || reverseFullname.includes(value)) {
      searchContact.push(
        fullName
      );
      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contatsSearchBarResults.appendChild(resultDiv);

      //le pongo el titulo:
      const liTitle = document.createElement("p");
      liTitle.setAttribute("class", "liTitle");
      liTitle.appendChild(document.createTextNode("Nombre"));
      resultDiv.appendChild(liTitle);

      //separador:
      const midLine = document.createElement("p");
      midLine.setAttribute("class", "midLine");
      midLine.appendChild(document.createTextNode("-"));
      resultDiv.appendChild(midLine);

      //Le agrego el valor
      const liValue = document.createElement("li");
      liValue.setAttribute("class", "liValue");
      liValue.appendChild(document.createTextNode(fullName));
      resultDiv.appendChild(liValue);
    }

  }

  for (let index = 0; index < countries.data.length; index++) {
    const countryNameLi = countries.data[index].countryName;
    if (countryNameLi.includes(value)) {
      searchCountry.push(countryNameLi);
      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contatsSearchBarResults.appendChild(resultDiv);

      //le pongo el titulo:
      const liTitle = document.createElement("p");
      liTitle.setAttribute("class", "liTitle");
      liTitle.appendChild(document.createTextNode("País "));
      resultDiv.appendChild(liTitle);

      //separador:
      const midLine = document.createElement("p");
      midLine.setAttribute("class", "midLine");
      midLine.appendChild(document.createTextNode("-"));
      resultDiv.appendChild(midLine);

      //Le agrego el valor
      const liValue = document.createElement("li");
      liValue.setAttribute("class", "liValue");
      liValue.appendChild(document.createTextNode(countryNameLi));
      resultDiv.appendChild(liValue);
    }
  }

  for (let index = 0; index < companies.data.length; index++) {
    const companyNameLi = companies.data[index].companyName;
    if (companyNameLi.includes(value)) {
      searchCompany.push(companyNameLi);
      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contatsSearchBarResults.appendChild(resultDiv);

      //le pongo el titulo:
      const liTitle = document.createElement("p");
      liTitle.setAttribute("class", "liTitle");
      liTitle.appendChild(document.createTextNode("Compañia "));
      resultDiv.appendChild(liTitle);

      //separador:
      const midLine = document.createElement("p");
      midLine.setAttribute("class", "midLine");
      midLine.appendChild(document.createTextNode("-"));
      resultDiv.appendChild(midLine);

      //Le agrego el valor
      const liValue = document.createElement("li");
      liValue.setAttribute("class", "liValue");
      liValue.appendChild(document.createTextNode(companyNameLi));
      resultDiv.appendChild(liValue);
    }
  }

  for (let index = 0; index < cities.data.length; index++) {
    const cityNameLi = cities.data[index].cityName;
    if (cityNameLi.includes(value)) {
      searchCity.push(cityNameLi);

      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contatsSearchBarResults.appendChild(resultDiv);

      //le pongo el titulo:
      const liTitle = document.createElement("p");
      liTitle.setAttribute("class", "liTitle");
      liTitle.appendChild(document.createTextNode("Ciudad "));
      resultDiv.appendChild(liTitle);

      //separador:
      const midLine = document.createElement("p");
      midLine.setAttribute("class", "midLine");
      midLine.appendChild(document.createTextNode("-"));
      resultDiv.appendChild(midLine);

      //Le agrego el valor
      const liValue = document.createElement("li");
      liValue.setAttribute("class", "liValue");
      liValue.appendChild(document.createTextNode(cityNameLi));
      resultDiv.appendChild(liValue);
    }
  }

  for (let index = 0; index < regions.data.length; index++) {
    const regionNameLi = regions.data[index].regionName;
    if (regionNameLi.includes(value)) {
      searchRegion.push(regionNameLi);

      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contatsSearchBarResults.appendChild(resultDiv);

      //le pongo el titulo:
      const liTitle = document.createElement("p");
      liTitle.setAttribute("class", "liTitle");
      liTitle.appendChild(document.createTextNode("Region "));
      resultDiv.appendChild(liTitle);

      //separador:
      const midLine = document.createElement("p");
      midLine.setAttribute("class", "midLine");
      midLine.appendChild(document.createTextNode("-"));
      resultDiv.appendChild(midLine);

      //Le agrego el valor
      const liValue = document.createElement("li");
      liValue.setAttribute("class", "liValue");
      liValue.appendChild(document.createTextNode(regionNameLi));
      resultDiv.appendChild(liValue);
    }
  }



  if (searchContact.length + searchCompany.length + searchCountry.length + searchCity.length + searchRegion.length != 0 && value != "") {
    contatsSearchBarResults.style.display = "block";
    contactsSearchBarArrowIcon.setAttribute("boolean", "true")
  } else {
    contatsSearchBarResults.style.display = "none";
    contactsSearchBarArrowIcon.setAttribute("boolean", "false")
  }

});

//SHOW HIDE EVENT:

contactsSearchBarArrowIcon.addEventListener("click", () => {
  const boolean = contactsSearchBarArrowIcon.getAttribute("boolean");
  console.log(boolean);
  if (contactsSearchBarTextInput.value) {
    if (boolean == "true") {
      contatsSearchBarResults.style.display = "none";
      contactsSearchBarArrowIcon.setAttribute("boolean", "false");
    } else {
      contatsSearchBarResults.style.display = "block";
      contactsSearchBarArrowIcon.setAttribute("boolean", "true");
    }
  }
})