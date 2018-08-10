var http = require('http');
var PORT;

var goodArr = ["You have a nice smile", "You are a good person", "Your shoes are pretty", "You are special"];
var badArr = ["You shoes are ugly", "You smell", "You aren't very nice", "Fix your hair"];


function getResponse(PORT) {
    function handleRequest(req, res) {
        var randomNum = Math.floor(Math.random() * 3) + 1
        if (PORT == 7000) {

            res.end(goodArr[randomNum]);
        } else if (PORT == 7050) {
            res.end(badArr[randomNum]);
        }
    }

    var server = http.createServer(handleRequest);

    server.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    })
}

getResponse(7000);
getResponse(7050);