// create middleware
module.exports = reqFilter = (req, res, next) => {

    if (!req.query.age) {
        res.send("Please provide age!");

    } else if (req.query.age < 18) {
        res.send("Age is less than 18.");

    }
    else {
        next();
    }
}