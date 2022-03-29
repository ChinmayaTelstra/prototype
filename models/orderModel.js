const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    projectno: {type : String, required: true},
    customer: {type : String, required: true},
    asite : {type : Number, required: true},
    bsite : {type : Number, required: true},
    customercode : {type : String, required: true},
    countrycode : {type : String, required: true},
    fullDescription : {type : String, required: true},
    sitecode : {type : String, required: true},
    siteid : {type : String, required: true},
    customercode :{type : String, required: true},
    email : {type : String, required: true},
    phoneNumber : {type : String, required: true},
    companyDescription : {type : String, required: true},
    appliedCustomers : {type : [] , required: true},
    createdBy : {type : String, required: true},
},{
    timestamps : true,
})

const orderModel = new mongoose.model('orders' , orderSchema)
module.exports = orderModel