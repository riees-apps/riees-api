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
    telefone: {
      type: 'string',
      required: true,
      example: '27998776655'
    },
    telefone2: {
      type: 'string',
      example: '27998776655'
    },
    facebook: {
      type: 'string',
      example: 'http://www.facebook.com/UVV'
    },
    twitter: {
      type: 'string',
      example: 'http://www.twitter.com/UVV'
    },
    instagram: {
      type: 'string',
      example: 'http://www.instagram.com/UVV'
    },
    linkedin: {
      type: 'string',
      example: 'http://www.linkedin.com/UVV'
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
    logo: {
      type: 'string'
    },
    unidades: {
      collection: 'unidade',
      via: 'instituicao'
    },
    cursos: {
      collection: 'curso',
      via: 'instituicao'
    },
    admin: {
      model: 'admin',
      required: true
    },

  },

};

