const Course = require('../models/Course');

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then(courses => {
        courses = courses.map(course => course.toObject());
        res.render('home', { courses });
      })
      .catch(next);
  }
  search(req, res) {
    res.render('search'); // Nếu không có trang search, trả về trang home
  }
}

module.exports = new SiteController();
