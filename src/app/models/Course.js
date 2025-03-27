const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, required: true, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    videoID: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, unique: true },
}, {
    timestamps: true,
});

// Middleware tự tạo slug trước khi lưu
CourseSchema.pre('save', function(next) {
    if (this.name) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

module.exports = mongoose.model('Course', CourseSchema);
