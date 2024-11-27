import { ReactComponent as IconeGitHub} from '../../assets/img/gitHub.svg';

function Navbar(){
    return(
        <header>
        <nav className="container">
          <div>
            <h1>Catálogo Movies</h1>
            <a href="https://github.com/Pedron1210">
            <div>
              <IconeGitHub/>
              <p>/GitHub</p>
              
            </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;