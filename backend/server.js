const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')


const register = require('./routes/api/register');
const auth = require('./routes/api/auth');
const vendor = require('./routes/api/vendor');
const customer = require('./routes/api/customer');



const app = express();
const PORT = 4000;
const userRoutes = express.Router();

let User = require('./models/user');
let Product = require('./models/product');

app.use(cors());
app.use(bodyParser.json());

// Connection to mongodb
// mongoose.connect('mongodb://127.0.0.1:27017/orderTogether', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://sherlhangar:meenal129@cluster0-bzfxp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})

// Init middleware
app.use(express.json({extended : false}));


app.use('/api/register', register);
app.use('/api/auth', auth);
app.use('/api/vendor', vendor);
app.use('/api/customer/', customer);



app.use('/', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
