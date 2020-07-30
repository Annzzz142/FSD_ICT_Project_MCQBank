const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const db = 'mongodb://localhost:27017/MCQDataBase';

// make sure we're connected to the Database vis mongoose
mongoose.connect(db, function(err){
    if(err){
        console.error('Error!'+err)
    }
    else(
        console.log('Connected to mongoDB')
    )
});

router.get('/events', (req,res) => {
    let events = [
    {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
    },
    {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
    },
    {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
    }]
    res.json(events)
})

// route for the register
router.post('/register', (req,res) => {
    let userData = req.body    
    let user = new User(userData)
    user.save((err, registeredUser) => {
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send(registeredUser)
        }
    })
})

// validation
router.post('/login', (req,res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
        if(err){
            console.log(err)
        } else{
            if(!user){
                res.status(401).send('Invalid Email')
                // console.log('Invalid Email')
            } else 
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password')
                    // console.log('Invlaid password')
                }
            else{
                res.status(200).send(user)
            }            
        }
    })
})

router.get('/', (req,res) => {
    res.send("From API");
});

module.exports = router;