const id = window.localStorage.getItem("id");
const token = localStorage.getItem("token");
const config = { headers: { Authorization: `Bearer ${token}` } };
console.log(config);
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
const contactsSearchBarResults = document.getElementById(
  "contactsSearchBarResults"
);
const contactsSearchBarArrowIcon = document.getElementById(
  "contactsSearchBarArrowIcon"
);
const contactsDashboard = document.getElementById("contactsDashboard");
const contactDashboardContainer = document.getElementById(
  "contactDashboardContainer"
);
const counterCheckboxes = document.getElementById("counterCheckboxes");
const counterCheckboxesText = document.getElementById("counterCheckboxesText");
const exportContactDownDivs = document.getElementById("exportContactDownDivs");
const deleteSelectedContacts = document.getElementById(
  "deleteSelectedContacts"
);
const exportContactDownArrow = document.getElementById(
  "exportContactDownArrow"
);
// import { updatePrimaryData, updateSecondaryData, updateChannel, updateContactFunction } from "./updateContact.js";
const contactsFullData = [];

let checkBoxChecked = [];

//==========================================================
// CONTACT GET:
//==========================================================

const getContacts = async () => {
  // console.log(contactsFullData);
  //get contacts:
  let contacts = await axios.get(
    `http://localhost:3000/contact/dashbord/${id}`,
    config
  );
  console.log(contacts.data);

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
    contactDiv.setAttribute("contactId", contact.id);
    //createCheckBox:
    const contactCheckBoxDiv = document.createElement("div");
    contactCheckBoxDiv.setAttribute("class", "contactCheckBoxDiv");
    contactDiv.appendChild(contactCheckBoxDiv);
    const contactCheckBox = document.createElement("input");
    contactCheckBox.setAttribute("type", "checkbox");
    contactCheckBox.setAttribute("class", "contactCheckBox");
    contactCheckBox.setAttribute("check", "notChecked");
    contactCheckBox.setAttribute("key", contact.id);
    contactCheckBoxDiv.appendChild(contactCheckBox);
    contactCheckBox.style.cursor = "pointer";
    //checkBox Event:
    contactCheckBox.addEventListener("click", () => {
      const check = contactCheckBox.getAttribute("check");
      if (check === "notChecked") {
        contactCheckBox.setAttribute("check", "checked");
        // console.log("checked");
        contactDiv.style.backgroundColor = "rgb(229 242 255)";
        console.log(contactCheckBox);
        checkBoxChecked.push(contactCheckBox.attributes.key.nodeValue);
        if (checkBoxChecked.length >= 2) {
          //Create things
          //create counter checkboxes checked
          counterCheckboxes.setAttribute("value", checkBoxChecked.length);
          console.log(checkBoxChecked.length);
          counterCheckboxesText.innerHTML =
            checkBoxChecked.length + " " + "Seleccionados";
          contactDashboardContainer.appendChild(counterCheckboxes);
          counterCheckboxes.style.display = "flex";
          exportContactDownDivs.style.display = "block";
          deleteSelectedContacts.style.display = "flex";
          exportContactDownArrow.style.transform = "rotate(180deg)";
          exportContactDownArrow.setAttribute("toggle", "on");
          document.getElementById(
            "contactsDashboardTitleCheckBox"
          ).checked = true;
          document.getElementById(
            "contactsDashboardTitleCheckBox"
          ).style.opacity = "0.5";
        }
      } else {
        contactCheckBox.setAttribute("check", "notChecked");
        // console.log("notChecked");
        contactDiv.style.backgroundColor = "white";
        checkBoxChecked.pop(contactCheckBox.attributes.key.nodeValue);
        if (checkBoxChecked.length >= 2) {
          //Create things
          //create counter checkboxes checked
          counterCheckboxes.setAttribute("value", checkBoxChecked.length);
          counterCheckboxesText.innerHTML =
            checkBoxChecked.length + " " + "Seleccionados";
          contactDashboardContainer.appendChild(counterCheckboxes);
        } else if (checkBoxChecked.length < 2) {
          counterCheckboxes.style.display = "none";
          exportContactDownDivs.style.display = "none";
          deleteSelectedContacts.style.display = "none";
          exportContactDownArrow.style.transform = "rotate(0deg)";
          exportContactDownArrow.setAttribute("toggle", "off");
          document.getElementById(
            "contactsDashboardTitleCheckBox"
          ).checked = false;
          document.getElementById(
            "contactsDashboardTitleCheckBox"
          ).style.opacity = "1";
        }
      }
      console.log(checkBoxChecked);
    });
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
    //     //Agregar boton ... en el caso de que el usuario tenga mas de 2 canales preferidos de contactos y que al apretar agrande el div y los muestre.
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
    contactAccionsButtonDiv.style.cursor = "pointer";
    //contactAccionsButtonText:
    const contactAccionsButtonText = document.createElement("p");
    contactAccionsButtonText.setAttribute("class", "contactAccionsButtonText");
    contactAccionsButtonText.appendChild(document.createTextNode("..."));
    contactAccionsButtonDiv.appendChild(contactAccionsButtonText);
    //contactAccionsButtonDiv EVENT:
    contactAccionsButtonDiv.addEventListener("click", () => {
      contactAccionsButtonDiv.innerHTML = "";
      // =============
      //delete
      // =============
      const deleteAction = document.createElement("div");
      deleteAction.setAttribute("class", "deleteAction");
      deleteAction.setAttribute("key", contact.id);
      const deleteActionText = document.createElement("p");
      deleteActionText.setAttribute("class", "deleteAction");
      deleteActionText.appendChild(document.createTextNode("Eliminar"));
      deleteAction.appendChild(deleteActionText);
      contactAccionsButtonDiv.appendChild(deleteAction);
      deleteAction.addEventListener("click", () => {
        contactSection.style.filter = "blur(50px)";
        const confirmDelete = document.createElement("div");
        confirmDelete.setAttribute("class", "confirmDelete");
        blurSection.appendChild(confirmDelete);
        const confirmDeleteText = document.createElement("p");
        confirmDeleteText.setAttribute("class", "confirmDeleteText");
        confirmDeleteText.appendChild(
          document.createTextNode("¿Desea eliminar el contacto seleccionado?")
        );
        confirmDelete.appendChild(confirmDeleteText);
        const confirmDeleteButtons = document.createElement("div");
        confirmDeleteButtons.setAttribute("class", "confirmDeleteButtons");
        confirmDelete.appendChild(confirmDeleteButtons);
        const agreeDelete = createElement("button");
        agreeDelete.setAttribute("class", "agreeDelete");
        agreeDelete.appendChild(document.createTextNode("Aceptar"));
        confirmDeleteButtons.appendChild(agreeDelete);
        const declineDelete = createElement("button");
        declineDelete.setAttribute("class", "declineDelete");
        declineDelete.appendChild(document.createTextNode("Aceptar"));
        confirmDeleteButtons.appendChild(declineDelete);
        // axios.delete(
        //   `http://localhost:3000/contact/delete/${contact.id}`,
        //   config
        // );
        // location.reload();
      });
      // =============
      //update
      // =============
      const updateAction = document.createElement("div");
      updateAction.setAttribute("contactId", contact.id);
      updateAction.setAttribute("class", "updateAction");
      updateAction.setAttribute("key", contact.id);
      const updateActionText = document.createElement("p");
      updateActionText.setAttribute("class", "updateAction");
      updateActionText.appendChild(document.createTextNode("Actualizar"));
      updateAction.appendChild(updateActionText);
      contactAccionsButtonDiv.appendChild(updateAction);
      updateAction.addEventListener("click", () => {
        updateContactFunction(updateAction.getAttribute("contactId"));
      });
    });
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
  contactsSearchBarResults.innerHTML = "";

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
      searchContact.push(fullName);
      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contactsSearchBarResults.appendChild(resultDiv);

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

      //click function
      resultDiv.addEventListener("click", () => {
        getBySearchClick(fullName);
      });
    }
  }

  for (let index = 0; index < countries.data.length; index++) {
    const countryNameLi = countries.data[index].countryName;
    if (countryNameLi.includes(value)) {
      searchCountry.push(countryNameLi);
      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contactsSearchBarResults.appendChild(resultDiv);

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

      //click function
      resultDiv.addEventListener("click", () => {
        getBySearchClick(countryNameLi);
      });
    }
  }

  for (let index = 0; index < companies.data.length; index++) {
    const companyNameLi = companies.data[index].companyName;
    if (companyNameLi.includes(value)) {
      searchCompany.push(companyNameLi);
      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contactsSearchBarResults.appendChild(resultDiv);

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

      //click function
      resultDiv.addEventListener("click", () => {
        getBySearchClick(companyNameLi);
      });
    }
  }

  for (let index = 0; index < cities.data.length; index++) {
    const cityNameLi = cities.data[index].cityName;
    if (cityNameLi.includes(value)) {
      searchCity.push(cityNameLi);

      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contactsSearchBarResults.appendChild(resultDiv);

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

      //click function
      resultDiv.addEventListener("click", () => {
        getBySearchClick(cityNameLi);
      });
    }
  }

  for (let index = 0; index < regions.data.length; index++) {
    const regionNameLi = regions.data[index].regionName;
    if (regionNameLi.includes(value)) {
      searchRegion.push(regionNameLi);

      //creo el div del li:
      const resultDiv = document.createElement("div");
      resultDiv.setAttribute("class", "resultDiv");
      contactsSearchBarResults.appendChild(resultDiv);

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

      //click function
      resultDiv.addEventListener("click", () => {
        getBySearchClick(regionNameLi);
      });
    }
  }

  if (
    searchContact.length +
      searchCompany.length +
      searchCountry.length +
      searchCity.length +
      searchRegion.length !=
      0 &&
    value != ""
  ) {
    contactsSearchBarResults.style.display = "block";
    contactsSearchBarArrowIcon.setAttribute("boolean", "true");
  } else {
    contactsSearchBarResults.style.display = "none";
    contactsSearchBarArrowIcon.setAttribute("boolean", "false");
  }
});

