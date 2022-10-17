const Channel = require("./channel");
const City = require("./city");
const Company = require("./company");
const Country = require("./country");
const Region = require("./region");
const Rol = require("./rol");
const User = require("./user");
const Contact = require("./contact");
const ChannelHasContact = require("./channelHasContact");

User.belongsTo(Rol, {
    foreignKey: "rolId"
});

Contact.belongsTo(Company, {
    foreignKey: "companyId"
});

Contact.belongsTo(User, {
    foreignKey: "userTableId"
});

Channel.belongsTo(Contact, {
    foreignKey: "contactId"
});

Contact.belongsTo(Region, {
    foreignKey: "regionId"
});


Contact.belongsTo(Region, {
    foreignKey: "cityId"
});

Country.belongsTo(Region, {
    foreignKey: "regionId"
});

City.belongsTo(Country, {
    foreignKey: "countryId"
});

User.belongsTo(Contact, {
    foreignKey: "contactId"
});

Company.belongsTo(City, {
    foreignKey: "cityId"
});

Channel.belongsToMany(Contact, {
    through: ChannelHasContact
});

module.exports = {
    Channel,
    City,
    Company,
    Country,
    Region,
    Rol,
    User,
    Contact,
    ChannelHasContact,
};