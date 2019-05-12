const mongoose = require('mongoose')
const Schema = mongoose.Schema
const data = require('../../src/components/clients/data')

const clientSchema = new Schema({
    _id: String,
    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String,
})

const Client = mongoose.model('Client', clientSchema)


const saveDataToDB = function(data) {
    for(let d of data) {
      let client = new Client(d)
      client.save()
    }
  }


// saved once to the DB !!!!
// saveDataToDB(data)

module.exports = Client
