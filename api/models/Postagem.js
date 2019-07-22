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
      required: true,
      example: 'Titulo da Publicação'
    },
    resumo: {
      type: 'string',
      required: true,
      example: 'resumo da publicação'
    },
    data: {
      type: 'number',
      required: true,
      example: 'Timestamp da Postagem.'
    },
    conteudo: {
      type: 'string',
      required: true,
      example: 'Essa postagem no Blog é referente a algo que vai acontecer...'
    },
    tags: {
      type: 'json',
      defaultsTo: [],
      example: '[ "Cultura", "Sociedade", ... ]'
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
    admin: {
      model: 'admin',
      required: true
    },

  },

};

