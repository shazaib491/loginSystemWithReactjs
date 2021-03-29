const mongodb = require("mongoose");



mongodb.connect("mongodb://127.0.0.1:27017/authWithReactjs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to database");
}).catch(e => {
    console.log(e);
})

// async function mongodb() {
//     try {
//         console.log("connected to databse");
//         return await mognodb.connect("mongodb://localhost:27017/authWithReactjs", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//     } catch (error) {
//         console.log(error);
//     }

// }
module.exports = mongodb;