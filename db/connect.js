const mongoose = require("mongoose")
mongoose.set('useFindAndModify', false);

const connectDB = (url) => {
    return mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useCreateIndex: false,
            useUnifiedTopology: true
        })
}

module.exports = connectDB