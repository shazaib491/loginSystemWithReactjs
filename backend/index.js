const express = require("express");
const app = express();
const db = require("./database/db");
const authRoute = require("./routes/authRoute");
const customerRoute = require("./routes/customerRoute");
const cookieParser = require('cookie-parser');
const cors = require("cors");
// middlewares
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true
    })
)

app.use(express.json());
app.use(cookieParser());

app.use("/customer", customerRoute);
app.use("/auth", authRoute);

// middlewares





const port = process.env.port || 5002;

app.listen(port, () => {
    console.log(`connected to port no ${port}`);
})