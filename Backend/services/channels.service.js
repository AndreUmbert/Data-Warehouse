// const { Channel, Contact, ChannelHasContact } = require('../models');

// //Esto es un closure (es una funcion que retorna un objeto de funciones)
// const channelService = () => {
//     //las cargo desde el index porque es un patron decorador
//     //si traigo pedidos desde pedidos, no traigo sus relaciones
//     const getChannels = async () => {
//         return await Channel.findAll({
//             include: [
//                 { model: Channel },
//                 { model: Contact, attributes: ["contactName", "lastname"] },
//             ],
//         });
//     };

//     const createRelation = async (channel, contactId) => {
//         const channel_data = await Promise.all(
//             channel.map(async (chann) => {
//                 const channelDB = await Channel.findByPk(chann.id);
//                 return {
//                     channelName: channelDB.channelName,
//                     id: channelDB.id,
//                 };
//             })
//         );


//         const newContact = await Contact.create({
//             id: contactId,
//         });

//         await Promise.all(
//             channel_data.map(async (chann) => {
//                 await ChannelHasContact.create(
//                     {
//                         contactId: newContact.id,
//                         channelId: chann.id,
//                         cantidad: chann.channelName,
//                     },
//                     { fields: ["contactId", "channelId", "channelName"] }
//                 );
//             })
//         );

//     };

//     return { getChannels, createRelation }
// }

// module.exports = channelService();