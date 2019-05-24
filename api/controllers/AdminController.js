/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    destroy: async function(req, res) {
        let admin = await Admin.updateOne({ id: req.params.id }).set({
            deletedAt: Date.now()
        });

        if (!admin) {
            res.status(404).type('text/plain').send('Not Found');
        }
        else {
            res.json(admin);
        }
    },
    auth: async function(req, res) {
        let requiredPaths = [ 'email', 'password' ];
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

            if (admin && (admin.password == req.body.password)) {
                res.json(admin);
            }
            else {
                res.status(400).type('text/plain').send('Not Auth');
            }
        }
    }
};