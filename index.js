const express = require("express")
var app = express()

app.use(express.static('front-end'))

app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});
