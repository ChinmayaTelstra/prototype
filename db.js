const mongoose = require("mongoose");
const username = "chinmaya";
const password = "Monza2022";
const cluster = "cluster0.9tvmm";
const dbname = "prototype";


dbConnect()

async function dbConnect()
{
    try
    {
        await mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
            {useNewUrlParser : true, useUnifiedTopology: true});
        console.log('Mongo DB Connection success')
    } catch (error) {
        console.log(`Mongo DB Connection failed ${error}`)
    }
}

module.exports = mongoose