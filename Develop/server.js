const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const dayjs = require('dayjs');


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({
  extname: 'hbs',
  helpers: {
    formatRegistrationDate(date){
      // console.log({format})
      // console.log('abbccc', dayjs(date, "YYYY-MM-DD").format(format))
      return dayjs(date, "YYYY-MM-DD").format('DD/MM/YYYY');
    },
    isBoy(gender){
      return gender === 'boy'
    },
    isGirl(gender){
      return gender === 'girl'
    },
   
  }
});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on localhost:' + PORT));
});