//SHOW HIDE EVENT:

contactsSearchBarArrowIcon.addEventListener("click", () => {
  const boolean = contactsSearchBarArrowIcon.getAttribute("boolean");
  // console.log(boolean);
  if (contactsSearchBarTextInput.value) {
    if (boolean == "true") {
      contactsSearchBarResults.style.display = "none";
      contactsSearchBarArrowIcon.setAttribute("boolean", "false");
    } else {
      contactsSearchBarResults.style.display = "block";
      contactsSearchBarArrowIcon.setAttribute("boolean", "true");
    }
  }
});

//===================================================================
// CLICK SEARCH:
//===================================================================

let newSearchContact = [];

async function getBySearchClick(name) {
  console.log(name);

  newSearchContact = [];

  let contacts = await axios.get(
    "http://localhost:3000/contact/dashboard",
    config
  );

  let companies = await axios.get(
    "http://localhost:3000/company/dashboard",
    config
  );

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

  // console.log(contacts);

  //Click on city:
  for (let index = 0; index < contacts.data.length; index++) {
    if (name == contacts.data[index].cityName) {
      newSearchContact.push(contacts.data[index]);
    }
  }

  //Click on country:
  for (let index = 0; index < contacts.data.length; index++) {
    if (name == contacts.data[index].countryName) {
      newSearchContact.push(contacts.data[index]);
    }
  }

  //Click on region:
  for (let index = 0; index < contacts.data.length; index++) {
    if (name == contacts.data[index].regionName) {
      newSearchContact.push(contacts.data[index]);
    }
  }

  //Click on contact name:
  for (let index = 0; index < contacts.data.length; index++) {
    if (
      name ==
      contacts.data[index].contactName + " " + contacts.data[index].lastname
    ) {
      newSearchContact.push(contacts.data[index]);
    }
  }

  //Click on company:
  for (
    let companyIndex = 0;
    companyIndex < companies.data.length;
    companyIndex++
  ) {
    for (
      let contactIndex = 0;
      contactIndex < contacts.data.length;
      contactIndex++
    ) {
      if (
        companies.data[companyIndex].id ==
          contacts.data[contactIndex].companyId &&
        name === companies.data[companyIndex].companyName
      ) {
        newSearchContact.push(contacts.data[contactIndex]);
      }
    }
  }

  contactsSearchBarResults.style.display = "none";
  contactsSearchBarArrowIcon.setAttribute("boolean", "false");
  counterCheckboxes.style.display = "none";
  exportContactDownDivs.style.display = "none";
  deleteSelectedContacts.style.display = "none";
  exportContactDownArrow.style.transform = "rotate(0deg)";
  exportContactDownArrow.setAttribute("toggle", "off");
  document.getElementById("contactsDashboardTitleCheckBox").checked = false;
  document.getElementById("contactsDashboardTitleCheckBox").style.opacity = "1";
  checkBoxChecked = [];
  console.log(newSearchContact);
  showContactsClickLi(newSearchContact.data);
}

//===================================================================
//Esta funcion se encuentra mas arriba, preguntarle a juampa como pasarle los params para poder usarla y no tener que repetir
//===================================================================

