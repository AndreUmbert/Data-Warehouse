const contactDashboardDynamic = document.getElementById("contactDashboardDynamic");
const addContact = document.getElementById("addContact");
const blurSection = document.getElementById("blurSection");
const contactSection = document.getElementById("contactSection");

const contactsFullData = [
    { name: "Carolina Almagro", email: "caroGG@gmail.com", country: "Argentina", region: "South America", company: "Crunchyroll", position: "UI/UX", channels: ["WhatsApp"], interest: "75%", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/800px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg" },
    { name: "Jorge Charulo", email: "jorgelitochar@hotmail.com", country: "Estados Unidos", region: "North America", company: "SpaceX", position: "RRHH", channels: ["SMS"], interest: "25%", image: "https://pbs.twimg.com/profile_images/1034722421528518656/NCb2tkr8_400x400.jpg" },
    { name: "Eduardo Polimera", email: "eledu27@gmail.com", country: "Mexico", region: "North America", company: "Acamica", position: "Web Developer", channels: ["Telegram"], interest: "100%", image: "https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1" },
    { name: "Milagros Sabrina Orione", email: "milasao@outlook.com", country: "Chile", region: "South America", company: "Starlink", position: "Accountant", channels: ["Slack", "WhatsApp"], interest: "50%", image: "https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1" }
];


//Get contacts:
const getContacts = async () => {
    for (let indexContact = 0; indexContact < contactsFullData.length; indexContact++) {
        contactsFullData[indexContact];
    }
    showContacts();
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
    for (let contact of contactsFullData) {
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
        contactName.appendChild(document.createTextNode(contact.name));
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
        contactCountry.appendChild(document.createTextNode(contact.country));
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
        //contactPreferedChannel:
        const contactPreferedChannelContainer = document.createElement("div");
        contactPreferedChannelContainer.setAttribute("class", "contactPreferedChannelContainer");
        contactDiv.appendChild(contactPreferedChannelContainer);
        if (contact.channels.length > 2) {
            //Agregar boton ... en el caso de que el usuario tenga mas de 2 canales preferidos de contatos y que al apretar agrande el div y los muestre.
        } else {
            const contactPreferedChannelDiv = document.createElement("div");
            contactPreferedChannelDiv.setAttribute("class", "contactPreferedChannelDiv");
            contactPreferedChannelContainer.appendChild(contactPreferedChannelDiv);
            const contactPrefreredChannelText = document.createElement("p");
            contactPrefreredChannelText.setAttribute("class", "contactPrefreredChannelText");
            contactPreferedChannelDiv.appendChild(contactPrefreredChannelText);
            contactPrefreredChannelText.appendChild(document.createTextNode(contact.channels));
            //sacar las "," entre cada uno de los elementos.
            // for (const iterator of object) {

            // }
        }
        //contactInterest:
        //contactInterestContainer:
        const contactInterestConteiner = document.createElement("div");
        contactInterestConteiner.setAttribute("class", "contactInterestConteiner");
        contactDiv.appendChild(contactInterestConteiner);
        //contactInterestNumber:
        const contactInterestNumber = document.createElement("p");
        contactInterestNumber.setAttribute("class", "contactInterestNumber");
        contactInterestNumber.appendChild(document.createTextNode(contact.interest));
        contactInterestConteiner.appendChild(contactInterestNumber);
        //contactInterestBar:
        const contactInterestBar = document.createElement("div");
        contactInterestBar.setAttribute("class", "contactInterestBar");
        contactInterestConteiner.appendChild(contactInterestBar);
        const contactInterestColoredBar = document.createElement("div");
        contactInterestColoredBar.setAttribute("class", "contactInterestColoredBar");
        if (contact.interest == "0%") {
            contactInterestColoredBar.style.width = "0%";
            contactInterestColoredBar.style.background = "none";
        } if (contact.interest == "25%") {
            contactInterestColoredBar.style.width = "25%";
            contactInterestColoredBar.style.background = "blue";
        } if (contact.interest == "50%") {
            contactInterestColoredBar.style.width = "50%";
            contactInterestColoredBar.style.background = "yellow";
        } if (contact.interest == "75%") {
            contactInterestColoredBar.style.width = "75%";
            contactInterestColoredBar.style.background = "orange";
        }
        if (contact.interest == "100%") {
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





