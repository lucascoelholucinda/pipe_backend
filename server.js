const express = require('express');
const bodyParser = require('body-parser');
const conect = require('./conexaoDB');
const cors = require('cors');

const server = express();
const port = 3000;

server.use(bodyParser.json());

server.listen(port, () => {
    console.log(`Servidor na porta: ${port}`);
});

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});

/* server.get('/:id', (req, res) => { 
    const sql = '';
    const value = [req.params.id];
    conect.query(sql, value).then((result) => {
        res.json({ pergunta: result.rows });
    }, error => {
        res.json("Id de pesquisa inválido, motivo: ", error );
    });
}); */