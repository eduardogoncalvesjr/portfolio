import './styles.css';
import profile from '../../Assets/images/profile.png';
import Button from './Button';

function Hero() {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__greetings">
          <p className="home__intro-name">Hello, I&apos;m Eduardo</p>
          <h1 className="home__intro-title">Front-End Developer</h1>
          <p className="home__intro-text">
            I&apos;m a brazilian developer who creates
            responsive digital solutions with React
            and Typescript. I&apos;m currently exploring
            technologies such as Docker, MySQL and Node.js.
          </p>
          <div className="greetings__buttons">
            <Button buttonText="Send me a message" />
          </div>
        </div>
        <div className="home__profile">
          <div className="home__profile-picture ">
            <img src={ profile } alt="Profile picture." />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Hero;
