import path from 'path';
import http from 'http';
import express from 'express';
import logger from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';


const app = global.server = express();
const application = http.createServer(app);

app.enable('trust proxy');

// set the view engine to ejs
app.set('view engine', 'ejs');

// Should be placed before express.static
app.use(compression({
  filter: (req, res, next) => {
    (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
  },
  // zlib option for compression level
  level: 3
}));

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, 'public')));

// log every request to the console
app.use(logger('dev'));
// Read cookie (needed for auth) & CookieParser should be above session
app.use(cookieParser('TheHellIsWorkingForUs'));

// use body parser so we can grab information from POST requests
// get information from html forms
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Register API middleware
app.get('/', require('./api'))

// Launch the server
const server = application.listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + app.get('port'));
});
