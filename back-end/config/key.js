if (process.env.NODE_ENV === "production") {
    // Production Environment
    module.exports = require('./prod');
} else {
    // Local Development Environment
    module.exports = require('./dev');
}