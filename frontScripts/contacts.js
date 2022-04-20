const contactDashboardDynamic = document.getElementById("contactDashboardDynamic");

const contactsFullData = [
    {name: "Carolina Almagro", email:"caroGG@gmail.com",country: "Argentina", region:"South America", company:"Crunchyroll", position:"UI/UX", channels: "WhatsApp", interest:"75%"},
    {name: "Jorge Charulo", email:"jorgelitochar@hotmail.com",country: "Estados Unidos", region:"North America", company:"SpaceX", position:"RRHH", channels: "SMS", interest:"25%"},
    {name: "Eduardo Polimera", email:"eledu27@gmail.com",country: "Mexico", region:"Notth America", company:"Acamica", position:"Web Developer", channels: "Telegram", interest:"100%"},
    {name: "Milagros Sabrina Orione", email:"milasao@outlook.com",country: "Chile", region:"South America", company:"Starlink", position:"Accountant", channels: "Slack", interest:"0%"}
];

// const contactsRegionCity = [
//     {country: "Argentina", region:"South America"},
//     {country: "Estados Unidos", region:"North America"},
//     {country: "Mexico", region:"Notth America"},
//     {country: "Chile", region:"South America"}
// ];

// const contactsCompany = [
//      "Crunchyroll",
//      "SpaceX",
//      "Acamica",
//      "Starlink"
// ];

// const contactsPosition = [
//     "UI/UX",
//     "RRHH",
//     "Web Developer",
//     "Accountant"
// ];

// const contactsChannel = [
//     "WhatsApp",
//     "SMS",
//     "Telegram",
//     "Slack"
// ];

// const contactsInterest = [
//     "0%",
//     "25%",
//     "50%",
//     "75%",
//     "100%"
// ];



//Get contacts:
const getContacts = async () =>{
    for (let indexContact = 0; indexContact < contactsFullData.length; indexContact++) {
        contactsFullData[indexContact];
    }
    showContacts();
};

getContacts();



function showContacts(contacts) {
    for (let contact of contactsFullData) {
        console.log(contact);
        // create contactDiv
        const contactDiv = document.createElement("div");
        contactDiv.setAttribute("class", "contactDiv");
        contactDashboardDynamic.appendChild(contactDiv);
        //createCheckBox:
        const contactCheckBox = document.createElement("input");
        contactCheckBox.setAttribute("type", "checkbox");
        contactDiv.appendChild(contactCheckBox);
        // contactNamePlusEmail:
        const contactNamePlusEmail = document.createElement("div");
        contactNamePlusEmail.setAttribute("class", "contactNamePlusEmail"); 
        contactDiv.appendChild(contactNamePlusEmail);
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
        const contactCountryPlusRegion= document.createElement("ccontactCountryPlusRegion");
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
        contactCompany.setAttribute("claass", "contactCompany");
        contactDiv.appendChild(contactCompany);
        contactCompany.appendChild(document.createTextNode(contact.company));
        //contactPosition:
        const contactPosition = document.createElement()
    }
};
