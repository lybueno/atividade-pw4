import { useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css'

function ContatoAdd() {

    const sendTo = useNavigate()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [fone, setFone] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault()
        addContact()
    }

    async function addContact(){
        try{
            let body = JSON.stringify({
                nome: nome,
                email: email,
                fone: fone
            })

            let response = await fetch("http://localhost:8000/contato/add", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            })
            if(response.status === 200){
                alert("Cadastro efetuado com sucesso")
                sendTo("/")
            } else {
                alert("Ops! Não foi possível efetuar o cadastro. Tente mais tarde.")
            }
        } catch(e){
            console.log(e)
        }
    }

    return (
        
        <div className="container">
            <div className="row">        
                <div className="col-lg-8 my-3">
                    <h1 className="text-center">Contato</h1>
                    <p className="text-center lead">Crie seu contato abaixo.</p>
                    <div className='main-container'>
                        <form onSubmit={handleSubmit} method="POST">
                            
                            <div className="form-group">
                                <label>Nome:</label>
                                <input type="text" className="form-control" name="nome" onChange={ (e) => setNome(e.target.value) }/>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" className="form-control" name="email" onChange={ (e) => setEmail(e.target.value) }/>
                            </div>
                            <div className="form-group">
                                <label>Telefone:</label>
                                <input type="tel" className="form-control" name="fone" onChange={ (e) => setFone(e.target.value) }/>
                            </div>
                            <button type="submit" className="saveBt">Salvar</button>
                            <Link to="/" >
                                <button className='gobackBt'>Voltar</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContatoAdd;