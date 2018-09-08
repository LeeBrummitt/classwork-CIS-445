const http = require('http');

http.createServer(function(request,response){
    response.writeHead(200);
    let html = "<HTML>"
    +"<head>"
    +"</head>"
    +"<body>"
    +"<p>CIS 445  Mon Wed @9:30-10:45 am</p>"
    +"<p>CIS 245  Mon Wed @1:30-2:45 pm</p>"
    +"<p>MA 345   Tue Thr @8:00-9:15 am</p>"
    +"</body>"
    +"</HTML>";
    response.write(html);
    response.end();
}).listen(8080);
console.log("listening on port 8080");