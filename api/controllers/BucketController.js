/**
 * BucketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: new sails.config.globals.GFSBucket(sails.config.datastores.default.url).getExpressEndpoints().create,
    list: new sails.config.globals.GFSBucket(sails.config.datastores.default.url).getExpressEndpoints().list,
    findOne: new sails.config.globals.GFSBucket(sails.config.datastores.default.url).getExpressEndpoints().streamById,
    destroy: new sails.config.globals.GFSBucket(sails.config.datastores.default.url).getExpressEndpoints().removeById,
};