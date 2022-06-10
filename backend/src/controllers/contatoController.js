const Contato = require('../models/Contato.js')


// abrir a página de cadastro de contato
exports.index = (req, res) => {
    res.render('contato', {
      contato: {}
    });
};

exports.findAll = async(req, res) => {
    const contatos = await Contato.findAll()
    res.send((contatos))
    res.status(200);
}

exports.create = async(req, res) => {
    const contato = await (req.body)
    try {
      await Contato.create({
          nome: contato.nome,
          email: contato.email,
          fone: contato.fone
      })
      //res.status(200).send(contato) usado para testes no Postman
      res.redirect('/')
      return;      
    } catch(e) {
      console.log(e);
      return res.status(404).send('404');
    }
  };
  
  exports.findOne = async function(req, res) {
    if(!req.params.id) return res.send('404');
  
    const contato = await Contato.findByPk(req.params.id);
   
    if(!contato) return res.send('404');
    res.status(200).send(contato)
  
  };
  
  exports.update = async function(req, res) {
    try {
      if(!req.params.id) return res.send('404');
      console.log(req.body)
      const contato = await Contato.findByPk(req.params.id);
      contato.set(req.body)
      const save = await contato.save()
      res.status(200).send(save)
      return;
    } catch(e) {
      console.log(e);
      res.send('404');
    }
  };
  
  exports.delete = async function(req, res) {
    if(!req.params.id) return res.send('404');
  
    const contato = await Contato.findByPk(req.params.id);
    contato.destroy()
    res.send("Contato excluído com sucesso!")
    if(!contato) return res.send('404');
  
    return;
  };