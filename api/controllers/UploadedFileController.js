/**
 * UploadedFileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        req.file('files').upload({
            adapter: require('skipper-gridfs'),
            uri: process.env.MONGODB_URL
        }, (err, uploadedFiles) => {
            if (err) {
                return res.negotiate(err);
            }
            else {
                return res.json({
                    message: uploadedFiles.length + ' file(s) uploaded successfully!',
                    files: uploadedFiles
                });
            }
        });
    },
    streamById: async function (req, res) {
        let grid = require('skipper-gridfs')({
            uri: process.env.MONGODB_URL
        });

        let file = await UploadedFile.findOne(req.param('id'));

        if (file) {
            res.set('Content-disposition', `attachment; filename="${file.filename}"`);
            res.set('filename', file.filename);
            grid.read(req.param('id'))
            .on('error', (err) => {
                return res.serverError(err);
            })
            .pipe(res);
        }
        else {
            res.send('File not found');
        }
    },
    removeById: async function (req, res) {
        let grid = require('skipper-gridfs')({
            uri: process.env.MONGODB_URL
        });

        let file = await UploadedFile.findOne(req.param('id'));

        if (file) {
            grid.rm(req.param('id'));
            res.send(file);
        }
        else {
            res.send('File not found');
        }
    },
};