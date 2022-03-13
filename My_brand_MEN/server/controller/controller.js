var Blogdb = require('../model/model');


//create and save new blog
exports.create = (req,res)=>{

    //validate request
    if ( !req.body){
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }

    //new blog
    const blog = new Blogdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save blog to database
    blog
    .save(blog)
    .then ((data) =>{
        res.send(data)
    })
    .catch((error)=>{
        res.status(500).send({
            message:error.message || "Some error occured while creating a create operation"
        });
    });

}

//retrieve and return all blogs / retrieve and return a single user
exports.find = (req,res)=>{
    if (req.query.id){
        const id = req.query.id;

        Blogdb.findById(id)
        .then((data)=>{
            if (!data){
                res.status(404).send({message: "Not found user with id" + id})
            }
            else {
                res.send(data)
            }
        })
        .catch((error)=>{
            res.status(500).send({message: "Error retrieving the user with id: " + id})
        })
    }

    else {
        Blogdb.find()
        .then((blog)=>{
            res.send(blog);
        })
        .catch((error)=>{
            res.status(500).send({message:error.message || 'Error Occured while retrieving blog information'})
        })
    }
}

//update a new identified blog with the blog id
exports.update = (req,res)=>{
if (!req.body){
    return res
    .status(400)
    .send({message: "Data to be updated doesn't exist, sorry to that!!"})
}

const id = req.params.id;
Blogdb.findByIdAndUpdate(id,req.body, {userFindAndModify:false})
.then((data)=>{
    if (!data){
    res.status(400).send({message:`cannot update user with ${id}. may be blog not found`})
    }
    else {
        res.send(data)
    }
})
.catch((error)=>{
    res.status(500).send({message: 'Error Update blog information'})
})
}

// delete the blog with the blog is specified in the request
exports.delete = (req,res)=>{
    const id = req.params.id;

    Blogdb.findByIdAndDelete(id)
    .then((data)=>{
        if(!data){
            res.status(400).send({mesage: `Can not delete with id ${id}. may be id is wrong`})
        }
        else {
            res.send({
                message: 'Blogs deleted Successfuly!!'
            })
        }
    })
    .catch((error) =>{
        res.status(500).send({
            message: `Could not delete the blog with id = ${id}`
        });
    });
}

