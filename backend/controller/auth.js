const user = require("./../database/model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
    try {
        const { email, password, passwordVerfiy } = req.body;
        if (!email && !password && !passwordVerfiy) {
            return res.status(400).json({
                errorMessage: "Please enter all required fields"
            })
        }
        if (password.length < 6) {
            return res.status(400).json({
                errorMessage: "please enter atleast 6 digit"
            })
        }
        if (password !== passwordVerfiy) {
            res.status(400).json({
                errorMessage: "please enter same password twice"
            })
        }
        const existingUser = await user.findOne({ email })
        if (existingUser) {
            res.status(400).json({
                errorMessage: "user already exist"
            })
        }
        const salt = 10;
        const hash = await bcrypt.hash(password, salt);

        const newUser = new user({
            email: email,
            password: hash
        })

        const savedUser = await newUser.save();
        const token = jwt.sign({ user: savedUser._id }, "admin@123", { expiresIn: '1h' })
        res.cookie("token", token, {
            httpOnly: true,
        }).send();

    } catch (error) {
        res.status(500).json().send()
    }
}



exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email && !password) {
            return res.status(400).json({
                errorMessage: "Please enter all required fields"
            })
        }
        const existingUser = await user.findOne({ email })
        if (!existingUser) {
            res.status(401).json({
                errorMessage: "Wrong email or password"
            })
        }

        const passworCorrect = await bcrypt.compare(password, existingUser.password)

        if (!passworCorrect) {

            return res.status(401).json({ errorMessage: "Wrong email or password" })
        }
        const token = jwt.sign({ user: existingUser._id }, "admin@123", { expiresIn: '1h' })

        res.cookie("token", token, {
            httpOnly: true
        }).send();


    } catch (error) {
        res.status(500).send()
    }
}


exports.loggedIn = async (req, res, next) => {
    try {

        const token = req.cookies.token;
        
        if (!token) return res.json(false);
        await jwt.verify(token, "admin@123");
        res.send(true);
    } catch (error) {
        res.json({err:false});
    }
}



exports.logout = async (req, res, next) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0)
        }).send();
    } catch (error) {
        res.status(500).send();
    }
}