import PropTypes from 'prop-types';
import './styles.css';

function Button({ buttonText }) {
  return (
    <a href="https://www.linkedin.com/in/devedugjnr">
      <button className="hero__button">{buttonText}</button>
    </a>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