function showContactsClickLi(newContacts) {
  contactDashboardDynamic.innerHTML = "";
  for (let contact of newSearchContact) {
    console.log(contact);
    // create contactDiv
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contactDiv");
    contactDashboardDynamic.appendChild(contactDiv);
    contactDiv.setAttribute("contactId", contact.id);
    //createCheckBox:
    const contactCheckBoxDiv = document.createElement("div");
    contactCheckBoxDiv.setAttribute("class", "contactCheckBoxDiv");
    contactDiv.appendChild(contactCheckBoxDiv);
    const contactCheckBox = document.createElement("input");
    contactCheckBox.setAttribute("type", "checkbox");
    contactCheckBox.setAttribute("class", "contactCheckBox");
    contactCheckBox.setAttribute("check", "notChecked");
    contactCheckBox.setAttribute("key", contact.id);
    contactCheckBoxDiv.appendChild(contactCheckBox);
    console.log(contactCheckBox);
    contactCheckBox.style.cursor = "pointer";
    //checkBox Event:
    contactCheckBox.addEventListener("click", () => {
      const check = contactCheckBox.getAttribute("check");
      if (check === "notChecked") {
        contactCheckBox.setAttribute("check", "checked");
        // console.log("checked");
        contactDiv.style.backgroundColor = "rgb(229 242 255)";
        checkBoxChecked.push(contactCheckBox.attributes.key.nodeValue);
        if (checkBoxChecked.length >= 2) {
          //Create things
          //create counter checkboxes checked
          counterCheckboxes.setAttribute("value", checkBoxChecked.length);
          console.log(checkBoxChecked.length);
          counterCheckboxesText.innerHTML =
            checkBoxChecked.length + " " + "Seleccionados";
          contactDashboardContainer.appendChild(counterCheckboxes);
          counterCheckboxes.style.display = "flex";
          exportContactDownDivs.style.display = "block";
          deleteSelectedContacts.style.display = "flex";
          exportContactDownArrow.style.transform = "rotate(180deg)";
          exportContactDownArrow.setAttribute("toggle", "on");
          document.getElementById(
            "contactsDashboardTitleCheckBox"
          ).checked = true;
          document.getElementById(
            "contactsDashboardTitleCheckBox"
          ).style.opacity = "0.5";
        }
      } else {
        contactCheckBox.setAttribute("check", "notChecked");
        // console.log("notChecked");
        contactDiv.style.backgroundColor = "white";
        checkBoxChecked.pop(contactCheckBox.attributes.key.nodeValue);
        if (checkBoxChecked.length >= 2) {
          //Create things
          //create counter checkboxes checked
          counterCheckboxes.setAttribute("value", checkBoxChecked.length);
          counterCheckboxesText.innerHTML =
            checkBoxChecked.length + " " + "Seleccionados";
          contactDashboardContainer.appendChild(counterCheckboxes);
        } else if (checkBoxChecked.length < 2) {
          counterCheckboxes.style.display = "none";
          exportContactDownDivs.style.display = "none";
          deleteSelectedContacts.style.display = "none";
          exportContactDownArrow.style.transform = "rotate(0deg)";
          exportContactDownArrow.setAttribute("toggle", "off");
          document.getElementById(
            "contactsDashboardTitleCheckBox"
          ).checked = false;
          document.getElementById(
            "contactsDashboardTitleCheckBox"
          ).style.opacity = "1";
        }
      }
      console.log(checkBoxChecked);
    });
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
    //     //Agregar boton ... en el caso de que el usuario tenga mas de 2 canales preferidos de contactos y que al apretar agrande el div y los muestre.
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
    contactAccionsButtonDiv.style.cursor = "pointer";
    //contactAccionsButtonText:
    const contactAccionsButtonText = document.createElement("p");
    contactAccionsButtonText.setAttribute("class", "contactAccionsButtonText");
    contactAccionsButtonText.appendChild(document.createTextNode("..."));
    contactAccionsButtonDiv.appendChild(contactAccionsButtonText);
    //contactAccionsButtonDiv EVENT:
    contactAccionsButtonDiv.addEventListener("click", () => {
      contactAccionsButtonDiv.innerHTML = "";
      // =============
      //delete
      // =============
      const deleteAction = document.createElement("div");
      deleteAction.setAttribute("class", "deleteAction");
      deleteAction.setAttribute("key", contact.id);
      const deleteActionText = document.createElement("p");
      deleteActionText.setAttribute("class", "deleteAction");
      deleteActionText.appendChild(document.createTextNode("Eliminar"));
      deleteAction.appendChild(deleteActionText);
      contactAccionsButtonDiv.appendChild(deleteAction);
      deleteAction.addEventListener("click", () => {
        axios.delete(
          `http://localhost:3000/contact/delete/${contact.id}`,
          config
        );
        location.reload();
      });
      // =============
      //update
      // =============
      const updateAction = document.createElement("div");
      updateAction.setAttribute("contactId", contact.id);
      updateAction.setAttribute("class", "updateAction");
      updateAction.setAttribute("key", contact.id);
      const updateActionText = document.createElement("p");
      updateActionText.setAttribute("class", "updateAction");
      updateActionText.appendChild(document.createTextNode("Actualizar"));
      updateAction.appendChild(updateActionText);
      contactAccionsButtonDiv.appendChild(updateAction);
      updateAction.addEventListener("click", () =>
        updateContactFunction(updateAction.getAttribute("contactId"))
      );
    });
  }
}

//================================================================
//export toggle
//================================================================

exportContactDownArrow.addEventListener("click", () => {
  const exportToggle = exportContactDownArrow.getAttribute("toggle");
  if (exportToggle === "on") {
    exportContactDownDivs.style.display = "none";
    exportContactDownArrow.setAttribute("toggle", "off");
    exportContactDownArrow.style.transform = "rotate(0deg)";
  } else {
    exportContactDownArrow.setAttribute("toggle", "on");
    exportContactDownDivs.style.display = "block";
    exportContactDownArrow.style.transform = "rotate(180deg)";
  }
});

//================================================================
//deleteSelectedContacts event:
//================================================================

deleteSelectedContacts.addEventListener("click", async (element) => {
  console.log(checkBoxChecked);
  for (let index = 0; index < checkBoxChecked.length; index++) {
    const contact = checkBoxChecked[index];
    console.log(contact);
    axios.delete(`http://localhost:3000/contact/delete/${contact}`, config);
  }
  location.reload();
});

