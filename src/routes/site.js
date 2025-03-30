const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search); // Chuyển /search về trang home
router.get('/', siteController.index); // Trang chủ
router.get('/:slug', siteController.index); // Các trang khác cũng về home

module.exports = router;
