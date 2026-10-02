import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="card cardHover">
      <div className="cardHeader">
        <div>
          <h3 className="cardTitle">{project.title}</h3>
          <p className="cardSubtitle">{project.subtitle}</p>

          {/* ✅ Hackathon / Award badge */}
          {project.badge && (
            <p className="cardBadge">{project.badge}</p>
          )}
        </div>
      </div>

      <p className="cardDesc">{project.description}</p>

      <ul className="list">
        {project.bullets.slice(0, 4).map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="chips">
        {project.tech.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="btnRow" style={{ marginTop: 14 }}>
        <Link className="btn btnPrimary" to={`/project/${project.id}`}>
          View details
        </Link>
        <a
          className="btn"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
