const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
const session = require('express-session')
// const { Login, Userinfo } = require('./models');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');

app.use(express.static(__dirname + '/styles'));
app.use(expressLayouts);
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.urlencoded( { extended: true }))
app.use(session({
  secret: 'super top secret',
  resave: false,
  saveUninitialized: true,
}))

const indexRouter = require('./routers/index')
const homeRouter = require('./routers/home')
const signupRouter = require('./routers/signup')
const loginRouter = require('./routers/login')
const projectsRouter = require('./routers/projects')

app.use('/projects', projectsRouter)
app.use('/', indexRouter)
app.use('/home', homeRouter)
app.use('/signup', signupRouter)
app.use('/login', loginRouter)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
