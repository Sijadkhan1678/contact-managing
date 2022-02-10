const express = require('express');
const app=express();

const PORT= process.env.PORT || 3000

app.get('/',(req,res)=>{
 res.json('{msg: wellcome to contact management api'})

})

app.use('/api/user',require(./route/user));
app.use('/api/auth',require(./route/auth));
app.use('/api/contacts,require(./route/contacts));

app.listen(PORT,()=>console.log(`server is started on ${PORT}`))

