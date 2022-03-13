const express = require('express')
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/',services.homeRoutes);

route.get('/all-blogs',services.allBlogsRoutes);

route.get('/add-blog',services.addBlogRoutes);

route.get('/update-blog',services.updateBlogRoutes);

route.get('/delete-blog',services.deleteBlogRoutes);


// API then 
route.post('/api/blogs', controller.create);
route.get('/api/blogs', controller.find);
route.put('/api/blogs/:id', controller.update);
route.delete('/api/blogs/:id', controller.delete);

module.exports = route;