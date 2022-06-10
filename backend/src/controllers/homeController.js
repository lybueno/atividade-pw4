const Contato = require('../models/Contato');


// TODO: adicionar no controller de contatos parte para renderizar cadastro selecionado na página para update e delete

exports.index = async(req, res) => {
    
    const contatos =  await Contato.findAll();
    if(contatos.length > 0){
        res.render('index', { contatos });
    } else {
        res.render('contato');
    }
    console.log('teste')
  };