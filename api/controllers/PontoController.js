/**
 * PontoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    destroy: require('./../utils/destroy')(Ponto),
};

