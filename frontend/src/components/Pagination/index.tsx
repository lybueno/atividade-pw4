import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import { ContatoPage } from 'types/contato';
import './styles.css';

type Props = {
    page: ContatoPage;
    onChange: Function;
}

function Pagination ({ page, onChange } : Props) {

    return (
        <div className="agenda-pagination-container">
            <div className="agenda-pagination-box">
                <button className="agenda-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number+1} de ${page.totalPages}`}</p>
                <button className="agenda-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
                    <Arrow className="agenda-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;