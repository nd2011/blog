const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');

// Kết nối DB
db.connect();

const app = express();
const port = 5000;

// Middleware xử lý dữ liệu từ form và JSON
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

// Sử dụng thư mục "public" cho static files (CSS, JS, hình ảnh)
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Cấu hình Template engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
  }),
); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes
route(app);

// Khởi động server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
