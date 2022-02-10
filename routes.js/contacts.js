const express= require('express');
const router= express.Router();
 
//##  Get api/contacts
//**  desc: get all contacts  **
// access private
 router.get('/',
(req,res)=>{
        res.send('get all contacts')
}


)
//%%% Post api/contacts
//%%% desc add contact
//%%% access public

router.post('/',(req,res)=>{
   res.send(' add contact ')
}


);

router.put('/',(req,res)=>{
    res.send('update contact')
})

router.delete('/',(req,res)=>{
res.send('delete contact')
})
module.exports=router