console.log("1247");
//==================================================================
// UPDATE CONTACTS
//================================================================
async function updatePrimaryData() {
  //----------------------------------------
  // PRINCIPAL DATA
  //----------------------------------------
  //contactPrincipalDataContainer:
  const contactPrincipalDataContainer = document.createElement("div");
  contactPrincipalDataContainer.setAttribute(
    "id",
    "contactPrincipalDataContainer"
  );
  createContactContainer.appendChild(contactPrincipalDataContainer);
  contactPrincipalDataContainer.style.width = "96%";
  contactPrincipalDataContainer.style.backgroundColor = "white";
  contactPrincipalDataContainer.style.position = "absolute";
  contactPrincipalDataContainer.style.top = "4vw";
  contactPrincipalDataContainer.style.height = "10vw";
  contactPrincipalDataContainer.style.margin = "0 0 0 2% ";
  // //contactPrincipalDataPhotoDiv:
  // const contactPrincipalDataPhotoDiv = document.createElement("div");
  // contactPrincipalDataPhotoDiv.setAttribute(
  //   "id",
  //   "contactPrincipalDataPhotoDiv"
  // );
  // contactPrincipalDataContainer.appendChild(contactPrincipalDataPhotoDiv);
  // //contactPrincipalDataPhotoPlusIcon:
  // const contactPrincipalDataPhotoPlusIcon = document.createElement("div");
  // contactPrincipalDataPhotoPlusIcon.setAttribute(
  //   "id",
  //   "contactPrincipalDataPhotoPlusIcon"
  // );
  // contactPrincipalDataPhotoDiv.appendChild(contactPrincipalDataPhotoPlusIcon);
  // //contactPrincipalDataPhoto:
  // const contactPrincipalDataPhoto = document.createElement("img");
  // contactPrincipalDataPhoto.setAttribute("id", "contactPrincipalDataPhoto");
  // contactPrincipalDataPhoto.setAttribute("src", "../assets/person-fill.png");
  // contactPrincipalDataPhotoPlusIcon.appendChild(contactPrincipalDataPhoto);
  // //contactPrincipalDataPhotoIcon:
  // const contactPrincipalDataPhotoIconDiv = document.createElement("div");
  // contactPrincipalDataPhotoIconDiv.setAttribute(
  //   "id",
  //   "contactPrincipalDataPhotoIconDiv"
  // );
  // contactPrincipalDataPhotoPlusIcon.appendChild(
  //   contactPrincipalDataPhotoIconDiv
  // );
  // const contactPrincipalDataPhotoIcon = document.createElement("img");
  // contactPrincipalDataPhotoIcon.setAttribute(
  //   "id",
  //   "contactPrincipalDataPhotoIcon"
  // );
  // contactPrincipalDataPhotoIcon.setAttribute(
  //   "src",
  //   "../assets/camera-fill.png"
  // );
  // contactPrincipalDataPhotoIconDiv.appendChild(contactPrincipalDataPhotoIcon);
  //contactName:
  //Container:
  const contactPrincipalDataNameContainer = document.createElement("div");
  contactPrincipalDataNameContainer.setAttribute(
    "id",
    "contactPrincipalDataNameContainer"
  );
  contactPrincipalDataContainer.appendChild(contactPrincipalDataNameContainer);
  //div
  const contactPrincipalDataNameTitleDiv = document.createElement("div");
  contactPrincipalDataNameTitleDiv.setAttribute(
    "id",
    "contactPrincipalDataNameTitleDiv"
  );
  contactPrincipalDataNameContainer.appendChild(
    contactPrincipalDataNameTitleDiv
  );
  //Title:
  const contactPrincipalDataNameTitle = document.createElement("p");
  contactPrincipalDataNameTitle.setAttribute(
    "id",
    "contactPrincipalDataNameTitle"
  );
  contactPrincipalDataNameTitleDiv.appendChild(contactPrincipalDataNameTitle);
  contactPrincipalDataNameTitle.appendChild(document.createTextNode("Nombre"));
  //asterisco
  const asteriscoRedName = document.createElement("span");
  asteriscoRedName.setAttribute("class", "asteriscoRed");
  contactPrincipalDataNameTitleDiv.appendChild(asteriscoRedName);
  asteriscoRedName.appendChild(document.createTextNode("*"));
  //input
  const contactPrincipalDataNameInput = document.createElement("input");
  contactPrincipalDataNameInput.setAttribute("type", "text");
  contactPrincipalDataNameInput.setAttribute(
    "id",
    "contactPrincipalDataNameInput"
  );
  contactPrincipalDataNameContainer.appendChild(contactPrincipalDataNameInput);
  //contactLastname:
  //Container:
  const contactPrincipalDataLastnameContainer = document.createElement("div");
  contactPrincipalDataLastnameContainer.setAttribute(
    "id",
    "contactPrincipalDataLastnameContainer"
  );
  contactPrincipalDataContainer.appendChild(
    contactPrincipalDataLastnameContainer
  );
  //div
  const contactPrincipalDataLastnameTitleDiv = document.createElement("div");
  contactPrincipalDataLastnameTitleDiv.setAttribute(
    "id",
    "contactPrincipalDataLastnameTitleDiv"
  );
  contactPrincipalDataLastnameContainer.appendChild(
    contactPrincipalDataLastnameTitleDiv
  );
  //Title:
  const contactPrincipalDataLastnameTitle = document.createElement("p");
  contactPrincipalDataLastnameTitle.setAttribute(
    "id",
    "contactPrincipalDataLastnameTitle"
  );
  contactPrincipalDataLastnameTitleDiv.appendChild(
    contactPrincipalDataLastnameTitle
  );
  contactPrincipalDataLastnameTitle.appendChild(
    document.createTextNode("Apellido")
  );
  //asterisco
  const asteriscoRedLastname = document.createElement("span");
  asteriscoRedLastname.setAttribute("class", "asteriscoRed");
  contactPrincipalDataLastnameTitleDiv.appendChild(asteriscoRedLastname);
  asteriscoRedLastname.appendChild(document.createTextNode("*"));
  //input
  const contactPrincipalDataLastnameInput = document.createElement("input");
  contactPrincipalDataLastnameInput.setAttribute(
    "id",
    "contactPrincipalDataLastnameInput"
  );
  contactPrincipalDataLastnameContainer.appendChild(
    contactPrincipalDataLastnameInput
  );
  //contactPosition:
  //Container:
  const contactPrincipalDataPositionContainer = document.createElement("div");
  contactPrincipalDataPositionContainer.setAttribute(
    "id",
    "contactPrincipalDataPositionContainer"
  );
  contactPrincipalDataContainer.appendChild(
    contactPrincipalDataPositionContainer
  );
  //div
  const contactPrincipalDataPositionTitleDiv = document.createElement("div");
  contactPrincipalDataPositionTitleDiv.setAttribute(
    "id",
    "contactPrincipalDataPositionTitleDiv"
  );
  contactPrincipalDataPositionContainer.appendChild(
    contactPrincipalDataPositionTitleDiv
  );
  //Title:
  const contactPrincipalDataPositionTitle = document.createElement("p");
  contactPrincipalDataPositionTitle.setAttribute(
    "id",
    "contactPrincipalDataPositionTitle"
  );
  contactPrincipalDataPositionTitleDiv.appendChild(
    contactPrincipalDataPositionTitle
  );
  contactPrincipalDataPositionTitle.appendChild(
    document.createTextNode("Cargo")
  );
  //asterisco
  const asteriscoRedPosition = document.createElement("span");
  asteriscoRedPosition.setAttribute("class", "asteriscoRed");
  contactPrincipalDataPositionTitleDiv.appendChild(asteriscoRedPosition);
  asteriscoRedPosition.appendChild(document.createTextNode("*"));
  //input
  const contactPrincipalDataPositionInput = document.createElement("input");
  contactPrincipalDataPositionInput.setAttribute(
    "id",
    "contactPrincipalDataPositionInput"
  );
  contactPrincipalDataPositionContainer.appendChild(
    contactPrincipalDataPositionInput
  );
  //contactEmail:
  //Container:
  const contactPrincipalDataEmailContainer = document.createElement("div");
  contactPrincipalDataEmailContainer.setAttribute(
    "id",
    "contactPrincipalDataEmailContainer"
  );
  contactPrincipalDataContainer.appendChild(contactPrincipalDataEmailContainer);
  //div
  const contactPrincipalDataEmailTitleDiv = document.createElement("div");
  contactPrincipalDataEmailTitleDiv.setAttribute(
    "id",
    "contactPrincipalDataEmailTitleDiv"
  );
  contactPrincipalDataEmailContainer.appendChild(
    contactPrincipalDataEmailTitleDiv
  );
  //Title:
  const contactPrincipalDataEmailTitle = document.createElement("p");
  contactPrincipalDataEmailTitle.setAttribute(
    "id",
    "contactPrincipalDataEmailTitle"
  );
  contactPrincipalDataEmailTitleDiv.appendChild(contactPrincipalDataEmailTitle);
  contactPrincipalDataEmailTitle.appendChild(document.createTextNode("Email"));
  //asterisco
  const asteriscoRedEmail = document.createElement("span");
  asteriscoRedEmail.setAttribute("class", "asteriscoRed");
  contactPrincipalDataEmailTitleDiv.appendChild(asteriscoRedEmail);
  asteriscoRedEmail.appendChild(document.createTextNode("*"));
  //input
  const contactPrincipalDataEmailInput = document.createElement("input");
  contactPrincipalDataEmailInput.setAttribute(
    "id",
    "contactPrincipalDataEmailInput"
  );
  contactPrincipalDataEmailContainer.appendChild(
    contactPrincipalDataEmailInput
  );
  //contactCompany:
  //Container:
  const contactPrincipalDataCompanyContainer = document.createElement("div");
  contactPrincipalDataCompanyContainer.setAttribute(
    "id",
    "contactPrincipalDataCompanyContainer"
  );
  contactPrincipalDataContainer.appendChild(
    contactPrincipalDataCompanyContainer
  );
  //div
  const contactPrincipalDataCompanyTitleDiv = document.createElement("div");
  contactPrincipalDataCompanyTitleDiv.setAttribute(
    "id",
    "contactPrincipalDataCompanyTitleDiv"
  );
  contactPrincipalDataCompanyContainer.appendChild(
    contactPrincipalDataCompanyTitleDiv
  );
  //Title:
  const contactPrincipalDataCompanyTitle = document.createElement("p");
  contactPrincipalDataCompanyTitle.setAttribute(
    "id",
    "contactPrincipalDataCompanyTitle"
  );
  contactPrincipalDataCompanyTitleDiv.appendChild(
    contactPrincipalDataCompanyTitle
  );
  contactPrincipalDataCompanyTitle.appendChild(
    document.createTextNode("Compañia")
  );
  //asterisco
  const asteriscoRedCompany = document.createElement("span");
  asteriscoRedCompany.setAttribute("class", "asteriscoRed");
  contactPrincipalDataCompanyTitleDiv.appendChild(asteriscoRedCompany);
  asteriscoRedCompany.appendChild(document.createTextNode("*"));
  //select
  const contactPrincipalDataCompanyInput = document.createElement("select");
  contactPrincipalDataCompanyInput.setAttribute(
    "id",
    "contactPrincipalDataCompanyInput"
  );
  contactPrincipalDataCompanyContainer.appendChild(
    contactPrincipalDataCompanyInput
  );
  const companyPlaceholder = document.createElement(
    "option",
    "Ingrese nombre de compañia"
  );
  companyPlaceholder.appendChild(
    document.createTextNode("Ingrese nombre de compañia")
  );

  let companies = await axios.get(
    "http://localhost:3000/company/dashboard",
    config
  );

  for (
    let companyIndex = 0;
    companyIndex < companies.data.length;
    companyIndex++
  ) {
    contactPrincipalDataCompanyInput.appendChild(companyPlaceholder);
    const option = document.createElement(
      "option",
      companies.data[companyIndex].value
    );
    option.setAttribute("value", companies.data[companyIndex].id);
    option.setAttribute(
      "companyName",
      companies.data[companyIndex].companyName
    );
    contactPrincipalDataCompanyInput
      .appendChild(option)
      .appendChild(
        document.createTextNode(companies.data[companyIndex].companyName)
      );
  }
}

