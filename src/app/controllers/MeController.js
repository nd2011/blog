const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // GET /me/store/courses
  // lấy danh sách khóa học của người dùng
  storeCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('me/store-courses', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
