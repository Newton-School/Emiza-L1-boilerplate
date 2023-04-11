const users   = require("../models/user.js");
const bcrypt  = require('bcrypt');
const { valid } = require("joi");
const saltRounds = 10;

/*

Get request json file structure
    obj =  {
        "email":email,
        "password": password,
    }



Response on different scenario

1. Invalid Password

403 Status code with 
json = {
        "message": 'Invalid Password, try again !!',
        "status": 'fail'
    }


2. Email Doesnot Exist

404 Status code with 
json = {
        "message": 'User with this E-mail does not exist !!',
        "status": 'fail'
    }

3. Success Login

//data will contain user info that is login.

200 Status code with 
json = {
  status: 'success',
  data: {
    role: 'user',
    registrationdate: '2023-04-06T06:16:41.162Z',
    _id: '642e63c9d6f5febb70b0b9e8',
    name: 'Happy Jain',
    email: 'happy2000jain@gmail.com',
    password: '$2b$10$VFmCyYZsNF2hf.yUoCyk5OWiTu4yeLoYzAwqgi25XG1op1YzYVXUy',
  }
}



*/

const loginUser =async (req, res) => {

    const email  = req.body.email;
    const password = req.body.password;

    //Write your code here.

}

/*

Post request json file structure
    obj =  {
        "name":name,
        "email":email,
        "password": password,
        "role": role
    }


You need to complete the controller for user signupUser.
you need to register the user.
Complete the schema and to look the user schema look ../models/user.js
you should hash the password using bcrypt before saving it.



Response on different scenario

1. On success reg

200 Status code with 
json = {
    "message": 'User SignedUp successfully',
    "status": 'success'
}

2. Will get error if email all ready exist.

404 Status code with 
json = {
    "status": 'fail',
    "message": error message we got.
}

*/

const signupUser = async (req, res) => {

    //Write your code here.

    var newuser = {
        /* ... */
    };

    users.create(newuser).then((user) => {
        res.status(/* ... */).json(/* ... */);
    })
    .catch((error) => {
        res.status(/*...*/).json(/* ... */);
    });

}

module.exports = { loginUser , signupUser };
