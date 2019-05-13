const express = require('express')
const router = express.Router()
const Client = require('../model/Client')

getData = async () => Client.find({}) 

router.get('/clients', async function (req, res) {
    let clients = await getData()
    res.send(clients)
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

router.get('/clients/actions', async function (req, res) {
    let clients = await getData()
    let mapClients = clients
    .map(c => {return {_id: c._id, name: c.name, owner: c.owner}})
    res.send(mapClients)
    })

module.exports = router