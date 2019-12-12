/**
 * MataData Model
 * 
 */
const prequire = require('parent-require')
    , mongoose = prequire('mongoose');

const Schema = mongoose.Schema;

const metaDataSchema = new Schema({
    key: String,
    value: mongoose.Schema.Types.Mixed,
});

// Enable timestamps (CreatedAt, UpdatedAt)
metaDataSchema.set('timestamps', true);

// Export metadata model
module.exports =  metadata = mongoose.model('metadata', metaDataSchema);
