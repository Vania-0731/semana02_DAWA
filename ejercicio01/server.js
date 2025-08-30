const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/'){
        res.statusCode = 200;
        res.end('<h1>Página Principal</h1><p>Bienvenido a mi servidor en Node.js</p>');
    }
    else if (req.url === '/about'){
        res.statusCode = 200;
        res.end('<h1>Acerca de </h1><p>Información sobre nosotros</p>');
    }
    else if (req.url === '/contact'){
        res.statusCode = 200;
        res.end('<h1>Contacto</h1><p>Puedes contactarnos al correo: ejemplo@gmail.com</p>');
    }
    else if(req.url === '/services'){
        res.statusCode = 200;
        res.end('<h1>Servicios</h1><ul><li>Desarrollo web</li><li>Aplicaciones móviles</li><li>Consultoria</li></ul>');
    }
    else if (req.url === '/error'){
        res.statusCode = 500;
        console.error("Error 500: Ocurrió un problema interno en el servidor");
        res.end('<h1>Error 500</h1><p>Ocurrió un problema en el servidor</p>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Error 404</h1><p>Página np encontrada</p>');
    }
});

server.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})