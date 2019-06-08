/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    destroy: require('./../utils/destroy')(Admin),
    auth: async function(req, res) {
        let requiredPaths = [ 'email', 'senha' ];
        let message = '';

        requiredPaths.forEach(path => {
            if (! path in req.body) {
                message += `É necessário a inclusão do ${path} no body.\n`;
            }
        });

        if (message) {
            res.status(400).type('text/plain').send(message);
        }
        else {
            let admin = await Admin.findOne({
                email: req.body.email.toLowerCase(),
                deletedAt: 0
            });

            if (admin && (admin.senha == req.body.senha)) {
                res.json(admin);
            }
            else {
                res.status(400).type('text/plain').send('Not Auth');
            }
        }
    }
};