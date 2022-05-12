const id = window.localStorage.getItem("id");
const token = localStorage.getItem("token");
const config = { headers: { Authorization: `Bearer ${token}` } };
const contactDashboardDynamic = document.getElementById("contactDashboardDynamic");
const addContact = document.getElementById("addContact");
const blurSection = document.getElementById("blurSection");
const contactSection = document.getElementById("contactSection");
const contactsDashboardContactsOrderImg = document.getElementById("contactsDashboardContactsOrderImg");
const contactsDashboardCountryRegionOrderImg = document.getElementById("contactsDashboardCountryRegionOrderImg");
const contactsDashboardCompanyOrderImg = document.getElementById("contactsDashboardCompanyOrderImg");
const contactsDashboardPositionsOrderImg = document.getElementById("contactsDashboardPositionsOrderImg");
const contactsDashboardInterestsOrderImg = document.getElementById("contactsDashboardInterestsOrderImg");

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
    console.log(contacts.data);

    let regions = await axios.get(
        "http://localhost:3000/region/dashboard",
        config
    );

    let companies = await axios.get(
        "http://localhost:3000/company/dashboard",
        config
    );

    let countries = await axios.get(
        "http://localhost:3000/country/dashboard",
        config
    );

    let users = await axios.get(
        "http://localhost:3000/user/dashboard",
        config
    );

    for (let contactIndex = 0; contactIndex < contacts.data.length; contactIndex++) {
        for (let companyIndex = 0; companyIndex < companies.data.length; companyIndex++) {
            if (contacts.data[contactIndex].companyId == companies.data[companyIndex].id) {
                contacts.data[contactIndex].companyName = companies.data[companyIndex].name;
            }
        }
    }

    for (let contactIndex = 0; contactIndex < contacts.data.length; contactIndex++) {
        for (let regionIndex = 0; regionIndex < regions.data.length; regionIndex++) {
            if (contacts.data[contactIndex].regionId == regions.data[regionIndex].id) {
                contacts.data[contactIndex].regionName = regions.data[regionIndex].regionName;
            }
        }
    }

    for (let regionIndex = 0; regionIndex < regions.data.length; regionIndex++) {
        regions.data[regionIndex].countries = [];
        for (let countryIndex = 0; countryIndex < countries.data.length; countryIndex++) {
            if (regions.data[regionIndex].id == countries.data[countryIndex].regionId) {
                regions.data[regionIndex].countries.push(countries.data[countryIndex].name);
                console.log(countries.data[countryIndex].name);

            }
        }
    }


    for (let contactIndex = 0; contactIndex < contacts.data.length; contactIndex++) {
        if (contacts.data[contactIndex].usertableId == id) {
            contactsFullData.push(contacts.data[contactIndex]);
        }
    }
    // console.log(contactsFullData);

    // console.log();
    // if (contacts.data[contactIndex].usertableId == id) {
    //     contactsFullData.push(contacts.data[contactIndex]);
    //     console.log(contactsFullData);
    // }
    showContacts(contacts.data);
};

getContacts();

