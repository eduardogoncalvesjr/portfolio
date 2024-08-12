/* eslint-disable sonarjs/no-duplicate-string */
import code from '../../Assets/images/code.svg';
import teamwork from '../../Assets/images/teamwork.svg';
import './styles.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__me">
          <div className="about__me-text">
            <h2>About Me</h2>
            <p>
              I began my career as a Translator
              and English Tutor. One day, driven
              by curiosity, I enrolled in an online
              front-end programming course, and it
              was a turning point in my life.
              I discovered a passion for programming
              and I am now dedicated to improving my skills every day. ❤️
            </p>
          </div>
          <img className="about__image" src={ code } alt="" />
        </div>
        <div className="about__personal">
          <div className="about__personal-text">
            <h2>Personal Skills</h2>
            <p>
              I have a great ability to communicate.
              I enjoy talking and I love teaching what
              I know. I can work in a team seamlessly
              guiding my team to success 🚀
            </p>
          </div>
          <img className="about__image" src={ teamwork } alt="" />
        </div>
      </div>
      <hr />
    </section>
  );
}

export default About;
