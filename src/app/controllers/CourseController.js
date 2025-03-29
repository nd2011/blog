const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
  //[GET] /courses/:slug


    show(req, res,next) {
      Course.findOne({ slug: req.params.slug })
        .then((course) => {
          res.render('courses/show', { course: mongooseToObject(course) });
        })
        .catch(next); 
    }

    //[GET] /courses/create
    create(req, res,next) {
      res.render('courses/create');
    }
    //[POST] /courses/store
    store(req, res, next) {
      const formData = req.body;
  
      // Kiểm tra videoID có tồn tại không trước khi tạo ảnh
      if (formData.videoID) {
          formData.image = `https://img.youtube.com/vi/${formData.videoID}/sddefault.jpg`;
      } else {
          formData.image = ''; // Hoặc đặt giá trị mặc định nếu không có videoID
      }
  
      const course = new Course(formData);
  
      course
          .save()
          .then(() => {
              console.log('✅ Lưu khoá học thành công:', course); // Log để kiểm tra
              res.redirect('/');
          })
          .catch((error) => {
              console.error('❌ Lỗi khi lưu khoá học:', error.message);
              res.status(500).send('Lỗi khi lưu khoá học');
          });
  }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
      Course.findById(req.params.id)
        .then((course) => {
          res.render('courses/edit', {
            course: mongooseToObject(course),
          });
        })
        .catch(next);
    }
    //[PUT] /courses/:id
    update(req,res,next){ 
      Course.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
          res.redirect('/me/store/courses');
        })
        .catch(next);
    }
    //[DELETE] /courses/:id 
    destroy(req, res, next) {
      Course.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
    }
    

  }

module.exports = new CourseController();
