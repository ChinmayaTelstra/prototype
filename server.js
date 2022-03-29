const express = require("express");
const app = express();
const db = require("./db.js");
const path = require("path");

const jobsRoute = require('./routes/jobsRoute')
const userRoute = require('./routes/usersRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/jobs/' , jobsRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)

const port = process.env.PORT || 3001;

if(process.env.NODE_ENV === 'production')
{
    app.use('/' , express.static('client/build'))

    app.get("*", (req, res) => {

        res.sendFile(path.join(__dirname, 'client/build/index.html'))

    });
}

app.listen(port, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
    console.log(`Node JS Server Started on port ${port}`);
});