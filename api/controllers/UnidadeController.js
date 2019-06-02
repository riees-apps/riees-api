/**
 * UnidadeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    destroy: async function(req, res) {
        let unidade = await Unidade.updateOne({ id: req.params.id }).set({
            deletedAt: Date.now()
        });

        if (!unidade) {
            res.status(404).type('text/plain').send('Not Found');
        }
        else {
            res.json(unidade);
        }
    },
};

