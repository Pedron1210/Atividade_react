import { ReactComponent as IconeGitHub} from '../../assets/img/gitHub.svg';

import './style.css';

function Navbar(){
    return(
        <header>
        <nav className="container">
          <div className= "movies-nav-content">
            <h1>Catálogo Movies</h1>
            <a href="https://github.com/Pedron1210">
            <div className='movies-repository-container'>
              <IconeGitHub/>
              <p className='movies-repository-link'>/GitHub</p>
              
            </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;