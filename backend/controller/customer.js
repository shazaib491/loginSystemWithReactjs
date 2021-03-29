const customer = require("./../database/model/customModel")

exports.addCustomer = async (req, res, next) => {
    try {
        const { name } = req.body;
        const custom = new customer({
            name
        })
        const customers = await custom.save()
        res.json(
            customers
        )
    } catch (error) {
        res.json(error)
    }
}


exports.getCustomer = async (req, res, next) => {
    try {

        const customers = await customer.find()
        res.json(
            customers
        )
    } catch (error) {
        res.json(error)
    }
}