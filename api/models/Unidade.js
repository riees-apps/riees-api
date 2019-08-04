/**
 * Unidade.js
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
      example: 'Business School'
    },
    logradouro: {
      type: 'string',
      allowNull: true,
      example: 'Rua da Lama'
    },
    numero: {
      type: 'string',
      defaultsTo: 'S/N',
      example: 'Sem Número'
    },
    bairro: {
      type: 'string',
      allowNull: true,
      example: 'Jockey de Itaparica'
    },
    cep: {
      type: 'string',
      allowNull: true,
      example: '29103880'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    cidade: {
      model: 'cidade'
    },
    instituicao: {
      model: 'instituicao'
    },
    admin: {
      model: 'admin',
      required: true
    },

  },

};

