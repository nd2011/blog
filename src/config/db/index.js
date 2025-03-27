const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect hoàn thành');
    } catch (error) {
        console.error('Connect thất bại:', error.message);
    }
}

module.exports = { connect };
