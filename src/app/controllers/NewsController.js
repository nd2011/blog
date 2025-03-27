class NewsController {
  // [GET] /News
  index(req, res) {
    res.render('news');
  }

  // [GET]
  show(req, res) {
    res.send('NEWS DETAIL!!!!');
  }
}

module.exports = new NewsController();
