import './Projects.css'

const Projects = () => {
  const projects = [
    {
      name: 'Proyecto 1',
      description: 'Proyecto personal donde realice un sistema para poder registrar la llegada de estudiantes a un colegio, donde constaba de que un estudiante con su celular escaneara un codigo QR y automaticamente marcara que el estudiante habia llegado temprano y a la hora. Full-stack con React, Node.js y PostgreSQL',
      technologies: ['Python', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MySQL']
    },
    {
      name: 'Proyecto 2',
      description: 'Aplicacion web echa en base a un apoyo a un emprendimiento, donde tuvimos que reunir los datos del usuario y los requerimiento que tenia que tener la aplicacion web.',
      technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      name: 'Proyecto3',
      description: ''
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

