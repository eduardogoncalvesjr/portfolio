import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function ProjectCard({ project }) {
  const { name, github, deploy, technologies, text, imagePath } = project;
  const maxTextLength = 130;
  const scrollText = text.length > maxTextLength ? 'scroll-text' : '';

  return (
    <div className="projects__card">
      <div className="projects__card-header">
        <img src={ imagePath } alt={ name } />
      </div>
      <div className="projects__card__body">
        <div className="projects__card-info">
          <h3>{name}</h3>
          <div className="projects__card-info-tags">
            {technologies.map((tech) => (
              <button
                className={ `${tech}-tag` }
                key={ `${name}-${tech}` }
              >
                {tech}
              </button>
            ))}
          </div>
          <div className={ `projects__card-info-text ${scrollText}` }>
            <p>{text}</p>
          </div>
        </div>
        <div className="projects__card-access">
          <button className="projects__card-deploy-button">
            <a href={ deploy }>Deploy</a>
          </button>
          {
            github && (
              <button className="projects__card-github-button">
                <a href={ github }>Github</a>
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    github: PropTypes.string,
    deploy: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    text: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
