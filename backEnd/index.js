const express = require('express')
const colors = require('colors')
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
// dotenv configuration
dotenv.config();

// database configuration
connectDB()

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'))
app.use(cors());

// routes
app.use('/api/v1/user', require('./routes/userRoutes'))

// port
const port = process.env.PORT || 4000

// nodeMode
const nodeMode = process.env.NODE_MODE || 'development'

// listen port
app.listen(port, () => {
    console.log(`server is running on port ${port} in ${nodeMode} mode`.yellow.bold)
})