async function updateSecondaryData() {
  //===========================================================
  // SECONDARY DATA:
  //===========================================================
  const secondaryDataContainer = document.createElement("div");
  secondaryDataContainer.setAttribute("id", "secondaryDataContainer");
  createContactContainer.appendChild(secondaryDataContainer);
  //===========================================================
  // SECONDARY DATA: FIRST DIV
  //===========================================================
  //fistDiv:
  const secondaryDataFirstDiv = document.createElement("div");
  secondaryDataFirstDiv.setAttribute("id", "secondaryDataFirstDiv");
  secondaryDataContainer.appendChild(secondaryDataFirstDiv);
  //------------------------------------------------------------------
  //region:
  //------------------------------------------------------------------
  const secondaryDataFirstDivRegion = document.createElement("div");
  secondaryDataFirstDivRegion.setAttribute("id", "secondaryDataFirstDivRegion");
  secondaryDataFirstDiv.appendChild(secondaryDataFirstDivRegion);
  //Title:
  const secondaryDataFirstDivRegionTitle = document.createElement("p");
  secondaryDataFirstDivRegionTitle.setAttribute(
    "id",
    "secondaryDataFirstDivRegionTitle"
  );
  secondaryDataFirstDivRegion.appendChild(secondaryDataFirstDivRegionTitle);
  secondaryDataFirstDivRegionTitle.appendChild(
    document.createTextNode("Región")
  );
  //select:
  const secondaryDataFirstDivRegionSelect = document.createElement("select");
  secondaryDataFirstDivRegionSelect.setAttribute(
    "id",
    "secondaryDataFirstDivRegionSelect"
  );
  secondaryDataFirstDivRegion.appendChild(secondaryDataFirstDivRegionSelect);
  //------------------------------------------------------------------
  //Country:
  //------------------------------------------------------------------
  const secondaryDataFirstDivCountry = document.createElement("div");
  secondaryDataFirstDivCountry.setAttribute(
    "id",
    "secondaryDataFirstDivCountry"
  );
  secondaryDataFirstDiv.appendChild(secondaryDataFirstDivCountry);
  //Title:
  const secondaryDataFirstDivCountryTitle = document.createElement("p");
  secondaryDataFirstDivCountryTitle.setAttribute(
    "id",
    "secondaryDataFirstDivCountryTitle"
  );
  secondaryDataFirstDivCountry.appendChild(secondaryDataFirstDivCountryTitle);
  secondaryDataFirstDivCountryTitle.appendChild(
    document.createTextNode("País")
  );
  //select:
  const secondaryDataFirstDivCountrySelect = document.createElement("select");
  secondaryDataFirstDivCountrySelect.setAttribute(
    "id",
    "secondaryDataFirstDivCountrySelect"
  );
  secondaryDataFirstDivCountry.appendChild(secondaryDataFirstDivCountrySelect);
  secondaryDataFirstDivCountrySelect.disabled = true;
  //------------------------------------------------------------------
  //City:
  //------------------------------------------------------------------
  const secondaryDataFirstDivCity = document.createElement("div");
  secondaryDataFirstDivCity.setAttribute("id", "secondaryDataFirstDivCity");
  secondaryDataFirstDiv.appendChild(secondaryDataFirstDivCity);
  //Title:
  const secondaryDataFirstDivCityTitle = document.createElement("p");
  secondaryDataFirstDivCityTitle.setAttribute(
    "id",
    "secondaryDataFirstDivCityTitle"
  );
  secondaryDataFirstDivCity.appendChild(secondaryDataFirstDivCityTitle);
  secondaryDataFirstDivCityTitle.appendChild(document.createTextNode("Ciudad"));
  //select:
  const secondaryDataFirstDivCitySelect = document.createElement("select");
  secondaryDataFirstDivCitySelect.setAttribute(
    "id",
    "secondaryDataFirstDivCitySelect"
  );
  secondaryDataFirstDivCity.appendChild(secondaryDataFirstDivCitySelect);
  secondaryDataFirstDivCitySelect.disabled = true;
  //------------------------------------------------------------------
  //Address:
  //------------------------------------------------------------------
  //div
  const secondaryDataFirstDivAddress = document.createElement("div");
  secondaryDataFirstDivAddress.setAttribute(
    "id",
    "secondaryDataFirstDivAddress"
  );
  secondaryDataFirstDiv.appendChild(secondaryDataFirstDivAddress);
  //Title:
  const secondaryDataFirstDivAddressTitle = document.createElement("p");
  secondaryDataFirstDivAddressTitle.setAttribute(
    "id",
    "secondaryDataFirstDivAddressTitle"
  );
  secondaryDataFirstDivAddress.appendChild(secondaryDataFirstDivAddressTitle);
  secondaryDataFirstDivAddressTitle.appendChild(
    document.createTextNode("Direccion")
  );
  //input:
  const secondaryDataFirstDivAddressInput = document.createElement("input");
  secondaryDataFirstDivAddressInput.setAttribute(
    "id",
    "secondaryDataFirstDivAddressInput"
  );
  secondaryDataFirstDivAddress.appendChild(secondaryDataFirstDivAddressInput);
  secondaryDataFirstDivAddressInput.setAttribute(
    "placeholder",
    "Ingresa una dirección"
  );
  secondaryDataFirstDivAddressInput.disabled = true;
  //------------------------------------------------------------------
  //Interes:
  //------------------------------------------------------------------
  //div
  const secondaryDataFirstDivInterest = document.createElement("div");
  secondaryDataFirstDivInterest.setAttribute(
    "id",
    "secondaryDataFirstDivInterest"
  );
  secondaryDataFirstDiv.appendChild(secondaryDataFirstDivInterest);
  //titlePlusBar:
  const interestTitlePlusBar = document.createElement("div");
  interestTitlePlusBar.setAttribute("id", "interestTitlePlusBar");
  secondaryDataFirstDivInterest.appendChild(interestTitlePlusBar);
  //title
  const secondaryDataFirstDivInterestTitle = document.createElement("p");
  secondaryDataFirstDivInterestTitle.setAttribute(
    "id",
    "secondaryDataFirstDivInterestTitle"
  );
  interestTitlePlusBar.appendChild(secondaryDataFirstDivInterestTitle);
  secondaryDataFirstDivInterestTitle.appendChild(
    document.createTextNode("Intéres")
  );
  //bar:
  const bar = document.createElement("div");
  bar.setAttribute("id", "bar");
  interestTitlePlusBar.appendChild(bar);
  //divOfDivs:
  const divOfDivs = document.createElement("div");
  divOfDivs.setAttribute("id", "divOfDivs");
  bar.appendChild(divOfDivs);
  //circleOfBar:
  const circleOfBar = document.createElement("div");
  circleOfBar.setAttribute("id", "circleOfBar");
  bar.appendChild(circleOfBar);
  //div1:
  const div1 = document.createElement("div");
  div1.setAttribute("class", "barDiv");
  div1.setAttribute("key", "1");
  divOfDivs.appendChild(div1);
  //div2:
  const div2 = document.createElement("div");
  div2.setAttribute("class", "barDiv");
  div2.setAttribute("key", "2");
  divOfDivs.appendChild(div2);
  //div1:
  const div3 = document.createElement("div");
  div3.setAttribute("class", "barDiv");
  div3.setAttribute("key", "3");
  divOfDivs.appendChild(div3);
  //div1:
  const div4 = document.createElement("div");
  div4.setAttribute("class", "barDiv");
  div4.setAttribute("key", "4");
  divOfDivs.appendChild(div4);
  //porcentualInterestSelector:
  const porcentualInterestSelect = document.createElement("select");
  porcentualInterestSelect.setAttribute("id", "porcentualInterestSelect");
  bar.appendChild(porcentualInterestSelect);

  //AXIOS GETS
  let regiones = await axios.get(
    "http://localhost:3000/region/dashboard",
    config
  );

  let countries = await axios.get(
    "http://localhost:3000/country/dashboard",
    config
  );

  // let contacts = await axios.get(
  //   "http://localhost:3000/contacts/dashboard",
  //   config
  // )

  let cities = await axios.get("http://localhost:3000/city/dashboard", config);
  //---------------------------
  // PLACE HOLDERS
  //---------------------------

  const placeholder = document.createElement("option", "Seleccionar Region");
  placeholder.appendChild(document.createTextNode("Seleccionar Región"));

  const placeholderCountry = document.createElement(
    "option",
    "Seleccionar País"
  );
  placeholderCountry.appendChild(document.createTextNode("Seleccionar País"));
  secondaryDataFirstDivCountrySelect.appendChild(placeholderCountry);

  const placeholderCity = document.createElement(
    "option",
    "Seleccionar Ciudad"
  );
  placeholderCity.appendChild(document.createTextNode("Seleccionar Ciudad"));
  secondaryDataFirstDivCitySelect.appendChild(placeholderCity);

  for (let regionIndex = 0; regionIndex < regiones.data.length; regionIndex++) {
    const option = document.createElement(
      "option",
      regiones.data[regionIndex].id
    );
    option.setAttribute("value", regiones.data[regionIndex].id);
    option.setAttribute("name", regiones.data[regionIndex].regionName);
    secondaryDataFirstDivRegionSelect.appendChild(placeholder);
    secondaryDataFirstDivRegionSelect
      .appendChild(option)
      .appendChild(
        document.createTextNode(regiones.data[regionIndex].regionName)
      );
  }

  secondaryDataFirstDivRegionSelect.addEventListener("click", (element) => {
    secondaryDataFirstDivCountrySelect.innerHTML = "";
    secondaryDataFirstDivCitySelect.innerHTML = "";
    if (secondaryDataFirstDivRegionSelect.value == "Seleccionar Región") {
      secondaryDataFirstDivCountrySelect.disabled = true;
      secondaryDataFirstDivCountrySelect.style.backgroundColor = "#d5d5d5";
      secondaryDataFirstDivCountrySelect.appendChild(placeholderCountry);
      secondaryDataFirstDivCitySelect.appendChild(placeholderCity);
      secondaryDataFirstDivAddressInput.disabled = true;
      secondaryDataFirstDivAddressInput.style.backgroundColor = "#d5d5d5";
    } else {
      secondaryDataFirstDivCitySelect.disabled = true;
      secondaryDataFirstDivCitySelect.style.backgroundColor = "#d5d5d5";
      secondaryDataFirstDivCitySelect.appendChild(placeholderCity);
      secondaryDataFirstDivCountrySelect.disabled = false;
      secondaryDataFirstDivCountrySelect.style.backgroundColor = "white";
      secondaryDataFirstDivAddressInput.disabled = true;
      secondaryDataFirstDivAddressInput.style.backgroundColor = "#d5d5d5";
      for (
        let countryIndex = 0;
        countryIndex < countries.data.length;
        countryIndex++
      ) {
        const option = document.createElement(
          "option",
          countries.data[countryIndex].id
        );
        option.setAttribute("value", countries.data[countryIndex].id);
        option.setAttribute(
          "countryName",
          countries.data[countryIndex].countryName
        );
        if (
          secondaryDataFirstDivRegionSelect.value ==
          countries.data[countryIndex].regionId
        ) {
          secondaryDataFirstDivCountrySelect
            .appendChild(option)
            .appendChild(
              document.createTextNode(countries.data[countryIndex].countryName)
            );
        }
      }
    }
  });

  secondaryDataFirstDivCountrySelect.addEventListener("click", (event) => {
    console.log(secondaryDataFirstDivCountrySelect.value);
    secondaryDataFirstDivCitySelect.innerHTML = "";
    if (secondaryDataFirstDivCountrySelect.value == "Seleccionar País") {
      secondaryDataFirstDivCitySelect.disabled = true;
      secondaryDataFirstDivCitySelect.style.backgroundColor = "#d5d5d5";
      secondaryDataFirstDivCitySelect.appendChild(placeholderCity);
      secondaryDataFirstDivAddressInput.disabled = true;
      secondaryDataFirstDivAddressInput.style.backgroundColor = "#d5d5d5";
    } else {
      secondaryDataFirstDivCitySelect.disabled = false;
      secondaryDataFirstDivCitySelect.style.backgroundColor = "white";
      secondaryDataFirstDivAddressInput.disabled = true;
      secondaryDataFirstDivAddressInput.style.backgroundColor = "#d5d5d5";
      for (let cityIndex = 0; cityIndex < cities.data.length; cityIndex++) {
        const option = document.createElement(
          "option",
          cities.data[cityIndex].id
        );
        option.setAttribute("value", cities.data[cityIndex].id);
        option.setAttribute("cityName", cities.data[cityIndex].cityName);
        if (
          secondaryDataFirstDivCountrySelect.value ==
          cities.data[cityIndex].countryId
        ) {
          secondaryDataFirstDivCitySelect
            .appendChild(option)
            .appendChild(
              document.createTextNode(cities.data[cityIndex].cityName)
            );
        }
      }
    }
  });

  secondaryDataFirstDivCitySelect.addEventListener("click", (event) => {
    console.log(secondaryDataFirstDivCitySelect.value);
    if (secondaryDataFirstDivCitySelect.value != "") {
      secondaryDataFirstDivAddressInput.disabled = false;
      secondaryDataFirstDivAddressInput.style.backgroundColor = "white";
    } else {
      secondaryDataFirstDivAddressInput.disabled = true;
      secondaryDataFirstDivAddressInput.style.backgroundColor = "#d5d5d5";
    }
  });

  const porcentualInterest = [0, 25, 50, 75, 100];

  for (let index = 0; index < porcentualInterest.length; index++) {
    const option = document.createElement("option", porcentualInterest[index]);
    option.setAttribute("value", porcentualInterest[index]);
    porcentualInterestSelect
      .appendChild(option)
      .appendChild(document.createTextNode(option.value + "%"));
  }

  porcentualInterestSelect.addEventListener("click", (event) => {
    console.log(event.target.value);
    if (event.target.value == 100) {
      div1.style.backgroundColor = "red";
      div2.style.backgroundColor = "red";
      div3.style.backgroundColor = "red";
      div4.style.backgroundColor = "red";
      circleOfBar.style.left = "87%";
    }
    if (event.target.value == 75) {
      div1.style.backgroundColor = "orange";
      div2.style.backgroundColor = "orange";
      div3.style.backgroundColor = "orange";
      div4.style.backgroundColor = "white";
      circleOfBar.style.left = "82%";
    }
    if (event.target.value == 50) {
      div1.style.backgroundColor = "yellow";
      div2.style.backgroundColor = "yellow";
      div3.style.backgroundColor = "white";
      div4.style.backgroundColor = "white";
      circleOfBar.style.left = "78%";
    }
    if (event.target.value == 25) {
      div1.style.backgroundColor = "#39fbff";
      div2.style.backgroundColor = "white";
      div3.style.backgroundColor = "white";
      div4.style.backgroundColor = "white";
      circleOfBar.style.left = "74%";
    }
    if (event.target.value == 0) {
      div1.style.backgroundColor = "white";
      div2.style.backgroundColor = "white";
      div3.style.backgroundColor = "white";
      div4.style.backgroundColor = "white";
      circleOfBar.style.left = "69%";
    }
  });
}

