const express = require('express')
const route = express.Router();
const services = require('../services/render');

route.get('/',services.homeRoutes)

route.get('/all-blogs',services.allBlogsRoutes)

route.get('/add-blog',services.addBlogRoutes)

route.get('/update-blog',services.updateBlogRoutes)

route.get('/delete-blog',services.deleteBlogRoutes)

module.exports = route;