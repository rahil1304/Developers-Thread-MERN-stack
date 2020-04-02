const express=require('express');
const router=express.Router();

//@route        GET api/posts
//@description  Test route
//@acess        Public (could be Private/Public)
router.get('/',(req,res)=>res.send('Post route'));


module.exports=router;