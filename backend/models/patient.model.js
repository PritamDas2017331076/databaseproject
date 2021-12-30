const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    hr: {
        type: Number,
        required: true
    },
    min: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    docid: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamp: true
});

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient