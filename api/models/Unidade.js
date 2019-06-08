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
      minLength: 8,
      maxLength: 128,
      required: true,
      example: 'Business School'
    },
    telefone: {
      type: 'string',
      minLength: 11,
      maxLength: 11,
      required: true,
      example: '27999887766'
    },
    descricao: {
      type: 'string',
      minLength: 8,
      maxLength: 512,
      required: true,
      example: 'Descrição dessa Unidade'
    },
    rua: {
      type: 'string',
      minLength: 4,
      maxLength: 64,
      required: true,
      example: 'Rua da Lama'
    },
    numero: {
      type: 'string',
      minLength: 1,
      maxLength: 16,
      required: true,
      example: 'Sem Número'
    },
    complemento: {
      type: 'string',
      minLength: 4,
      maxLength: 64,
      required: true,
      example: 'Perto da esquina'
    },
    bairro: {
      type: 'string',
      minLength: 4,
      maxLength: 64,
      required: true,
      example: 'Jockey de Itaparica'
    },
    cidade: {
      type: 'string',
      minLength: 4,
      maxLength: 64,
      required: true,
      example: 'Vila Velha'
    },
    cep: {
      type: 'string',
      minLength: 8,
      maxLength: 8,
      required: true,
      example: '29103880'
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

  },

};

