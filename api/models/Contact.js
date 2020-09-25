const mongoose = require('mongoose');

const validator = require('validator');
const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3

    },
    phone: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        require: true,
        validate: {
           validator: (v) => {             
            return validator.isEmail(v)
           },
           message: `{VALUE} is not an email`
        }
    }

})

contactSchema
  .set('autoIndex', true)
  .set('timestamps', {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
