import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'JavaScript/TypeScript',
      skills: []
    },
    {
      category: 'React',
      skills: []
    },
    {
      category: 'Node.js / NestJS',
      skills: []
    },
    {
      category: 'PostgreSQL / MongoDB / SQL / Oracle',
      skills: []
    },
    {
      category: 'MySQL',
      skills: []
    },
    {
      category: 'API Integration (REST / GraphQL)',
      skills: []
    },
    {
      category: 'UX/UI - Styled Components',
      skills: []
    },
    {
      category: 'DevOps / Agile (Scrum, Kanban) / Tools (VSCode, IntelliJ, Git)',
      skills: []
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.category}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

