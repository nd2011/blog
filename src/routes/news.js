const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show); // Chi tiết bài viết
router.use('/', newsController.index); // Danh sách bài viết

module.exports = router;
