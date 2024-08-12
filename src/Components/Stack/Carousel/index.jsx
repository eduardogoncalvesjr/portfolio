import './styles.css';

function Carousel() {
  return (
    <div className="tags-container">
      { Array.from({ length: 3 }, (_, i) => (
        <div key={ i } className="tags-slide">
          <button className="tag-button">Custom Hooks</button>
          <button className="tag-button">Context Api</button>
          <button className="tag-button">Jest</button>
          <button className="tag-button">RTL Tests</button>
          <button className="tag-button">Git</button>
          <button className="tag-button">Express</button>
          <button className="tag-button">Api RESTful</button>
          <button className="tag-button">Testes de integração</button>
          <button className="tag-button">Testes Unitários</button>
          <button className="tag-button">Metodologias Ágeis</button>
        </div>
      )) }
    </div>
  );
}

export default Carousel;
