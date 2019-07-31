/**
 * Curso.js
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
      example: 'Ciência da Computação'
    },
    nivel: {
      type: 'string',
      required: true,
      isIn: [
        'Graduação',
        'Pós-graduação lato sensu',
        'Pós-graduação stricto sensu'
      ],
      example: 'Graduação'
    },
    area: {
      type: 'string',
      required: true,
      isIn: [
        'Ciências Exatas e da Terra',
        'Ciências Biológicas',
        'Engenharias',
        'Ciências da Saude',
        'Ciências Agrárias',
        'Ciências Sociais e Aplicadas',
        'Ciências Humanas',
        'Liguística, Letras e Artes'
      ],
      example: 'Ciências Exatas e da Terra'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    instituicao: {
      model: 'instituicao'
    },
    admin: {
      model: 'admin',
      required: true
    },

  },

};

