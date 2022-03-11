const express = require('express')
const route = express.Router();


route.get('/',(req,res)=>{
    res.render('index');
})

route.get('/all-blogs',(req,res)=>{
    res.render('viewblogs');
})

route.get('/add-blog',(req,res)=>{
    res.render('create');
})

route.get('/update-blog',(req,res)=>{
    res.render('update');
})

route.get('/delete-blog',(req,res)=>{
    res.render('delete');
})

module.exports = route;