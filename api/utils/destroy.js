module.exports = (Model) => async function(req, res) {
    let model = await Model.updateOne({ id: req.params.id }).set({
        deletedAt: Date.now()
    });

    if (!model) {
        res.status(404).type('text/plain').send('Not Found');
    }
    else {
        res.json(model);
    }
}