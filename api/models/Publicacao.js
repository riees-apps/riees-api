/**
 * Publicacao.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    titulo: {
      type: 'string',
      minLength: 12,
      maxLength: 50,
      required: true,
      example: 'Titulo da Publicação'
    },
    resumo: {
      type: 'string',
      minLength: 20,
      maxLength: 300,
      required: true,
      example: 'resumo da publicação'
    },
    datahora: {
      type: 'string',
      minLength: 18,
      maxLength: 19,
      required: true,
      example: 'mm/dd/yyyy hh:mm:ss'
    },
    conteudo: {
      type: 'string',
      minLength: 300,
      maxLength: 600,
      required: true,
      example: 'exemplo de conteudo'
    },
    tags: {
      type: 'string',
      minLength: 20,
      maxLength: 50,
      required: true,
      example: '#exemplo'
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

