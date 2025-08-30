const http = require('http');
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const PORT = 3000;
const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        const filePath = path.join(__dirname, "views", "home.hbs");

        fs.readFile(filePath, "utf8", (err, templateData)=>{
            if (err){
                res.statusCode = 500;
                res.end("Error interno del servidor");
                return;
            }

            const template = handlebars.compile(templateData);

            const data = {
                title: "Servidor con Handlebars",
                welcomeMessage: "Bienvenido al laboratorio 02 de Node.js",
                day: new Date().toLocaleDateString("es-PE"),
                students: ["Ana", "Vania", "Franc", "Adrian"],
            };

            const html = template(data);

            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(html);
        });
    }
    else if(req.url === "/about"){
        const filePath = path.join(__dirname, "views", "about.hbs");
        fs.readFile(filePath, "utf8", (err, templateData)=>{
            if (err){
                res.statusCode = 500;
                res.end("Error interno del servidor");
                return;
            }
            const template = handlebars.compile(templateData);
            const data = {
                title: "Ejercicio about - Desarrollo de Aplicaciones Web Avanzadas",
                curso: "Desarrollo de Aplicaciones Web Avanzadas",
                profesor : "Edwin William Arévalo",
                fecha: new Date().toLocaleDateString("es-PE"),
            };
            const html = template(data);
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(html);
        })
    }
    else if (req.url === "/students") {
        const filePath = path.join(__dirname, "views", "students.hbs");

        fs.readFile(filePath, "utf8", (err, templateData) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error interno del servidor");
                return;
            }

            const template = handlebars.compile(templateData);

            const data = {
            title: "Lista de Estudiantes",
            students: [
                { nombre: "Ana", nota: 14, resaltado: false },
                { nombre: "Vania", nota: 18, resaltado: true },
                { nombre: "Franc", nota: 12, resaltado: false },
                { nombre: "Adrian <3", nota: 17, resaltado: true }
            ]
            };


            const html = template(data);

            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(html);
        });
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 - PAGINA NP ENCONTRADA</h1>");
    }
});

server.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})