import { Link, useNavigate, useParams } from "react-router-dom";
import { Contato } from "types/contato";
import './styles.css';

type Props = {
    contato : Contato;
}

type UrlParams = {
    id: string;
};

function ContatoCard({ contato } : Props) {

    const sendTo = useNavigate()

    const { id } = useParams<UrlParams>();

    console.log(id)

    // let handleClick =  (e: { preventDefault: () => void; }) => {
    //     e.preventDefault()
    //     deletarContato()
    // }

    async function deletarContato(id: String) {
        try {
            let res = await fetch(`http://localhost:8000/contato/delete/${id}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            if (res.status === 200) {
                alert("Contato excluído.")
                document.location.reload()
            } else {
                alert("ops! Ocorreu um erro ao excluir o cadastro. Tente mais tarde.")
                sendTo("/")
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className='base-card agenda-card'>
            <div className='card-top-container'>
                <img src="https://www.fusionpartners.co/wp-content/uploads/2020/03/contacts.png" alt="Icone de contato" />
            </div>           
            <div className="card-bottom-container">
                <h3>{contato.nome}</h3> 
                <p>{contato.email}</p>     
                <p>{contato.fone}</p>
            </div>
            <div className="card-buttons">

                <Link to={`/contato/update/${contato.id}`}>
                    <div className="update">Editar</div>
                </Link>
                                    
                <Link to={`/contato/delete/${contato.id}`}>
                    <div className="delete" onClick={() =>{deletarContato((contato.id).toString())}}>Excluir</div>
                </Link>
            </div>
        </div>
    );
}

export default ContatoCard;