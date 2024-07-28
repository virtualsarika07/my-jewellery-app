let express = require('express');
let app = express();
let port = 9110;
let cors = require('cors');

app.use(cors())
app.get('/',(req,res) => {
    res.send("Hi from server to you");
})
app.get('/location',(req,res)=>{
    res.send("hi from location")
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server is running on the port ${port}`);
})