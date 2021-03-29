const mongoose = require("mongoose")
const customerSchema = mongoose.Schema({
    name: { type: String, required: true }
})


const customer = mongoose.model("customer", customerSchema);


module.exports=customer