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
      example: 'O link para inscrição no Evento'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    capa: {
      type: 'string'
    },
    admin: {
      model: 'admin',
      required: true
    },

  },

};

