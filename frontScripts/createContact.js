const saveContactButton = document.getElementById("saveContactButton");

//principal data
const contactPrincipalDataNameInput = document.getElementById("contactPrincipalDataNameInput");
const contactPrincipalDataLastnameInput = document.getElementById("contactPrincipalDataLastnameInput");
const contactPrincipalDataPositionInput = document.getElementById("contactPrincipalDataPositionInput");
const contactPrincipalDataEmailInput = document.getElementById("contactPrincipalDataEmailInput");
const contactPrincipalDataCompanyInput = document.getElementById("contactPrincipalDataCompanyInput");


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

async function createSecondaryData() {
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
    secondaryDataFirstDivCountrySelect.disabled = true;
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
    secondaryDataFirstDivCitySelect.disabled = true;
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
    secondaryDataFirstDivAddressInput.disabled = true;
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


    //AXIOS GETS
    let regiones = await axios.get(
        "http://localhost:3000/region/dashboard",
        config
    );

    let countries = await axios.get(
        "http://localhost:3000/country/dashboard",
        config
    );


    let cities = await axios.get(
        "http://localhost:3000/city/dashboard",
        config
    );
    //---------------------------
    // PLACE HOLDERS
    //---------------------------

    const placeholder = document.createElement("option", "Seleccionar Region");
    placeholder.appendChild(document.createTextNode("Seleccionar Región"));

    const placeholderCountry = document.createElement("option", "Seleccionar País");
    placeholderCountry.appendChild(document.createTextNode("Seleccionar País"));
    secondaryDataFirstDivCountrySelect.appendChild(placeholderCountry);

    const placeholderCity = document.createElement("option", "Seleccionar Ciudad");
    placeholderCity.appendChild(document.createTextNode("Seleccionar Ciudad"));
    secondaryDataFirstDivCitySelect.appendChild(placeholderCity);

    for (let regionIndex = 0; regionIndex < regiones.data.length; regionIndex++) {
        const option = document.createElement("option", regiones.data[regionIndex].id);
        option.setAttribute("value", regiones.data[regionIndex].id);
        option.setAttribute("name", regiones.data[regionIndex].regionName);
        secondaryDataFirstDivRegionSelect.appendChild(placeholder);
        secondaryDataFirstDivRegionSelect.appendChild(option).appendChild(document.createTextNode(regiones.data[regionIndex].regionName));
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
            for (let countryIndex = 0; countryIndex < countries.data.length; countryIndex++) {
                const option = document.createElement("option", countries.data[countryIndex].id);
                option.setAttribute("value", countries.data[countryIndex].id);
                option.setAttribute("name", countries.data[countryIndex].name);
                if (secondaryDataFirstDivRegionSelect.value == countries.data[countryIndex].regionId) {
                    secondaryDataFirstDivCountrySelect.appendChild(option).appendChild(document.createTextNode(countries.data[countryIndex].name));
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
                const option = document.createElement("option", cities.data[cityIndex].id);
                option.setAttribute("value", cities.data[cityIndex].id);
                option.setAttribute("name", cities.data[cityIndex].name);
                if (secondaryDataFirstDivCountrySelect.value == cities.data[cityIndex].countryId) {
                    secondaryDataFirstDivCitySelect.appendChild(option).appendChild(document.createTextNode(cities.data[cityIndex].name));
                }
            }
        }
    })

    secondaryDataFirstDivCitySelect.addEventListener("click", (event) => {
        console.log(secondaryDataFirstDivCitySelect.value);
        if (secondaryDataFirstDivCitySelect.value != "") {
            secondaryDataFirstDivAddressInput.disabled = false;
            secondaryDataFirstDivAddressInput.style.backgroundColor = "white";
        } else {
            secondaryDataFirstDivAddressInput.disabled = true;
            secondaryDataFirstDivAddressInput.style.backgroundColor = "#d5d5d5";
        }
    })

    const porcentualInterest = [0, 25, 50, 75, 100];


    for (let index = 0; index < porcentualInterest.length; index++) {
        const option = document.createElement("option", porcentualInterest[index]);
        option.setAttribute("value", porcentualInterest[index]);
        porcentualInterestSelect.appendChild(option).appendChild(document.createTextNode(option.value + "%"));
    }


    porcentualInterestSelect.addEventListener("click", (event) => {
        console.log(event.target.value);
        if (event.target.value == 100) {
            div1.style.backgroundColor = "red";
            div2.style.backgroundColor = "red";
            div3.style.backgroundColor = "red";
            div4.style.backgroundColor = "red";
            circleOfBar.style.left = "87%";
        } if (event.target.value == 75) {
            div1.style.backgroundColor = "orange";
            div2.style.backgroundColor = "orange";
            div3.style.backgroundColor = "orange";
            div4.style.backgroundColor = "white";
            circleOfBar.style.left = "82%";
        } if (event.target.value == 50) {
            div1.style.backgroundColor = "yellow";
            div2.style.backgroundColor = "yellow";
            div3.style.backgroundColor = "white";
            div4.style.backgroundColor = "white";
            circleOfBar.style.left = "78%";
        } if (event.target.value == 25) {
            div1.style.backgroundColor = "#39fbff";
            div2.style.backgroundColor = "white";
            div3.style.backgroundColor = "white";
            div4.style.backgroundColor = "white";
            circleOfBar.style.left = "74%";
        } if (event.target.value == 0) {
            div1.style.backgroundColor = "white";
            div2.style.backgroundColor = "white";
            div3.style.backgroundColor = "white";
            div4.style.backgroundColor = "white";
            circleOfBar.style.left = "69%";
        }
    })


}

