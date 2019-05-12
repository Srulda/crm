const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/crm', { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const someSchema = new Schema({
    
})

const Transaction = mongoose.model("Transaction", transactionSchema)

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.get("/transactions", function(req,res){
    Transaction.find({}).exec((err, transactions) =>{
        res.send(transactions)
    })
})

app.post("/transaction", function(req,res){
    let t1 = new Transaction({
        amount : req.body.amount,
        vendor : req.body.vendor,
        category : req.body.category,
        status : req.body.status,
    })
    t1.save()
    res.send(t1)
})

const port = 5515
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})