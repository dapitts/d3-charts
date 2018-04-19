let connect = require('connect'),
    serveStatic = require('serve-static'),
    app = connect(),
    hostname = '127.0.0.1',
    port = 8080;
    
app.use(serveStatic('./', { 'index': ['d3-multi-line.html'] } ));
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});