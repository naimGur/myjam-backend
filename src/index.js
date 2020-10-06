import express from 'express';
// import models from './models';
import 'dotenv/config'
import routes from './routes'
import models, { sequelize } from './models';

// console.log(process.env.MY_SECRET)

const app = express();

// sequelize.sync({ force: true }).then(async () => {
//   console.log("done")
// });

app.use( async (req, res, next) => {
    req.context = {
      models,
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/message', routes.message);

// app.get('/session', (req, res) => {
//     return res.send(req.context.models.users[req.context.me.id]);
// });

app.get('/', (req, res) => {
    res.send('Hello World!');
});
 
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);