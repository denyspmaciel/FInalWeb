const mongoose = require('mongoose');

const Event = mongoose.model('Event');

module.exports = {
    async index (req, res) {
        //Listar eventos
        //const events = await Event.find();
        const { page = 1} = req.query;
        const events = await Event.paginate({}, { page: page, limit: 3});

        return res.json(events);
    },

    async show (req, res) {
        //Mostrar evento específico
        const event = await Event.findById(req.params.id);

        return res.json(event);
    },

    async store(req, res) {
        //Cadastrar evento
        const event = await Event.create(req.body);

        return res.json(event);
    },

    async update(req, res) {
        //Atualizar evento
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(event);
    },

    async destroy(req, res) {
        //Excluir evento
        const event = await Event.findByIdAndRemove(req.params.id);

        return res.send();
    }
}