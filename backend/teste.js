(async () => {
    const banco = require('./src/database/db.js')
    const Contato = require('./src/models/Contato.js')
    await banco.sync();

    const contatoTeste = await Contato.create({
        nome: "Nome",
        email: "nome@mail.com",
        fone: "(11) 91234-5678"
    })
    console.log(contatoTeste.id);
    console.log(contatoTeste.nome);
    console.log(contatoTeste.email);
    console.log(contatoTeste.fone);

    const contato = await Contato.findByPk(1);

    console.log(`ID: ${contato.id} = Nome: ${contato.nome}`)
    
})();