import express, { Request, Response, NextFunction } from 'express';
import { json, urlencoded } from 'body-parser';


const app = express();
const port = 3001
const fs = require('fs');


app.use(urlencoded());

app.use(json());
app.use(['/pub/proxy/*', "/api/proxy/*"], (req: Request, res: Response, next: NextFunction)=> {

  if(req.session){
    next();
  }else{
    res.sendStatus(401);
  }

});

app.post('/pub/proxy/save/:id', (req: Request, res: Response)=>{
  const path = "data/"+req.params.id +".json";
  fs.writeFileSync(path, JSON.stringify(req.body) );
  const contents =fs.readFileSync(path, {encoding:'utf8', flag:'r'});
  return res.json(JSON.parse(contents));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});