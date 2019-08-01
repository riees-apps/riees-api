/**
 * Evento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    nome: {
      type: 'string',
      required: true,
      example: 'Nome do Evento'
    },
    descricao: {
      type: 'string',
      required: true,
      example: 'Descrição do Evento'
    },
    localizacao: {
      type: 'string',
      allowNull: true,
      example: 'Localização do Evento, onde será feito'
    },
    dataInicio: {
      type: 'number',
      required: true,
      example: 'Data de Início em Timestamp'
    },
    dataFim: {
      type: 'number',
      example: 'Data de Início em Timestamp'
    },
    link: {
      type: 'string',
      allowNull: true,
      example: 'O link para inscrição no Evento'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    capa: {
      type: 'string',
      allowNull: true
    },
    admin: {
      model: 'admin',
      required: true
    },

  },

};

