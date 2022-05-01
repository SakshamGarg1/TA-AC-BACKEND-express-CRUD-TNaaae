var express = require('express');
var router = express.Router();


router.get('/',(req,res)=>{
    //handle action
    res.render('user.ejs')
})


router.get('/:id',(req,res)=>{
    // single user detail
    res.render('singleUser.ejs')
   })

router.get('/new',(req,res)=>{
    // render the create form
})

router.post('/',(req,res)=>{
    // capture form data
})

router.get('/:id/edit',(req,res)=>{
// edit form
});

router.put('/:id',(req,res)=>{
 // capture data from updated form
})

router.delete('/:id/',(req,res)=>{
// to delete
})

module.exports = router ;