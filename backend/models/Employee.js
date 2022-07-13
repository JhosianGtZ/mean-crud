const moongoose = require('mongoose')
const Schema = moongoose.Schema;

//Define collection and Schema

let Employee = new Schema({


  name: {
    type: String
  },
  email: {
    type: String
  },
  destination: {
    type: String
  },
  phoneNumber: {
    type: Number
  }
}, {
  collection: 'employees'
})

module.exports = moongoose.model('Employee', Employee)