function createPrimaryData() {
    //----------------------------------------
    // PRINCIPAL DATA
    //----------------------------------------
    //contactPrincipalDataContainer:
    const contactPrincipalDataContainer = document.createElement("div");
    contactPrincipalDataContainer.setAttribute("id", "contactPrincipalDataContainer");
    createContactContainer.appendChild(contactPrincipalDataContainer);
    contactPrincipalDataContainer.style.width = "96%";
    contactPrincipalDataContainer.style.backgroundColor = "white";
    contactPrincipalDataContainer.style.position = "absolute";
    contactPrincipalDataContainer.style.top = "4vw";
    contactPrincipalDataContainer.style.height = "10vw";
    contactPrincipalDataContainer.style.margin = "0 0 0 2% ";
    //contactPrincipalDataPhotoDiv:
    const contactPrincipalDataPhotoDiv = document.createElement("div");
    contactPrincipalDataPhotoDiv.setAttribute("id", "contactPrincipalDataPhotoDiv");
    contactPrincipalDataContainer.appendChild(contactPrincipalDataPhotoDiv);
    //contactPrincipalDataPhotoPlusIcon:
    const contactPrincipalDataPhotoPlusIcon = document.createElement("div");
    contactPrincipalDataPhotoPlusIcon.setAttribute("id", "contactPrincipalDataPhotoPlusIcon");
    contactPrincipalDataPhotoDiv.appendChild(contactPrincipalDataPhotoPlusIcon);
    //contactPrincipalDataPhoto:
    const contactPrincipalDataPhoto = document.createElement("img");
    contactPrincipalDataPhoto.setAttribute("id", "contactPrincipalDataPhoto");
    contactPrincipalDataPhoto.setAttribute("src", "./assets/person-fill.png");
    contactPrincipalDataPhotoPlusIcon.appendChild(contactPrincipalDataPhoto);
    //contactPrincipalDataPhotoIcon:
    const contactPrincipalDataPhotoIconDiv = document.createElement("div");
    contactPrincipalDataPhotoIconDiv.setAttribute("id", "contactPrincipalDataPhotoIconDiv");
    contactPrincipalDataPhotoPlusIcon.appendChild(contactPrincipalDataPhotoIconDiv);
    const contactPrincipalDataPhotoIcon = document.createElement("img");
    contactPrincipalDataPhotoIcon.setAttribute("id", "contactPrincipalDataPhotoIcon");
    contactPrincipalDataPhotoIcon.setAttribute("src", "./assets/camera-fill.png");
    contactPrincipalDataPhotoIconDiv.appendChild(contactPrincipalDataPhotoIcon);
    //contactName:
    //Container:
    const contactPrincipalDataNameContainer = document.createElement("div"); contactPrincipalDataNameContainer.setAttribute("id", "contactPrincipalDataNameContainer");
    contactPrincipalDataContainer.appendChild(contactPrincipalDataNameContainer);
    //div
    const contactPrincipalDataNameTitleDiv = document.createElement("div");
    contactPrincipalDataNameTitleDiv.setAttribute("id", "contactPrincipalDataNameTitleDiv");
    contactPrincipalDataNameContainer.appendChild(contactPrincipalDataNameTitleDiv);
    //Title:
    const contactPrincipalDataNameTitle = document.createElement("p");
    contactPrincipalDataNameTitle.setAttribute("id", "contactPrincipalDataNameTitle");
    contactPrincipalDataNameTitleDiv.appendChild(contactPrincipalDataNameTitle)
        ;
    contactPrincipalDataNameTitle.appendChild(document.createTextNode("Nombre"));
    //asterisco
    const asteriscoRedName = document.createElement("span");
    asteriscoRedName.setAttribute("class", "asteriscoRed");
    contactPrincipalDataNameTitleDiv.appendChild(asteriscoRedName);
    asteriscoRedName.appendChild(document.createTextNode("*"));
    //input
    const contactPrincipalDataNameInput = document.createElement("input");
    contactPrincipalDataNameInput.setAttribute("id", "contactPrincipalDataNameInput");
    contactPrincipalDataNameContainer.appendChild(contactPrincipalDataNameInput);
    //contactLastname:
    //Container:
    const contactPrincipalDataLastnameContainer = document.createElement("div"); contactPrincipalDataLastnameContainer.setAttribute("id", "contactPrincipalDataLastnameContainer");
    contactPrincipalDataContainer.appendChild(contactPrincipalDataLastnameContainer);
    //div
    const contactPrincipalDataLastnameTitleDiv = document.createElement("div");
    contactPrincipalDataLastnameTitleDiv.setAttribute("id", "contactPrincipalDataLastnameTitleDiv");
    contactPrincipalDataLastnameContainer.appendChild(contactPrincipalDataLastnameTitleDiv);
    //Title:
    const contactPrincipalDataLastnameTitle = document.createElement("p");
    contactPrincipalDataLastnameTitle.setAttribute("id", "contactPrincipalDataLastnameTitle");
    contactPrincipalDataLastnameTitleDiv.appendChild(contactPrincipalDataLastnameTitle)
        ;
    contactPrincipalDataLastnameTitle.appendChild(document.createTextNode("Apellido"));
    //asterisco
    const asteriscoRedLastname = document.createElement("span");
    asteriscoRedLastname.setAttribute("class", "asteriscoRed");
    contactPrincipalDataLastnameTitleDiv.appendChild(asteriscoRedLastname);
    asteriscoRedLastname.appendChild(document.createTextNode("*"));
    //input
    const contactPrincipalDataLastnameInput = document.createElement("input");
    contactPrincipalDataLastnameInput.setAttribute("id", "contactPrincipalDataLastnameInput");
    contactPrincipalDataLastnameContainer.appendChild(contactPrincipalDataLastnameInput);
    //contactPosition:
    //Container:
    const contactPrincipalDataPositionContainer = document.createElement("div"); contactPrincipalDataPositionContainer.setAttribute("id", "contactPrincipalDataPositionContainer");
    contactPrincipalDataContainer.appendChild(contactPrincipalDataPositionContainer);
    //div
    const contactPrincipalDataPositionTitleDiv = document.createElement("div");
    contactPrincipalDataPositionTitleDiv.setAttribute("id", "contactPrincipalDataPositionTitleDiv");
    contactPrincipalDataPositionContainer.appendChild(contactPrincipalDataPositionTitleDiv);
    //Title:
    const contactPrincipalDataPositionTitle = document.createElement("p");
    contactPrincipalDataPositionTitle.setAttribute("id", "contactPrincipalDataPositionTitle");
    contactPrincipalDataPositionTitleDiv.appendChild(contactPrincipalDataPositionTitle)
        ;
    contactPrincipalDataPositionTitle.appendChild(document.createTextNode("Cargo"));
    //asterisco
    const asteriscoRedPosition = document.createElement("span");
    asteriscoRedPosition.setAttribute("class", "asteriscoRed");
    contactPrincipalDataPositionTitleDiv.appendChild(asteriscoRedPosition);
    asteriscoRedPosition.appendChild(document.createTextNode("*"));
    //input
    const contactPrincipalDataPositionInput = document.createElement("input");
    contactPrincipalDataPositionInput.setAttribute("id", "contactPrincipalDataPositionInput");
    contactPrincipalDataPositionContainer.appendChild(contactPrincipalDataPositionInput);
    //contactEmail:
    //Container:
    const contactPrincipalDataEmailContainer = document.createElement("div"); contactPrincipalDataEmailContainer.setAttribute("id", "contactPrincipalDataEmailContainer");
    contactPrincipalDataContainer.appendChild(contactPrincipalDataEmailContainer);
    //div
    const contactPrincipalDataEmailTitleDiv = document.createElement("div");
    contactPrincipalDataEmailTitleDiv.setAttribute("id", "contactPrincipalDataEmailTitleDiv");
    contactPrincipalDataEmailContainer.appendChild(contactPrincipalDataEmailTitleDiv);
    //Title:
    const contactPrincipalDataEmailTitle = document.createElement("p");
    contactPrincipalDataEmailTitle.setAttribute("id", "contactPrincipalDataEmailTitle");
    contactPrincipalDataEmailTitleDiv.appendChild(contactPrincipalDataEmailTitle)
        ;
    contactPrincipalDataEmailTitle.appendChild(document.createTextNode("Email"));
    //asterisco
    const asteriscoRedEmail = document.createElement("span");
    asteriscoRedEmail.setAttribute("class", "asteriscoRed");
    contactPrincipalDataEmailTitleDiv.appendChild(asteriscoRedEmail);
    asteriscoRedEmail.appendChild(document.createTextNode("*"));
    //input
    const contactPrincipalDataEmailInput = document.createElement("input");
    contactPrincipalDataEmailInput.setAttribute("id", "contactPrincipalDataEmailInput");
    contactPrincipalDataEmailContainer.appendChild(contactPrincipalDataEmailInput);
    //contactCompany:
    //Container:
    const contactPrincipalDataCompanyContainer = document.createElement("div"); contactPrincipalDataCompanyContainer.setAttribute("id", "contactPrincipalDataCompanyContainer");
    contactPrincipalDataContainer.appendChild(contactPrincipalDataCompanyContainer);
    //div
    const contactPrincipalDataCompanyTitleDiv = document.createElement("div");
    contactPrincipalDataCompanyTitleDiv.setAttribute("id", "contactPrincipalDataCompanyTitleDiv");
    contactPrincipalDataCompanyContainer.appendChild(contactPrincipalDataCompanyTitleDiv);
    //Title:
    const contactPrincipalDataCompanyTitle = document.createElement("p");
    contactPrincipalDataCompanyTitle.setAttribute("id", "contactPrincipalDataCompanyTitle");
    contactPrincipalDataCompanyTitleDiv.appendChild(contactPrincipalDataCompanyTitle)
        ;
    contactPrincipalDataCompanyTitle.appendChild(document.createTextNode("Compañia"));
    //asterisco
    const asteriscoRedCompany = document.createElement("span");
    asteriscoRedCompany.setAttribute("class", "asteriscoRed");
    contactPrincipalDataCompanyTitleDiv.appendChild(asteriscoRedCompany);
    asteriscoRedCompany.appendChild(document.createTextNode("*"));
    //input
    const contactPrincipalDataCompanyInput = document.createElement("input");
    contactPrincipalDataCompanyInput.setAttribute("id", "contactPrincipalDataCompanyInput");
    contactPrincipalDataCompanyContainer.appendChild(contactPrincipalDataCompanyInput);
    contactPrincipalDataCompanyInput.setAttribute("placeholder", "Ingresar nombre de compañia");

}

