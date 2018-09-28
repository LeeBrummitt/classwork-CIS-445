const http = require('http');

http.createServer(function(req,res){
    //res.writeHead(200);
    res.write('asdf');
    setTimeout(function(){
        res.write('qwerty');
        res.end();
    }, 5000);
}).listen(8080);
console.log("listening on port 8080");