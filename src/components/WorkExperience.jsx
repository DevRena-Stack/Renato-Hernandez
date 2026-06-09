import './WorkExperience.css'

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Desarrollador Full-Stack',
      company: 'Practicante en Rindegastos SPA',
      location: 'Santiago, Chile',
      period: 'Terminado - Proceso de Practica (Diciembre 2025 - Marzo 2026)',
      description: [
        'Desarrollo de aplicaciones full-stack con tecnologías modernas',
        'Aprendiendo la implementacion de APIs REST con Node.js',
        'Desarrollo de interfaces con React, y TypeScript',
        'Gestión de bases de datos MySQL y Oracle',
        'Manejo de Terminal y Linea de Comandos'
      ]
    },
  ]

  return (
    <section className="section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experiences">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
              </div>
            </div>
            <div className="experience-company">
              {exp.company} • {exp.location}
            </div>
            <ul className="experience-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience

