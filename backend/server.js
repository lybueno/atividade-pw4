const express = require('express');
const app = express();

const path = require('path');

const cors = require('cors');
app.use(cors());

// tratar o body
app.use(express.urlencoded({extended: false}));

const routes = require('./routes');
app.use(express.json());

const porta = 8000;


//Comandos que seriam usados para visualizar as páginas html feitas com ejs

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

(async () => {
    const banco = require('./src/database/db.js')
    await banco.sync();
})();

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
    app.use(routes)
})