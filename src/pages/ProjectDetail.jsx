import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function Section({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ marginTop: 18 }}>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      <ul className="list">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="section">
        <div className="container">
          <h2>Project not found</h2>
          <Link className="btn" to="/">
            Back
          </Link>
        </div>
      </div>
    );
  }

  const s = project.sections || {};

  return (
    <div className="section">
      <div className="container">
        <div className="detailTop">
          <div>
            <Link className="badge" to="/">
              ← Back
            </Link>
            <h1 style={{ marginTop: 14 }}>{project.title}</h1>
            <p>{project.subtitle}</p>
          </div>

          <div className="btnRow">
            <a
              className="btn btnPrimary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="btn" href="/#projects">
              Projects
            </a>
          </div>
        </div>

        <div className="card" style={{ marginTop: 18 }}>
          <h2 style={{ marginBottom: 10 }}>Overview</h2>
          <p>{project.description}</p>

          <Section title="Problem" items={s.problem} />
          <Section title="Data" items={s.data} />
          <Section title="Method" items={s.method} />
          <Section title="Results" items={s.results} />
          <Section title="Implications & Recommendations" items={s.implications} />

          <div style={{ marginTop: 18 }}>
            <h2 style={{ marginBottom: 10 }}>Tech Stack</h2>
            <div className="chips">
              {project.tech.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.images?.length > 0 && (
            <div style={{ marginTop: 18 }}>
              <h2 style={{ marginBottom: 10 }}>Screenshots</h2>
              <div className="grid grid2">
                {project.images.map((src) => (
                  <div className="card imageCard" key={src}>
                    <img src={src} alt="" className="img" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: 18 }}>
            <a
              className="btn"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              Visit Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
