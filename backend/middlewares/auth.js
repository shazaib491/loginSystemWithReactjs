const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
    try {
        console.log();
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ errorMessage: "unauthorised" })
        const verfied = jwt.verify(token, "admin@123")
        req.user = verfied.user
        next();
    } catch (error) {
        res.status(401).json({ errorMessage: "unathorised" })
    }
}

module.exports = auth