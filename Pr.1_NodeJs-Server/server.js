const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/' || url === '/index') 
        {
        serveFile(res, 'index.html', 'text/html');
    } 
    else if (url === '/home') 
        {
        serveFile(res, 'home.html', 'text/html');
    } 
    else if (url === '/about') 
        {
        serveFile(res, 'about.html', 'text/html');
    } 
    else if (url === '/product') 
        {
        serveFile(res, 'product.html', 'text/html');
    } 
    else if (url === '/contact') 
        {
        serveFile(res, 'contact.html', 'text/html');
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});