function updateChannel() {
  //===========================================================
  // SECONDARY DATA: SECOND DIV
  //===========================================================
  //container:
  const secondaryDataSecondDiv = document.createElement("div");
  secondaryDataSecondDiv.setAttribute("id", "secondaryDataSecondDiv");
  secondaryDataContainer.appendChild(secondaryDataSecondDiv);
  //------------------------------------------------------------------
  //Contact Channel:
  //------------------------------------------------------------------
  const secondaryDataSecondDivChannel = document.createElement("div");
  secondaryDataSecondDivChannel.setAttribute(
    "id",
    "secondaryDataSecondDivChannel"
  );
  secondaryDataSecondDiv.appendChild(secondaryDataSecondDivChannel);
  //Title:
  const secondaryDataSecondDivChannelTitle = document.createElement("p");
  secondaryDataSecondDivChannelTitle.setAttribute(
    "id",
    "secondaryDataSecondDivChannelTitle"
  );
  secondaryDataSecondDivChannel.appendChild(secondaryDataSecondDivChannelTitle);
  secondaryDataSecondDivChannelTitle.appendChild(
    document.createTextNode("Canal de contacto")
  );
  //select:
  const secondaryDataSecondDivChannelSelect = document.createElement("select");
  secondaryDataSecondDivChannelSelect.setAttribute(
    "id",
    "secondaryDataSecondDivChannelSelect"
  );
  secondaryDataSecondDivChannel.appendChild(
    secondaryDataSecondDivChannelSelect
  );
  //------------------------------------------------------------------
  //username:
  //------------------------------------------------------------------
  //div
  const secondaryDataSecondDivUsername = document.createElement("div");
  secondaryDataSecondDivUsername.setAttribute(
    "id",
    "secondaryDataSecondDivUsername"
  );
  secondaryDataSecondDiv.appendChild(secondaryDataSecondDivUsername);
  //Title:
  const secondaryDataSecondDivUsernameTitle = document.createElement("p");
  secondaryDataSecondDivUsernameTitle.setAttribute(
    "id",
    "secondaryDataSecondDivUsernameTitle"
  );
  secondaryDataSecondDivUsername.appendChild(
    secondaryDataSecondDivUsernameTitle
  );
  secondaryDataSecondDivUsernameTitle.appendChild(
    document.createTextNode("Cuenta de usuario")
  );
  //input:
  const secondaryDataSecondDivUsernameInput = document.createElement("input");
  secondaryDataSecondDivUsernameInput.setAttribute(
    "id",
    "secondaryDataSecondDivUsernameInput"
  );
  secondaryDataSecondDivUsername.appendChild(
    secondaryDataSecondDivUsernameInput
  );
  secondaryDataSecondDivUsernameInput.setAttribute("placeholder", "@ejemplo");
  //------------------------------------------------------------------
  //Contact Preferences:
  //------------------------------------------------------------------
  const secondaryDataSecondDivPreferences = document.createElement("div");
  secondaryDataSecondDivPreferences.setAttribute(
    "id",
    "secondaryDataSecondDivPreferences"
  );
  secondaryDataSecondDiv.appendChild(secondaryDataSecondDivPreferences);
  //Title:
  const secondaryDataSecondDivPreferencesTitle = document.createElement("p");
  secondaryDataSecondDivPreferencesTitle.setAttribute(
    "id",
    "secondaryDataSecondDivPreferencesTitle"
  );
  secondaryDataSecondDivPreferences.appendChild(
    secondaryDataSecondDivPreferencesTitle
  );
  secondaryDataSecondDivPreferencesTitle.appendChild(
    document.createTextNode("Preferencias")
  );
  //select:
  const secondaryDataSecondDivPreferencesSelect =
    document.createElement("select");
  secondaryDataSecondDivPreferencesSelect.setAttribute(
    "id",
    "secondaryDataSecondDivPreferencesSelect"
  );
  secondaryDataSecondDivPreferences.appendChild(
    secondaryDataSecondDivPreferencesSelect
  );

  secondaryDataSecondDivUsernameInput.disabled = true;
  secondaryDataSecondDivPreferencesSelect.disabled = true;

  //-------------------------
  // Seleccionar Canal:
  //-------------------------
  const channelPlaceholder = document.createElement(
    "option",
    "Seleccionar Canal"
  );
  channelPlaceholder.appendChild(document.createTextNode("Seleccionar Canal"));

  const channels = [
    "Discord",
    "LinkedIn",
    "Telegram",
    "FaceBook",
    "Instagram",
    "WhatsApp",
    "Email",
    "Slack",
    "Teléfono",
  ];

  for (let channelIndex = 0; channelIndex < channels.length; channelIndex++) {
    secondaryDataSecondDivChannelSelect.appendChild(channelPlaceholder);
    const option = document.createElement("option", channels[channelIndex]);
    option.setAttribute("value", channels[channelIndex]);
    secondaryDataSecondDivChannelSelect
      .appendChild(option)
      .appendChild(document.createTextNode(option.value));
  }

  secondaryDataSecondDivChannelSelect.addEventListener("click", () => {
    if (secondaryDataSecondDivChannelSelect.value != "Seleccionar Canal") {
      secondaryDataSecondDivUsernameInput.disabled = false;
      secondaryDataSecondDivUsernameInput.style.backgroundColor = "white";
      if (secondaryDataSecondDivChannelSelect.value == "Teléfono") {
        secondaryDataSecondDivUsernameInput.placeholder =
          "Ingresar numero teléfonico";
        secondaryDataSecondDivUsernameInput.style.backgroundColor = "white";
      } else {
        secondaryDataSecondDivUsernameInput.placeholder =
          "Ingresar URL red social";
      }
    } else {
      secondaryDataSecondDivUsernameInput.disabled = true;
      secondaryDataSecondDivPreferencesSelect.disabled = true;
      secondaryDataSecondDivUsernameInput.placeholder = "@ejemplo";
      secondaryDataSecondDivUsernameInput.style.backgroundColor = "#d5d5d5";
    }
  });

  secondaryDataSecondDivUsernameInput.addEventListener("keyup", () => {
    if (secondaryDataSecondDivUsernameInput.value != "") {
      secondaryDataSecondDivPreferencesSelect.disabled = false;
    } else {
      secondaryDataSecondDivPreferencesSelect.disabled = true;
    }
  });

  //-------------------------
  // Seleccionar Preferencia:
  //-------------------------
  const preferences = ["Sin Preferencias", "Canal Favorito", "No Molestar"];

  for (let index = 0; index < preferences.length; index++) {
    const option = document.createElement("option", preferences[index]);
    option.setAttribute("value", preferences[index]);
    secondaryDataSecondDivPreferencesSelect
      .appendChild(option)
      .appendChild(document.createTextNode(option.value));
  }

  //------------------------------------------------------------------
  //Add channel:
  //------------------------------------------------------------------
  secondaryDataSecondDivPreferencesSelect.addEventListener(
    "change",
    () => {
      if (
        secondaryDataSecondDivChannelSelect.value &&
        secondaryDataSecondDivUsernameInput.value &&
        secondaryDataSecondDivPreferencesSelect.value != ""
      ) {
        const secondaryDataSecondDivAddChannel = document.createElement("div");
        secondaryDataSecondDivAddChannel.setAttribute(
          "id",
          "secondaryDataSecondDivAddChannel"
        );
        secondaryDataSecondDiv.appendChild(secondaryDataSecondDivAddChannel);
        //plusIcon:
        const secondaryDataSecondDivAddChannelIcon =
          document.createElement("img");
        secondaryDataSecondDivAddChannelIcon.setAttribute(
          "id",
          "secondaryDataSecondDivAddChannelIcon"
        );
        secondaryDataSecondDivAddChannel.appendChild(
          secondaryDataSecondDivAddChannelIcon
        );
        secondaryDataSecondDivAddChannelIcon.setAttribute(
          "src",
          "../assets/plus.png"
        );
        //text:
        const secondaryDataSecondDivAddChannelText =
          document.createElement("p");
        secondaryDataSecondDivAddChannelText.setAttribute(
          "id",
          "secondaryDataSecondDivAddChannelText"
        );
        secondaryDataSecondDivAddChannel.appendChild(
          secondaryDataSecondDivAddChannelText
        );
        secondaryDataSecondDivAddChannelText.appendChild(
          document.createTextNode("Agregar canal")
        );
        secondaryDataSecondDivAddChannel.style.cursor = "pointer";
        //------------------------
        //createOtherChannel
        //------------------------
        secondaryDataSecondDivAddChannel.addEventListener(
          "click",
          () => {
            createChannel();
            let finalButtons = document.getElementById("finalButtons");
            finalButtons.style.marginLeft = "70%";
            finalButtons.style.zIndex = 1;
          },
          { once: true }
        );
      } else {
        console.log("nope");
      }
    },
    { once: true }
  );
}

