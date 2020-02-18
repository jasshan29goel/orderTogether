const mongoose = require('mongoose');

let User = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      type:{
          type:String,
          required:true
      },
      ratings:[
        {
          customer:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
          rating:{
            type: Number
          }
      }

    ]
});

module.exports = mongoose.model('User', User);

