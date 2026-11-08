let express = require('express');
let app = express();
// nirajan shrestha

app.get('/', function (req, res) {
    res.json({ 
        shoppingCart: [{
            product: "laptop", 
            number: 10,
            price: 650
        }, {
            product: "monitor",
            number: 12,
            price: 300
        }]
    });
    res.end();
});

app.listen(3002, function () {
  console.log("app listening on port 3002!");
});

