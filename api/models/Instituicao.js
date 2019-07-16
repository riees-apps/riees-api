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
      required: true,
      example: 'Universidade Vila Velha'
    },
    missao: {
      type: 'string',
      required: true,
      example: 'Missao da Instituição'
    },
    descricao: {
      type: 'string',
      required: true,
      example: 'Descrição da Instituição'
    },
    pontosFortes: {
      type: 'json',
      defaultsTo: [],
      example: '[ "Mercado de Trabalho", "Pesquisa" ... ]'
    },
    link: {
      type: 'string',
      example: 'O link do site da Instituição',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    capa: {
      model: 'uploadedfile'
    },
    logo: {
      model: 'uploadedfile'
    },
    unidades: {
      collection: 'unidade',
      via: 'instituicao'
    },
    admin: {
      model: 'admin',
      required: true
    },

  },

};

