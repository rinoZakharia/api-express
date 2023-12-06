require('dotenv').config()
const express = require('express');
const barangRoute = require('./routes/barangRoute')
const logReq = require('./middleware/log')
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(logReq.logRequest);
app.use(express.json());

app.use("/barang", barangRoute);

app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
})