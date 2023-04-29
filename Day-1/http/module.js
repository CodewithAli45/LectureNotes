const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome to Node js class');
        res.end();
    }
    if(req.url === '/names'){
        res.write(JSON.stringify(['ali', 'murtaza', 'jyoti']));
        res.end();
    }

    if(req.url === '/users'){
        let user = {
            name : 'Ali',
            age : 10,
            wife: 'Babita',
            children : 'none',
            status : "ok",
            contact : 9661221326
        }

       res.write(JSON.stringify(user));
       res.end();
    }
});

server.listen(3000, () => {
    console.log('server is running at port 3000');
});