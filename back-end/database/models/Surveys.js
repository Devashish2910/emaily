const mongoose = require('./../connection');
const { Schema } = mongoose;
const recipientSchema = require('./Recipients');

const surveySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    recipients: {
        type: [recipientSchema]
    },
    positive: {     //1
        type: Number,
        default: 0
    },
    negative: {     //-1
        type: Number,
        default: 0
    },
    neutral: {      //0
        type: Number,
        default: 0
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    dateSent: Date,
    lastResponded: Date
});

surveySchema.virtual('totalResponses').get(function() {
    return this.positive + this.negative + this.neutral;
});


const surveys = mongoose.model('surveys', surveySchema);

