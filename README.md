﻿# nodejs_blog
Blog Project

Giới thiệu

Đây là một dự án Blog được xây dựng bằng Node.js, Express và MongoDB, sử dụng Handlebars làm template engine.

Công nghệ sử dụng

Node.js: Môi trường chạy JavaScript phía server

Express.js: Framework web nhẹ và nhanh

MongoDB: Cơ sở dữ liệu NoSQL

Mongoose: ODM để làm việc với MongoDB

Handlebars: Template engine để render giao diện

Bootstrap: Thư viện CSS hỗ trợ thiết kế giao diện

Cài đặt

1. Clone repository

git clone https://github.com/nd2011/blog.git
cd blog

2. Cài đặt dependencies

npm install

3. Cấu hình môi trường

Tạo file .env trong thư mục gốc và thêm các thông tin cấu hình:

PORT=5000
MONGO_URI=mongodb://localhost:27017/blog_db

4. Chạy ứng dụng

npm start

Ứng dụng sẽ chạy trên http://localhost:3000

Các API chính

GET /courses: Lấy danh sách khóa học

GET /courses/:id: Xem chi tiết khóa học

POST /courses/store: Thêm khóa học mới

PUT /courses/:id: Cập nhật khóa học

DELETE /courses/:id: Xóa khóa học

Giao diện

Giao diện người dùng được xây dựng bằng Handlebars và Bootstrap.

Bảo mật

Vui lòng truy cập Security để biết thêm thông tin.

Đóng góp

Nếu bạn muốn đóng góp cho dự án, hãy fork repository và gửi pull request.

Liên hệ

Email: nam95218@gmail.com

GitHub: nd2011

Giấy phép

Dự án này được cấp phép theo MIT License.

