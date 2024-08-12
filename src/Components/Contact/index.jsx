import ContactIcons from './Icons';
import './styles.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__text">
          <h2>Contact</h2>
          <p>
            Feel free to contact me anytime.
            I will be happy to collaborate to
            your projects and help you bring
            your ideas to digital reality!
          </p>
        </div>
        <ContactIcons />
      </div>
      <hr />
    </section>
  );
}

export default Contact;
