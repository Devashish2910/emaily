module.exports = (req, res, next) => {
    if (!req.user) {
        res.status(401).send({status: "error", error: "Authentication Required"});
    } else {
        next();
    }
};