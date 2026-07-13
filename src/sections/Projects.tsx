import Container from "../components/Container";
import { projects } from "../constants/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="bg-[#050505] py-28">
      <Container>
        <h2 className="mb-14 text-center text-4xl font-bold text-[#B026FF]">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
group overflow-hidden
rounded-2xl
border
border-[#B026FF]
bg-[#111111]
transition-all
duration-500
hover:-translate-y-3
hover:scale-[1.02]
hover:border-[#E78CFF]
hover:shadow-[0_0_45px_rgba(176,38,255,0.9)]
"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-5 text-gray-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#B026FF] px-3 py-1 text-sm text-[#B026FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-[#B026FF] px-4 py-2 text-white transition hover:bg-[#C84DFF]"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-[#B026FF] px-4 py-2 text-[#B026FF] transition hover:bg-[#B026FF] hover:text-white"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;