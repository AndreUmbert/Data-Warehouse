const contactDashboardDynamic = document.getElementById("contactDashboardDynamic");

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
        if (contact.channels.length > 2) {
            //Agregar boton ... en el caso de que el usuario tenga mas de 2 canales preferidos de contatos y que al apretar agrande el div y los muestre.
        } else {
            const contactPrefreredChannelDiv = document.createElement("div");
            contactPrefreredChannelDiv.setAttribute("class", "contactPrefreredChannelDiv");
            contactDiv.appendChild(contactPrefreredChannelDiv);
            const contactPrefreredChannelText = document.createElement("p");
            contactPrefreredChannelText.setAttribute("class", "contactPrefreredChannelText");
            contactPrefreredChannelDiv.appendChild(contactPrefreredChannelText);
            contactPrefreredChannelText.appendChild(document.createTextNode(contact.channels));
            //sacar las "," entre cada uno de los elementos.
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

