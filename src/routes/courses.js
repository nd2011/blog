const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CourseController');

// Trang tạo khóa học
router.get('/create', coursesController.create);

// Lưu khóa học mới
router.post('/store', coursesController.store);

// Chi tiết khóa học (hiển thị theo slug)
router.get('/:slug', coursesController.show);

module.exports = router;