function createSecondaryData() {
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
    const secondaryDataFirstDivRegion = document.createElement("div"); secondaryDataFirstDivRegion.setAttribute("id", "secondaryDataFirstDivRegion");
    secondaryDataFirstDiv.appendChild(secondaryDataFirstDivRegion);
    //Title:
    const secondaryDataFirstDivRegionTitle = document.createElement("p");
    secondaryDataFirstDivRegionTitle.setAttribute("id", "secondaryDataFirstDivRegionTitle");
    secondaryDataFirstDivRegion.appendChild(secondaryDataFirstDivRegionTitle)
        ;
    secondaryDataFirstDivRegionTitle.appendChild(document.createTextNode("Región"));
    //select:
    const secondaryDataFirstDivRegionSelect = document.createElement("select");
    secondaryDataFirstDivRegionSelect.setAttribute("id", "secondaryDataFirstDivRegionSelect");
    secondaryDataFirstDivRegion.appendChild(secondaryDataFirstDivRegionSelect);
    //------------------------------------------------------------------
    //Country:
    //------------------------------------------------------------------
    const secondaryDataFirstDivCountry = document.createElement("div"); secondaryDataFirstDivCountry.setAttribute("id", "secondaryDataFirstDivCountry");
    secondaryDataFirstDiv.appendChild(secondaryDataFirstDivCountry);
    //Title:
    const secondaryDataFirstDivCountryTitle = document.createElement("p");
    secondaryDataFirstDivCountryTitle.setAttribute("id", "secondaryDataFirstDivCountryTitle");
    secondaryDataFirstDivCountry.appendChild(secondaryDataFirstDivCountryTitle)
        ;
    secondaryDataFirstDivCountryTitle.appendChild(document.createTextNode("País"));
    //select:
    const secondaryDataFirstDivCountrySelect = document.createElement("select");
    secondaryDataFirstDivCountrySelect.setAttribute("id", "secondaryDataFirstDivCountrySelect");
    secondaryDataFirstDivCountry.appendChild(secondaryDataFirstDivCountrySelect);
    //------------------------------------------------------------------
    //City:
    //------------------------------------------------------------------
    const secondaryDataFirstDivCity = document.createElement("div"); secondaryDataFirstDivCity.setAttribute("id", "secondaryDataFirstDivCity");
    secondaryDataFirstDiv.appendChild(secondaryDataFirstDivCity);
    //Title:
    const secondaryDataFirstDivCityTitle = document.createElement("p");
    secondaryDataFirstDivCityTitle.setAttribute("id", "secondaryDataFirstDivCityTitle");
    secondaryDataFirstDivCity.appendChild(secondaryDataFirstDivCityTitle)
        ;
    secondaryDataFirstDivCityTitle.appendChild(document.createTextNode("Ciudad"));
    //select:
    const secondaryDataFirstDivCitySelect = document.createElement("select");
    secondaryDataFirstDivCitySelect.setAttribute("id", "secondaryDataFirstDivCitySelect");
    secondaryDataFirstDivCity.appendChild(secondaryDataFirstDivCitySelect);
    //------------------------------------------------------------------
    //Address:
    //------------------------------------------------------------------
    //div
    const secondaryDataFirstDivAddress = document.createElement("div"); secondaryDataFirstDivAddress.setAttribute("id", "secondaryDataFirstDivAddress");
    secondaryDataFirstDiv.appendChild(secondaryDataFirstDivAddress);
    //Title:
    const secondaryDataFirstDivAddressTitle = document.createElement("p");
    secondaryDataFirstDivAddressTitle.setAttribute("id", "secondaryDataFirstDivAddressTitle");
    secondaryDataFirstDivAddress.appendChild(secondaryDataFirstDivAddressTitle)
        ;
    secondaryDataFirstDivAddressTitle.appendChild(document.createTextNode("Direccion"));
    //input:
    const secondaryDataFirstDivAddressInput = document.createElement("input");
    secondaryDataFirstDivAddressInput.setAttribute("id", "secondaryDataFirstDivAddressInput");
    secondaryDataFirstDivAddress.appendChild(secondaryDataFirstDivAddressInput);
    secondaryDataFirstDivAddressInput.setAttribute("placeholder", "Ingresa una dirección")
    //------------------------------------------------------------------
    //Interes:
    //------------------------------------------------------------------
    //div
    const secondaryDataFirstDivInterest = document.createElement("div");
    secondaryDataFirstDivInterest.setAttribute("id", "secondaryDataFirstDivInterest");
    secondaryDataFirstDiv.appendChild(secondaryDataFirstDivInterest);
    //titlePlusBar:
    const interestTitlePlusBar = document.createElement("div");
    interestTitlePlusBar.setAttribute("id", "interestTitlePlusBar");
    secondaryDataFirstDivInterest.appendChild(interestTitlePlusBar);
    //title
    const secondaryDataFirstDivInterestTitle = document.createElement("p");
    secondaryDataFirstDivInterestTitle.setAttribute("id", "secondaryDataFirstDivInterestTitle");
    interestTitlePlusBar.appendChild(secondaryDataFirstDivInterestTitle);
    secondaryDataFirstDivInterestTitle.appendChild(document.createTextNode("Intéres"));
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
    const secondaryDataSecondDivChannel = document.createElement("div"); secondaryDataSecondDivChannel.setAttribute("id", "secondaryDataSecondDivChannel");
    secondaryDataSecondDiv.appendChild(secondaryDataSecondDivChannel);
    //Title:
    const secondaryDataSecondDivChannelTitle = document.createElement("p");
    secondaryDataSecondDivChannelTitle.setAttribute("id", "secondaryDataSecondDivChannelTitle");
    secondaryDataSecondDivChannel.appendChild(secondaryDataSecondDivChannelTitle)
        ;
    secondaryDataSecondDivChannelTitle.appendChild(document.createTextNode("Canal de contacto"));
    //select:
    const secondaryDataSecondDivChannelSelect = document.createElement("select");
    secondaryDataSecondDivChannelSelect.setAttribute("id", "secondaryDataSecondDivChannelSelect");
    secondaryDataSecondDivChannel.appendChild(secondaryDataSecondDivChannelSelect);
    //------------------------------------------------------------------
    //username:
    //------------------------------------------------------------------
    //div
    const secondaryDataSecondDivUsername = document.createElement("div"); secondaryDataSecondDivUsername.setAttribute("id", "secondaryDataSecondDivUsername");
    secondaryDataSecondDiv.appendChild(secondaryDataSecondDivUsername);
    //Title:
    const secondaryDataSecondDivUsernameTitle = document.createElement("p");
    secondaryDataSecondDivUsernameTitle.setAttribute("id", "secondaryDataSecondDivUsernameTitle");
    secondaryDataSecondDivUsername.appendChild(secondaryDataSecondDivUsernameTitle)
        ;
    secondaryDataSecondDivUsernameTitle.appendChild(document.createTextNode("Cuenta de usuario"));
    //input:
    const secondaryDataSecondDivUsernameInput = document.createElement("input");
    secondaryDataSecondDivUsernameInput.setAttribute("id", "secondaryDataSecondDivUsernameInput");
    secondaryDataSecondDivUsername.appendChild(secondaryDataSecondDivUsernameInput);
    secondaryDataSecondDivUsernameInput.setAttribute("placeholder", "@ejemplo");
    //------------------------------------------------------------------
    //Contact Preferences:
    //------------------------------------------------------------------
    const secondaryDataSecondDivPreferences = document.createElement("div"); secondaryDataSecondDivPreferences.setAttribute("id", "secondaryDataSecondDivPreferences");
    secondaryDataSecondDiv.appendChild(secondaryDataSecondDivPreferences);
    //Title:
    const secondaryDataSecondDivPreferencesTitle = document.createElement("p");
    secondaryDataSecondDivPreferencesTitle.setAttribute("id", "secondaryDataSecondDivPreferencesTitle");
    secondaryDataSecondDivPreferences.appendChild(secondaryDataSecondDivPreferencesTitle)
        ;
    secondaryDataSecondDivPreferencesTitle.appendChild(document.createTextNode("Canal de contacto"));
    //select:
    const secondaryDataSecondDivPreferencesSelect = document.createElement("select");
    secondaryDataSecondDivPreferencesSelect.setAttribute("id", "secondaryDataSecondDivPreferencesSelect");
    secondaryDataSecondDivPreferences.appendChild(secondaryDataSecondDivPreferencesSelect);
    //------------------------------------------------------------------
    //Add channel:
    //------------------------------------------------------------------
    //div
    const secondaryDataSecondDivAddChannel = document.createElement("div");
    secondaryDataSecondDivAddChannel.setAttribute("id", "secondaryDataSecondDivAddChannel");
    secondaryDataSecondDiv.appendChild(secondaryDataSecondDivAddChannel);
    //plusIcon:
    const secondaryDataSecondDivAddChannelIcon = document.createElement("img");
    secondaryDataSecondDivAddChannelIcon.setAttribute("id", "secondaryDataSecondDivAddChannelIcon");
    secondaryDataSecondDivAddChannel.appendChild(secondaryDataSecondDivAddChannelIcon);
    secondaryDataSecondDivAddChannelIcon.setAttribute("src", "./assets/plus.png");
    //text:
    const secondaryDataSecondDivAddChannelText = document.createElement("p");
    secondaryDataSecondDivAddChannelText.setAttribute("id", "secondaryDataSecondDivAddChannelText");
    secondaryDataSecondDivAddChannel.appendChild(secondaryDataSecondDivAddChannelText);
    secondaryDataSecondDivAddChannelText.appendChild(document.createTextNode("Agregar canal"));
}

