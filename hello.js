const http = require('http');

http.createServer(function(request,response){
    response.writeHead(200);
    let html = "<HTML>"
    +"<head>"
    +"</head>"
    +"<body>"
    +"<p>List: </p>"
    +"<p>CIS 445  Mon Wed @9:30-10:45 am</p>"
    +"<p>CIS 245  Mon Wed @1:30-2:45 pm</p>"
    +"<p>MA 345   Tue Thr @8:00-9:15 am</p>"
    +"<p>Alternate view: </p>"
    +"<p>Mon: CIS 445 (9:30 - 10:45am),  CIS 245 (1:30 - 2:45 pm) </p>"
    +"<p>Tue: MA 345 (8:00 - 9:15 am) </p>"
    +"<p>Wed: CIS 445 (9:30 - 10:45am),  CIS 245 (1:30 - 2:45 pm) </p>"
    +"<p>Thr: MA 345 (8:00 - 9:15 am)</p>"
    +"</body>"
    +"</HTML>";
    response.write(html);
    response.end();
}).listen(8080);
console.log("listening on port 8080");