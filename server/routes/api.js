const express = require('express')
const router = express.Router()
const Client = require('../model/Client')

router.get('/clients', function (req, res) {
    Client.find({}).exec((err, clientsData) => {
        res.send(clientsData)
    })
})

router.post('/client', function (req, res) {
    const c = req.body
    const newClient = new Client({
        _id: c._id,
        name: c.name,
        email: c.email,
        firstContact: c.firstContact,
        emailType: c.emailType,
        sold: c.sold,
        owner: c.owner,
        country: c.country
    })
    newClient.save().then(function(client){
        res.send(`new client added - ${client.name}`)
    })
})


module.exports = router