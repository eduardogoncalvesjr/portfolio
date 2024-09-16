import './styles.css';
import projects from '../../Content/content';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects__cards-container">
          {projects.map((project) => (
            <ProjectCard
              key={ project.id }
              project={ project }
            />
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Projects;
