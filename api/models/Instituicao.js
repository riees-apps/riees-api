/**
 * Instituicao.js
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
      minLength: 8,
      maxLength: 64,
      required: true,
      example: 'Universidade Vila Velha'
    },
    missao: {
      type: 'string',
      minLength: 8,
      maxLength: 128,
      required: true,
      example: 'Missao da Instituição'
    },
    descricao: {
      type: 'string',
      minLength: 8,
      maxLength: 512,
      required: true,
      example: 'Descrição da Instituição'
    },
    pontosFortes: {
      type: 'json',
      defaultsTo: [],
      example: 'Pontos Fortes da Instituição'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    unidades: {
      collection: 'unidade',
      via: 'instituicao'
    },

  },

};

