import express from 'express';
import mysql from 'mysql';
import myconn from 'express-myconnection';
import routes from './routes';

const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
  host     : 'localhost',
  user     : 'root',
  password : 'Marco4223602',
  database : 'bdimpact'
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

app.get('/', (req, res)=>{
  res.send('Welcome to my API')
})
app.use('/api', routes)

app.listen(app.get('port'), ()=> {
  console.log('server running on port', app.get('port'))
});