function updateContactFunction(contactId) {
  console.log(contactId);
  //------------------------------------------------------------------
  //ADD CONTACT CONTAINER:
  //------------------------------------------------------------------
  contactSection.style.filter = "blur(50px)";
  const createContactContainer = document.createElement("div");
  createContactContainer.setAttribute("id", "createContactContainer");
  blurSection.appendChild(createContactContainer);
  createContactContainer.style.position = "absolute";
  createContactContainer.style.display = "flex";
  createContactContainer.style.width = "100%";
  createContactContainer.style.height = "7.5vw";
  createContactContainer.style.backgroundColor = "rgb(6, 98, 186)";
  createContactContainer.style.top = "0";
  //create tittle and close button:
  const titleAndClose = document.createElement("div");
  titleAndClose.setAttribute("id", "titleAndClose");
  createContactContainer.appendChild(titleAndClose);
  //newContactTitle:
  const newContactTitle = document.createElement("div");
  newContactTitle.setAttribute("id", "newContactTitle");
  titleAndClose.appendChild(newContactTitle);
  newContactTitle.appendChild(document.createTextNode("Nuevo Contacto"));
  //newContactCloseButton:
  const newContactCloseButton = document.createElement("div");
  newContactCloseButton.setAttribute("id", "newContactCloseButton");
  titleAndClose.appendChild(newContactCloseButton);
  newContactCloseButton.appendChild(document.createTextNode("x"));
  newContactCloseButton.style.cursor = "pointer";
  newContactCloseButton.addEventListener("click", () => {
    location.reload();
  });
  //============================================
  // PIMARY DATA:
  //============================================
  updatePrimaryData();
  //============================================
  // SECONDARY DATA:
  //============================================
  updateSecondaryData();
  //============================================
  // CHANNEL:
  //============================================
  updateChannel();
  //------------------------------------------------------------------
  // FINALS BUTTONS
  //------------------------------------------------------------------
  const finalButtons = document.createElement("div");
  finalButtons.setAttribute("id", "finalButtons");
  secondaryDataContainer.appendChild(finalButtons);
  //------------------------------------------------------------------
  //cancelButton:
  //------------------------------------------------------------------
  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("id", "cancelButton");
  finalButtons.appendChild(cancelButton);
  cancelButton.appendChild(document.createTextNode("Cancelar"));
  cancelButton.style.cursor = "pointer";
  cancelButton.addEventListener("click", () => {
    location.reload();
  });
  //------------------------------------------------------------------
  //saveContactButton:
  //------------------------------------------------------------------
  const saveContactButton = document.createElement("button");
  saveContactButton.setAttribute("id", "saveContactButton");
  finalButtons.appendChild(saveContactButton);
  saveContactButton.appendChild(document.createTextNode("Guardar contacto"));
  saveContactButton.style.cursor = "pointer";
  saveContactButton.addEventListener("click", async () => {
    console.log(contactPrincipalDataNameInput.value);
    console.log(contactPrincipalDataLastnameInput.value);
    console.log(contactPrincipalDataPositionInput.value);
    console.log(contactPrincipalDataEmailInput.value);
    console.log(secondaryDataFirstDivAddressInput.value);
    console.log(contactPrincipalDataCompanyInput.value);
    console.log(secondaryDataFirstDivRegionSelect.value);
    console.log(secondaryDataFirstDivCountrySelect.value);
    console.log(secondaryDataFirstDivCitySelect.value);
    console.log(porcentualInterestSelect.value);
    let contactPost = await axios.put(
      `http://localhost:3000/contact/update/${contactId}`,
      {
        contactName: contactPrincipalDataNameInput.value,
        lastname: contactPrincipalDataLastnameInput.value,
        position: contactPrincipalDataPositionInput.value,
        address: secondaryDataFirstDivAddressInput.value,
        email: contactPrincipalDataEmailInput.value,
        companyId: contactPrincipalDataCompanyInput.value,
        regionId: secondaryDataFirstDivRegionSelect.value,
        countryId: secondaryDataFirstDivCountrySelect.value,
        cityId: secondaryDataFirstDivCitySelect.value,
        interest: porcentualInterestSelect.value,
        usertableId: id,
      },
      config
    );
    // let channelsPost = await axios.put(`http://localhost:3000/contact/channelCreate/${}`)
  });
}
