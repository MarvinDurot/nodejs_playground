let http = require('http');
let fs = require('fs');
let url = require ('url');

http.createServer((request, response) => {

    let query = url.parse(request.url, true).query;

    let name = query.name === undefined ? 'Anonyme' : query.name;

    fs.readFile('index.html', 'utf-8', (err, data) => {

        if (err) {
            response.writeHead(500);
            response.end();
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            });

            data = data.replace('{{ name }}', escaname);

            response.end(data);
        }
    });

}).listen(8080);