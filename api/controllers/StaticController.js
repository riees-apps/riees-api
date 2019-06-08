/**
 * StaticController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    static: async function(req, res) {
        let possiblesLocales = [ 'es', 'pt' ];
        let locale = req.params['locale'];

        if (!possiblesLocales.includes(locale)) {
            res.status(400).type('text/plain').send('Locale Not Found');
        }
        else {
            res.json(require(`./../static/${locale}`));
        }
    }
};