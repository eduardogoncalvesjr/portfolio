import github from '../../../Assets/images/github.svg';
import gmail from '../../../Assets/images/gmail.svg';
import linkedin from '../../../Assets/images/linkedin.svg';

function ContactIcons() {
  return (
    <div className="contact__icons">
      <a href="https://github.com/eduardogoncalvesjr">
        <img src={ github } alt="Github Link" />
      </a>
      <a href="https://www.linkedin.com/in/devedugjnr">
        <img src={ linkedin } alt="LinkedIn Link" />
      </a>
      <a href="mailto:eduardogjnr@gmail.com">
        <img src={ gmail } alt="Gmail contact" />
      </a>
    </div>
  );
}

export default ContactIcons;
