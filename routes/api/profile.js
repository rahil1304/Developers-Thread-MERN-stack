const express=require('express');
const router=express.Router();

//@route        GET api/profile
//@description  Test route
//@acess        Public (could be Private/Public)
router.get('/',(req,res)=>res.send('Profile route'));


module.exports=router;