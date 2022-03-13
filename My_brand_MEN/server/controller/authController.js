var Userdb = require('../model/authModel');


const handleErrors = (error)=>{
    console.log(error.message, error.code);
    let errors = {email :"", password : ""};

    //duplicate error checking
    if (error.code == 11000){
        errors['email'] = "The user already exists";
        return errors;
    }
    
    //validation errors
    if (error.message.includes('user validation failed')){
        // console.log(Object.values(error.errors));
        Object.values(error.errors).forEach((er)=>{
            // console.log(er.properties);
            errors[er.properties.path] = er.properties.message;
        });
   // console.log( `email_error  is ${errors.email} and the password_error is ${errors.email}`)
    }
    return errors;
}

exports.signup_post = async (req,res)=>{
    const { email, password } = req.body;

    try {
       const user = await Userdb.create({email, password}); 
       res.status(201).json(user);
    }
    catch(err){
        const error = handleErrors(err);
        res.status(400).json({error});
    }
    // const user = new Userdb({
    //     email: email,
    //     password:password
    // })

    // //save blog to database
    // user
    // .save(user)
    // .then ((data) =>{
    //     res.send(data)
    // })
    // .catch((error)=>{
    //     res.status(500).send({
    //         message:error.message || "Some error occured while creating a create operation"
    //     });
    // });
    }

exports.login_post = (req,res)=>{
        const { email, password } = req.body;
      
    }