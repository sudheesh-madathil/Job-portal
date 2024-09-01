const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');

// Import your routes
const jobseeker = require('./routes/User/UserRegister');
const EmployerRouter = require('./routes/Employer/Empolyerrouts');
const Emregister = require('./routes/Employer/EmRegister');
const EmLogin = require('./routes/Employer/EmLogin');
const messageRouter = require('./routes/Employer/message');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const auth = require('./routes/User/auth');
const UserLogin = require('./routes/User/UserLogin');
const UserRegister = require('./routes/User/UserRegister');
const UserAppliedJob = require('./routes/User/userappliedjob');
const AdminRegister = require('./routes/Admin/AdminRegister');
const AdminLogin = require('./routes/Admin/AdminLogin')
// Create Express app
const app = express();

app.use(bodyParser.json());

// View engine setup (assuming you are using 'jade' as your template engine)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['GET', 'POST','PUT','DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

// Session setup
app.use(session({
  secret: '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',
  resave: false,
  saveUninitialized: true,
}));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`a user connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', (message) => {
    console.log('message received: ', message);
    io.emit('message', message); // Broadcast the message to all clients
  });
});

// Route setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Employer', EmployerRouter);
app.use('/Emregister', Emregister);
app.use('/Emlogin', EmLogin);
app.use('/userRegister', jobseeker);
app.use('/userLogin', UserLogin);
app.use('/userApplyedJob', UserAppliedJob);
app.use('/UserRegister', UserRegister);
app.use('/message', messageRouter);
app.use('/AdminRegister',AdminRegister)
app.use('/AdminLogin',AdminLogin)
app.use(auth);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error'); // Assuming you have an 'error' view
});

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/Job-portal', {});
const conn = mongoose.connection;
conn.on('connected', () => {
  console.log('Database is connected successfully');
});
conn.on('error', console.error.bind(console, 'connection error:'));

// Start the server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
