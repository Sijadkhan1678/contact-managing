 const express = require('express');
const router= express.Router();
  

  router.post('/',(req,res)=>{

     res.send('login the user')

})

 router.get('/',(req,res)=>{
      res.send('get loged in the user')
  
})
module.exports=router;