const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');



// lấy danh sách khóa học của người dùng
// GET /me/store/courses
router.get('/store/courses', meController.storeCourses);


module.exports = router;
