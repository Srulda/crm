const express = require('express')
const router = express.Router()
const Client = require('../model/Client')

router.get('/clients', function(req, res){
    Client.find({}).exec((err,clientsData) => {
        res.send(clientsData)
    })
})

module.exports = router


