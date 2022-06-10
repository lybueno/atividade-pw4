import axios from "axios";
import ContatoCard from "components/ContatoCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Contato } from "types/contato";
import './styles.css';


function Listing() {

    const [contatos, setContatos] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/contatos")
        .then((response) => {
            const data = response.data
            setContatos(data)
            // console.log(data)
            // console.log(contatos.length)
        })
    }, [contatos.length])

    if(contatos.length === 0) {
        return(<div>
            <p>Agenda está vazia</p>
        </div>)
     } else {
        return ( 
            <>
                <div className="menu">
                    <h1>Lista de Contatos</h1>
                    <Link to="/contato/add">
                        <div>Cadastrar novo contato</div>
                    </Link>
                </div>
                <div className="container">
                    <div className="row"> 
                        {contatos && contatos.map( (contato: Contato) => (
                            <div  key={contato.id} className="col-sm-6 col-lg-4 col-lx-3 mb-3">
                            <ContatoCard contato={contato} />
                        </div>
                        )     
                        )}  
                    </div>
                </div> 
            </>
        );
    }}

export default Listing;