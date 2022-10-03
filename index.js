const express = require('express');
const app = express();
  
app.get('/' , (req,res)=>{
   // 200 status code means OK
   res.send(200, "text/plain", "hello from esp8266!\r\n");
})
  
// Server setup
app.listen(3000 , ()=>{
    console.log("server running");
});