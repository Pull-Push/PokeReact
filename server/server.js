
const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
app.use(cors())                 /* This is new */
/* This is a short-hand notation we use: */
require('./routes/poke.routes')(app);
/* These two lines are the long-hand notation of the above code, to better illustrate what's going on: */
/* const personRoutes = require("./routes/person.routes"); */
/* personRoutes(app); */
app.listen(8008, () => {
    console.log("Listening at Port 8008")
})