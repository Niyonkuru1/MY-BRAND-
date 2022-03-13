exports.homeRoutes = (req,res)=>{
    res.render('index');
}

exports.allBlogsRoutes = (req,res)=>{
    res.render('viewblogs');
}

exports.addBlogRoutes = (req,res)=>{
    res.render('create');
}

exports.updateBlogRoutes = (req,res)=>{
    res.render('update');
}

exports.deleteBlogRoutes = (req,res)=>{
    res.render('delete');
}