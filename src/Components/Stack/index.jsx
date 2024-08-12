import react from '../../Assets/stack/react.png';
import redux from '../../Assets/stack/redux.png';
import typescript from '../../Assets/stack/typescript.png';
import docker from '../../Assets/stack/docker.png';
import bootstrap from '../../Assets/stack/bootstrap.png';
import css from '../../Assets/stack/css.png';
import javascript from '../../Assets/stack/javascript.png';
import mysql from '../../Assets/stack/mysql.png';
import nodejs from '../../Assets/stack/nodejs.png';
import './styles.css';
import Carousel from './Carousel';

function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="container">
        <h2>My Stack</h2>
        <div className="stack__container">
          <div className="stack__container-imagebox">
            <img src={ react } alt="React" />
            <p>React</p>
          </div>
          <div className="stack__container-imagebox">
            <img src={ redux } alt="Redux" />
            <p>Redux</p>
          </div>
          <div className="stack__container-imagebox">
            <img src={ javascript } alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="stack__container-imagebox">
            <img src={ typescript } alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div className="stack__container-imagebox">
            <img src={ css } alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="stack__container-imagebox">
            <img src={ bootstrap } alt="Bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="stack__container-imagebox">
            <img src={ nodejs } alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="stack__container-imagebox">
            <img src={ docker } alt="Docker" />
            <p>Docker</p>
          </div>
          <div className="stack__container-imagebox">
            <img src={ mysql } alt="MySQL" />
            <p>MySQL</p>
          </div>
        </div>
        <h3>Other Skills</h3>
        <Carousel />
      </div>
      <hr />
    </section>
  );
}

export default Stack;
