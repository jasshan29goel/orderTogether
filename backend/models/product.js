const mongoose = require('mongoose');

let Product = new mongoose.Schema({
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      state:{
          type:String,
          required:true
      },
      orders:[
          {
            customer:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            quantity: {
                type: Number,
            }
        }
      ]
});

module.exports = mongoose.model('Product', Product);

