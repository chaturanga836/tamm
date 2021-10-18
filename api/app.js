const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3001
const fs = require('fs');

app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(['/pub/proxy/*', "/api/proxy/*"], (req, res, next)=> {

  if(req.session){
    next();
  }else{
    res.sendStatus(401);
  }

});

app.post('/pub/proxy/save/:id', (req, res)=>{
  const path = "data/"+req.params.id +".json";
  fs.writeFileSync(path, JSON.stringify(req.body) );
  const contents =fs.readFileSync(path, {encoding:'utf8', flag:'r'});
  return res.json(JSON.parse(contents));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});