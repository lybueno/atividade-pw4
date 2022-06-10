import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header className="header">
          <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            
              <div className="agenda-nav-content">
                <h1>Projeto Agenda React</h1>
                
                <a href="https://github.com/lybueno">
                  <div className="agenda-contact-container">
                    <GithubIcon/>
                    <p className="agenda-contact-link">/lybuneo</p>
                  </div>
                </a>
              </div>
            
          </nav>
      </header>
    );
}

export default Navbar;