const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EventSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true,
    },
    local: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    horario: {
        type: String,
        required: true,
    },
    ingressos: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

EventSchema.plugin(mongoosePaginate);

mongoose.model('Event', EventSchema);