function addContactFunction() {
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
    //============================================
    // PIMARY DATA:
    //============================================
    createPrimaryData();
    //============================================
    // SECONDARY DATA:
    //============================================
    createSecondaryData();
    //------------------------------------------------------------------
    // FINALS BUTTONS
    //------------------------------------------------------------------
    const finalButtons = document.createElement("div");
    finalButtons.setAttribute("id", "finalButtons");
    secondaryDataContainer.appendChild(finalButtons);
    //cancelButton:
    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("id", "cancelButton");
    finalButtons.appendChild(cancelButton)
    cancelButton.appendChild(document.createTextNode("Cancelar"));
    //saveContactButton:
    const saveContactButton = document.createElement("button");
    saveContactButton.setAttribute("id", "saveContactButton");
    finalButtons.appendChild(saveContactButton)
    saveContactButton.appendChild(document.createTextNode("Guardar contacto"));
}

function showContacts(contacts) {
    // console.log(contacts);
    for (let contact of contactsFullData) {
        console.log(contact);
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
        const contactImg = document.createElement("img");
        contactImg.setAttribute("src", contact.image);
        contactImg.setAttribute("class", "contactImg");
        contactPersonalInfo.appendChild(contactImg);
        // contactNamePlusEmail:
        const contactNamePlusEmail = document.createElement("div");
        contactNamePlusEmail.setAttribute("class", "contactNamePlusEmail");
        contactPersonalInfo.appendChild(contactNamePlusEmail);
        // contactName:
        const contactName = document.createElement("p");
        contactName.setAttribute("class", "contactName");
        contactName.appendChild(document.createTextNode(contact.name + " " + contact.lastname));
        contactNamePlusEmail.appendChild(contactName);
        // ContactEmail:
        const contactEmail = document.createElement("p");
        contactEmail.setAttribute("class", "contactEmail");
        contactEmail.appendChild(document.createTextNode(contact.email))
        contactNamePlusEmail.appendChild(contactEmail);
        //ContactCountryPlusRegion:
        const contactCountryPlusRegion = document.createElement("ccontactCountryPlusRegion");
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
        contactRegion.appendChild(document.createTextNode(contact.region));
        //contactCompany:
        const contactCompany = document.createElement("p");
        contactCompany.setAttribute("class", "contactCompany");
        contactDiv.appendChild(contactCompany);
        contactCompany.appendChild(document.createTextNode(contact.company));
        //contactPosition:
        const contactPosition = document.createElement("p");
        contactPosition.setAttribute("class", "contactPosition");
        contactDiv.appendChild(contactPosition);
        contactPosition.appendChild(document.createTextNode(contact.position));
        //-------------------------------------------------------------
        //contactPreferedChannel:
        //-------------------------------------------------------------
        const contactPreferedChannelContainer = document.createElement("div");
        contactPreferedChannelContainer.setAttribute("class", "contactPreferedChannelContainer");
        contactDiv.appendChild(contactPreferedChannelContainer);
        if (contact.channels.length > 2) {
            //Agregar boton ... en el caso de que el usuario tenga mas de 2 canales preferidos de contatos y que al apretar agrande el div y los muestre.
            //div
            let channel1 = document.createElement("div")
            channel1.setAttribute("attribute", "channel1");
            contactPreferedChannelContainer.appendChild(channel1);
            channel1.setAttribute("class", "contactPreferedChannelDiv");
            //p
            let channel1Text = document.createElement("p");
            channel1.appendChild(channel1Text);
            channel1Text.setAttribute("attribute", "channel1Text");
            channel1Text.setAttribute("class", "contactPrefreredChannelText");
            channel1Text.appendChild(document.createTextNode(contact.channels[0]));
            //div
            let channel2 = document.createElement("div")
            channel2.setAttribute("attribute", "channel2");
            contactPreferedChannelContainer.appendChild(channel2);
            channel2.setAttribute("class", "contactPreferedChannelDiv");
            //p
            let channel2Text = document.createElement("p");
            channel2.appendChild(channel2Text);
            channel2Text.setAttribute("attribute", "channel2Text");
            channel2Text.setAttribute("class", "contactPrefreredChannelText");
            channel2Text.appendChild(document.createTextNode(contact.channels[1]));
            //button
            const channelsButton = document.createElement("button");
            channelsButton.appendChild(document.createTextNode("..."));
            contactPreferedChannelContainer.appendChild(channelsButton);
            channelsButton.addEventListener("click", (channelsButtonEvent) => {
                currentContactDiv = contactDiv;
                currentContactDiv.style.height = "auto";
                channel1.style.display = "none";
                channel2.style.display = "none";
                channelsButton.style.display = "none";
                contactPreferedChannelContainer.style.margin = "1vw 0.5vw"
                contactPreferedChannelContainer.style.flexWrap = "wrap";
                contactImg.style.display = "none";
                contact.channels.forEach(channel => {
                    //father
                    contactPreferedChannelContainer.setAttribute("class", `contactPreferedChannelContainer current`);
                    //children
                    const contactPreferedChannelDiv = document.createElement("div");
                    contactPreferedChannelDiv.setAttribute("class", `contactPreferedChannelDiv created ${contact.name}`);
                    contactPreferedChannelContainer.appendChild(contactPreferedChannelDiv);
                    //text
                    const contactPrefreredChannelText = document.createElement("p");
                    contactPrefreredChannelText.setAttribute("class", "contactPrefreredChannelText");
                    contactPreferedChannelDiv.appendChild(contactPrefreredChannelText);
                    contactPrefreredChannelText.appendChild(document.createTextNode(channel));
                    contactPreferedChannelDiv.style.margin = "0.5vw";
                });

                const revertButton = document.createElement("button");
                revertButton.setAttribute("class", "revertButton");
                revertButton.setAttribute("id", `${contact.name}`)
                revertButton.appendChild(document.createTextNode("<<<"));
                revertButton.setAttribute("onclick", "deleteChildren(this)");
                revertButton.addEventListener('click', () => {
                    console.log(channel1);
                    channel1.style.display = "flex";
                    channel2.style.display = "flex";
                    channelsButton.style.display = "flex";
                    revertButton.remove();
                    contactImg.style.display = "block";
                    contactDiv.style.height = "6vw";
                })
                contactPreferedChannelContainer.appendChild(revertButton);
            })

        } else {
            contact.channels.forEach(channel => {
                // console.log(channel);
                const contactPreferedChannelDiv = document.createElement("div");
                contactPreferedChannelDiv.setAttribute("class", "contactPreferedChannelDiv");
                contactPreferedChannelContainer.appendChild(contactPreferedChannelDiv);
                const contactPrefreredChannelText = document.createElement("p");
                contactPrefreredChannelText.setAttribute("class", "contactPrefreredChannelText");
                contactPreferedChannelDiv.appendChild(contactPrefreredChannelText);
                contactPrefreredChannelText.appendChild(document.createTextNode(channel));
            });
        }
        //contactInterest:
        //contactInterestContainer:
        const contactInterestConteiner = document.createElement("div");
        contactInterestConteiner.setAttribute("class", "contactInterestConteiner");
        contactDiv.appendChild(contactInterestConteiner);
        //contactInterestNumber:
        const contactInterestNumber = document.createElement("p");
        contactInterestNumber.setAttribute("class", "contactInterestNumber");
        contactInterestNumber.appendChild(document.createTextNode(contact.interest.toString() + "%"));
        contactInterestConteiner.appendChild(contactInterestNumber);
        //contactInterestBar:
        const contactInterestBar = document.createElement("div");
        contactInterestBar.setAttribute("class", "contactInterestBar");
        contactInterestConteiner.appendChild(contactInterestBar);
        const contactInterestColoredBar = document.createElement("div");
        contactInterestColoredBar.setAttribute("class", "contactInterestColoredBar");
        if (contact.interest == 0) {
            contactInterestColoredBar.style.width = "0%";
            contactInterestColoredBar.style.background = "none";
        } if (contact.interest == 25) {
            contactInterestColoredBar.style.width = "25%";
            contactInterestColoredBar.style.background = "blue";
        } if (contact.interest == 50) {
            contactInterestColoredBar.style.width = "50%";
            contactInterestColoredBar.style.background = "yellow";
        } if (contact.interest == 75) {
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
        contactAccionsButtonContainer.setAttribute("class", "contactAccionsButtonContainer");
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
};

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
        return (a.name > b.name) ? 1 : -1
    })
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})

