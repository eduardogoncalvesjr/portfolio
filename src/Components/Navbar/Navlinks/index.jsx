import PropTypes from 'prop-types';

function NavLinks({ setShowMenu }) {
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowMenu(false);
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ul className="nav__list">
      <li className="nav__item">
        <a href="#home" className="nav__link" onClick={ toggleMenu }>Home</a>
      </li>
      <li className="nav__item">
        <a href="#about" className="nav__link" onClick={ toggleMenu }>About me</a>
      </li>
      <li className="nav__item">
        <a href="#projects" className="nav__link" onClick={ toggleMenu }>Projects</a>
      </li>
      <li className="nav__item">
        <a href="#contact" className="nav__link" onClick={ toggleMenu }>Contact</a>
      </li>
    </ul>
  );
}

NavLinks.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
};

export default NavLinks;
