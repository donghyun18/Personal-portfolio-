import ProjectCard from "../components/ProjectCard";
import { projects, additionalProjects } from "../data/projects";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="section">
        <div className="container heroGrid">
          {/* Left */}
          <div>
            <span className="badge">Artificial Intelligence / Data Science</span>
            <h1 style={{ marginTop: 14 }}>Portfolio</h1>
            <p>Data-driven projects across forecasting, analytics, and human-centered AI.</p>

            <div className="btnRow">
              <a className="btn btnPrimary" href="#projects">
                View Projects
              </a>
              <a
                className="btn"
                href="https://github.com/donghyun18"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a className="btn" href="/Resume - Lee Donghyun.pdf" download>
                Resume
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="heroCard">
            <img
              className="heroAvatar"
              src="/images/profile.png"
              alt="Donghyun Lee"
            />
            <div>
              <h3 className="heroName">Donghyun Lee</h3>
              <p className="heroTag">MSc Artificial Intelligence • Leeds, UK</p>

              <ul className="heroList">                
                <li>MSc Artificial Intelligence — University of Leeds</li>
                <li>BCompSc — University of Wollongong</li>
                <li>Diploma in IT — SIM Global Education</li>
                <li>SIM Multicultural Mix Club — Member (2024–2025)</li>
                <li>Talk To Mirae Supporters — Korean Community SG (2024–2025)</li>
              </ul>

              <div className="heroLinks">
                <a
                  className="heroLink"
                  href="https://www.linkedin.com/in/donghyunlee031a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <span className="heroDot">•</span>
                <a className="heroLink" href="mailto:wm07247@gmail.com">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Featured Projects ===== */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="grid grid2" style={{ marginTop: 14 }}>
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Additional Projects ===== */}
      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>Additional Projects</h2>
            <p className="muted">Smaller web projects (code available, deployment in progress).</p>
          </div>

          <div className="grid grid2" style={{ marginTop: 14 }}>
            {additionalProjects.map((p) => (
              <div className="card miniCard cardHover" key={p.id}>
                <div>
                  <h3 className="cardTitle">{p.title}</h3>
                  <p className="cardSubtitle">{p.subtitle}</p>
                </div>

                <p className="cardDesc">{p.description}</p>

                <div className="chips">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* ✅ Mood Diary처럼 showcase가 있으면 “Live demo planned” 대신 Showcase 보여주기 */}
                {p.showcase ? (
                  <div className="showcase">
                    <h4 className="showcaseTitle"> GIF + Notes</h4>
                    {p.showcase.note ? (
                      <p className="miniHint" style={{ marginTop: 6 }}>
                        {p.showcase.note}
                      </p>
                    ) : null}

                    <div className="showcaseGrid">
                      {p.showcase.gif ? (
                        <a
                          className="showcaseMedia"
                          href={p.showcase.gif}
                          target="_blank"
                          rel="noreferrer"
                          title="Open media"
                        >
                          <img
                            src={p.showcase.gif}
                            alt={`${p.title} demo`}
                            className="showcaseImg"
                            loading="lazy"
                          />
                        </a>
                      ) : null}

                      {p.showcase.highlights?.length ? (
                        <ul className="showcaseList">
                          {p.showcase.highlights.slice(0, 4).map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                <div className="btnRow" style={{ marginTop: 14 }}>
                  <a
                    className="btn btnPrimary"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  {p.demo ? (
                    <a className="btn" href={p.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : p.showcase ? null : (
                    <span className="miniHint">Live demo planned</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section id="skills" className="section">
        <div className="container">
          <h2>Skills</h2>
          <div className="grid grid2" style={{ marginTop: 14 }}>
            <div className="card">
              <h3>Data / ML</h3>
              <ul className="list">
                <li>Pandas, NumPy, scikit-learn, XGBoost, Prophet</li>
                <li>TensorFlow / Keras (modeling, tuning with Keras Tuner)</li>
                <li>Regression, Time-series forecasting, evaluation (RMSE/MAE)</li>
              </ul>
            </div>

            <div className="card">
              <h3>Tools</h3>
              <ul className="list">
                <li>Git/GitHub, Jupyter Notebook, VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="section">
        <div className="container">
          <h2>About</h2>
          <div className="card" style={{ marginTop: 14 }}>
            <p>
              I’m an MSc Artificial Intelligence student at the University of Leeds, with a
              background in Big Data and Computer Science. I enjoy building data-driven projects
              that connect machine learning and AI with real-world decision-making, particularly
              across forecasting, analytics, and human-centered applications.
            </p>
            <p>
              My project experience includes machine learning, time-series forecasting, data
              visualization, and AI-assisted web applications. Alongside technical work, I have
              collaborated in multicultural and team-based environments, strengthening my ability
              to communicate ideas clearly, contribute effectively to group projects, and continue
              developing toward AI and data-focused roles.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <div className="card" style={{ marginTop: 14 }}>
            <p style={{ marginBottom: 14 }}>
              Feel free to reach out for collaboration, research opportunities, or graduate study.
            </p>
            <div className="btnRow">
              <a className="btn btnPrimary" href="mailto:wm07247@gmail.com">
                Email
              </a>
              <a
                className="btn"
                href="https://www.linkedin.com/in/donghyunlee031a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn"
                href="https://github.com/donghyun18"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <div className="footer">
        <div className="container">© 2026 Donghyun Lee</div>
      </div>
    </>
  );
}
