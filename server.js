const express = require('express');
const app=express();

const PORT= process.env.PORT || 3000

app.get('/',(req,res)=>{
 res.json({msg: 'wellcome to contact management api'})

})

app.use('/api/user',require('./routes/user'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));

app.listen(PORT,()=>console.log(`server is started on ${PORT}`))