contactsDashboardContactsOrderImg.addEventListener("dblclick", () => {
    contactsFullData.sort((a, b) => {
        return (a.name > b.name) ? 1 : -1
    })
    contactsFullData.reverse();
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})

contactsDashboardCountryRegionOrderImg.addEventListener("click", () => {
    contactsFullData.sort((a, b) => {
        return (a.country > b.country) ? 1 : -1
    })
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})

contactsDashboardCountryRegionOrderImg.addEventListener("dblclick", () => {
    contactsFullData.sort((a, b) => {
        return (a.country > b.country) ? 1 : -1
    })
    contactsFullData.reverse();
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})

contactsDashboardCompanyOrderImg.addEventListener("click", () => {
    contactsFullData.sort((a, b) => {
        return (a.company > b.company) ? 1 : -1
    })
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})

contactsDashboardCompanyOrderImg.addEventListener("dblclick", () => {
    contactsFullData.sort((a, b) => {
        return (a.company > b.company) ? 1 : -1
    })
    contactsFullData.reverse();
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})

contactsDashboardPositionsOrderImg.addEventListener("click", () => {
    contactsFullData.sort((a, b) => {
        return (a.position > b.position) ? 1 : -1
    })
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})

contactsDashboardPositionsOrderImg.addEventListener("dblclick", () => {
    contactsFullData.sort((a, b) => {
        return (a.position > b.position) ? 1 : -1
    })
    contactsFullData.reverse();
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})

contactsDashboardInterestsOrderImg.addEventListener("click", () => {
    contactsFullData.sort((a, b) => {
        return (a.interest > b.interest) ? 1 : -1
    })
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})

contactsDashboardInterestsOrderImg.addEventListener("dblclick", () => {
    contactsFullData.sort((a, b) => {
        return (a.interest > b.interest) ? 1 : -1
    })
    contactsFullData.reverse();
    console.log(contactsFullData);
    contactDashboardDynamic.innerHTML = "";
    showContacts();
})


