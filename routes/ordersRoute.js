const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel")
const User = require("../models/userModel")
const moment = require("moment");

router.get("/getallorders", async (req, res) => {

    try {
        const orders = await Order.find()
        res.send(orders)
    } catch (error) {
        return res.status(400).json({error});
    }

});

router.post("/submitorder", async (req, res) => {

    try {
        const neworder = new Order(req.body)
        await neworder.save()
        res.send('Order Submitted Successfully')
    } catch (error) {
        return res.status(400).json({error});
    }

});

router.post("/editorder", async (req, res) => {

    try {
        const updatedorder = await Order.findOneAndUpdate({_id: req.body._id}, req.body)
        res.send('Order Updated Successfully')
    } catch (error) {
        return res.status(400).json({error});
    }

});

router.post("/saveorder", async (req, res) => {

    const {user, order} = req.body

    try {
        const orderDetails = await Order.findOne({_id: order._id})
        const appliedCustomer = {
            userid: user._id, appliedDate: moment().format('MMM DD yyyy')
        }
        orderDetails.appliedCustomers.push(appliedCustomer)
        await orderDetails.save()
        const userDetails = await User.findOne({_id: user._id})

        const savedOrder = {
            orderid: order._id, savedDate: moment().format('MMM DD yyyy')
        }

        userDetails.savedOrders.push(savedOrder)
        await userDetails.save()
        res.send('Order Saved Successfully')

    } catch (error) {
        res.send(error)
    }

});


module.exports = router;
