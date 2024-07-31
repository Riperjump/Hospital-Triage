const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const patientsRoute = require('./routes/patients');

const app = express();



app.use(cors());
app.use(express.json());

app.use('/api/patients', patientsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
