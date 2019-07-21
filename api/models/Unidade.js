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
    telefone: {
      type: 'string',
      required: true,
      example: '27999887766'
    },
    descricao: {
      type: 'string',
      required: true,
      example: 'Descrição dessa Unidade'
    },
    logradouro: {
      type: 'string',
      required: true,
      example: 'Rua da Lama'
    },
    numero: {
      type: 'string',
      required: true,
      example: 'Sem Número'
    },
    complemento: {
      type: 'string',
      required: true,
      example: 'Perto da esquina'
    },
    bairro: {
      type: 'string',
      required: true,
      example: 'Jockey de Itaparica'
    },
    cep: {
      type: 'string',
      required: true,
      example: '29103880'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    cidade: {
      model: 'cidade',
      required: true
    },
    instituicao: {
      model: 'instituicao'
    },
    cursos: {
      collection: 'curso',
      via: 'unidade'
    },
    admin: {
      model: 'admin',
      required: true
    },

  },

};

