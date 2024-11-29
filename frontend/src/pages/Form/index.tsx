import './style.css';

function Form() {
  const movies = {
    id: 1,
    image:
    "https://th.bing.com/th/id/OIP.AHpzYF6H-XiYy5sVr2225QHaKo?w=189&h=272&c=7&r=0&o=5&pid=1.7",
    title: "O gladiador",
    count: 2,
    score: 4.0,
  };
  return (
    <div className="movies-form-container">
      <img className='movies-card-image' src={movies.image} alt={movies.title} />
      <div className="movies-card-bottom-container">
        <h3>{movies.title}</h3>
        <form className="movies-form">
          <div className="form-group movies-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input className="form-control" type="email" id="email" />
          </div>
          <div className="form-group movies-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="movies-form-btn-container">
            <button className="movies-btn" type="submit">
              Salvar
            </button>
          </div>
        </form>
        <a className="movies-btn" href="index.html">
          Cancelar
        </a>
      </div>
    </div>
  );
}

export default Form;