function createChannel() {
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
    secondaryDataSecondDivPreferencesTitle.appendChild(document.createTextNode("Preferencias"));
    //select:
    const secondaryDataSecondDivPreferencesSelect = document.createElement("select");
    secondaryDataSecondDivPreferencesSelect.setAttribute("id", "secondaryDataSecondDivPreferencesSelect");
    secondaryDataSecondDivPreferences.appendChild(secondaryDataSecondDivPreferencesSelect);

    secondaryDataSecondDivUsernameInput.disabled = true;
    secondaryDataSecondDivPreferencesSelect.disabled = true;

    //-------------------------
    // Seleccionar Canal:
    //-------------------------
    const channelPlaceholder = document.createElement("option", "Seleccionar Canal");
    channelPlaceholder.appendChild(document.createTextNode("Seleccionar Canal"));

    const channels = ["Discord", "LinkedIn", "Telegram", "FaceBook", "Instagram", "WhatsApp", "Email", "SMS", "Slack", "Teléfono"];

    for (let channelIndex = 0; channelIndex < channels.length; channelIndex++) {
        secondaryDataSecondDivChannelSelect.appendChild(channelPlaceholder);
        const option = document.createElement("option", channels[channelIndex]);
        option.setAttribute("value", channels[channelIndex]);
        secondaryDataSecondDivChannelSelect.appendChild(option).appendChild(document.createTextNode(option.value));
    }


    secondaryDataSecondDivChannelSelect.addEventListener("click", () => {
        if (secondaryDataSecondDivChannelSelect.value != "Seleccionar Canal") {
            secondaryDataSecondDivUsernameInput.disabled = false;
            if (secondaryDataSecondDivChannelSelect.value == "Teléfono") {
                secondaryDataSecondDivUsernameInput.placeholder = "Ingresar numero teléfonico";
            } else {
                secondaryDataSecondDivUsernameInput.placeholder = "Ingresar URL red social";
            }
        } else {
            secondaryDataSecondDivUsernameInput.disabled = true;
            secondaryDataSecondDivPreferencesSelect.disabled = true;
            secondaryDataSecondDivUsernameInput.placeholder = "@ejemplo";
        }
    })

    secondaryDataSecondDivUsernameInput.addEventListener("keyup", () => {
        if (secondaryDataSecondDivUsernameInput.value != "") {
            secondaryDataSecondDivPreferencesSelect.disabled = false;
        } else {
            secondaryDataSecondDivPreferencesSelect.disabled = true;
        }
    })

    //-------------------------
    // Seleccionar Preferencia:
    //-------------------------
    const preferences = ["Sin Preferencias", "Canal Favorito", "No Molestar"];

    for (let index = 0; index < preferences.length; index++) {
        const option = document.createElement("option", preferences[index]);
        option.setAttribute("value", preferences[index]);
        secondaryDataSecondDivPreferencesSelect.appendChild(option).appendChild(document.createTextNode(option.value));
    }



    //------------------------------------------------------------------
    //Add channel:
    //------------------------------------------------------------------
    //div
    // const secondaryDataSecondDivAddChannel = document.createElement("div");
    // secondaryDataSecondDivAddChannel.setAttribute("id", "secondaryDataSecondDivAddChannel");
    // secondaryDataSecondDiv.appendChild(secondaryDataSecondDivAddChannel);
    // //plusIcon:
    // const secondaryDataSecondDivAddChannelIcon = document.createElement("img");
    // secondaryDataSecondDivAddChannelIcon.setAttribute("id", "secondaryDataSecondDivAddChannelIcon");
    // secondaryDataSecondDivAddChannel.appendChild(secondaryDataSecondDivAddChannelIcon);
    // secondaryDataSecondDivAddChannelIcon.setAttribute("src", "./assets/plus.png");
    // //text:
    // const secondaryDataSecondDivAddChannelText = document.createElement("p");
    // secondaryDataSecondDivAddChannelText.setAttribute("id", "secondaryDataSecondDivAddChannelText");
    // secondaryDataSecondDivAddChannel.appendChild(secondaryDataSecondDivAddChannelText);
    // secondaryDataSecondDivAddChannelText.appendChild(document.createTextNode("Agregar canal"));
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
    //============================================
    // CHANNEL:
    //============================================
    createChannel();
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





// saveContactButton.addEventListener("click", () => {
//     let save = axios.post(`http://localhost:3000/contact/create/${id}`, { "name": contactPrincipalDataNameInput.value, "lastname", "position", "username", "email", "interest", "preferences", "companyId", "regionId", "userTableId" })
// });

