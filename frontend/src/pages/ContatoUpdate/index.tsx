
import axios from 'axios';
import './styles.css';
import {useEffect, useState} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

type UrlParams = {
    id: string;
  };

function ContatoUpdate() {

    
    const sendTo = useNavigate()

    const { id } = useParams<UrlParams>();
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [fone, setFone] = useState("")

    console.log(JSON.stringify(id))

    /* 
        o useEffect além de executar a função na montagem do componente, ele pode 
        executar a função novamente qdo um dos objetos colocados na lista de 
        dependências  alterar
    */
    useEffect(() => {
        
        axios.get(`http://localhost:8000/contato/${id}`) 
        .then(response=> {
            const data = response.data
            console.log(data.nome)
            setNome(data.nome)
            setEmail(data.email)
            setFone(data.fone)
        })
        
    }, [id])

    let handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        updateContato()
    }

    async function updateContato(){
        let body = JSON.stringify({
            id: id,
            nome: nome,
            email: email,
            fone: fone
        })
        try {
            let res = await fetch(`http://localhost:8000/contato/update/${id}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            })
            if (res.status === 200) {
                sendTo("/")
            } else {
                alert("ops! Ocorreu um erro ao atualizar o cadastro. Tente mais tarde.")
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        
        <div className="container">
            <div className="row">        
                <div className="col-lg-8 my-3">
                    <h1 className="text-center">Contato</h1>
                    <p className="text-center lead">Edite seu contato abaixo.</p>
                    <div className='main-container'>
                        <form  onSubmit={handleSubmit} method="POST">
                            
                            <div className="form-group">
                                <label>Nome:</label>
                                <input value={nome} type="text" className="form-control" name="nome" onChange={ (e) => setNome(e.target.value) }/>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input value={email} type="email" className="form-control" name="email" onChange={ (e) => setEmail(e.target.value) }/>
                            </div>
                            <div className="form-group">
                                <label>Telefone:</label>
                                <input value={fone} type="tel" className="form-control" name="fone" onChange={ (e) => setFone(e.target.value) }/>
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
    );}

export default ContatoUpdate;