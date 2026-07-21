import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Container from "../components/Container";
import { projects } from "../constants/projects";

function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <Container>

        {/* Background Watermark */}

        <h1
          className="
          pointer-events-none
          absolute
          right-6
          top-4
          select-none
          text-[140px]
          font-black
          uppercase
          text-[#C8B5E8]
          opacity-[0.05]
          "
        >
          PROJECTS
        </h1>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >

          <p
            className="
            mb-4
            text-lg
            font-semibold
            uppercase
            tracking-[6px]
            text-[#D79AB7]
            "
          >
            Featured Work
          </p>

          <h2 className="pixel-title text-4xl leading-tight text-[#6F588A]">
            Selected Projects
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-[#655874]
            "
          >
            A collection of AI, Machine Learning and Full Stack
            applications focused on solving real-world problems through
            clean design, thoughtful user experience and practical engineering.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-14 lg:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
              group
              overflow-hidden
              rounded-[24px]
              border-4
              border-[#BCA7DB]
              bg-[#FFF9FB]
              shadow-[8px_8px_0_#BCA7DB]
              transition-all
              duration-300
              hover:shadow-[12px_12px_0_#D79AB7]
              "
            >

              {/* Fake Window Header */}

              <div
                className="
                flex
                items-center
                gap-3
                border-b-4
                border-[#BCA7DB]
                bg-[#F8DDE3]
                px-5
                py-4
                "
              >
                <div className="h-3 w-3 rounded-full bg-[#FFB7C5]" />
                <div className="h-3 w-3 rounded-full bg-[#F7D794]" />
                <div className="h-3 w-3 rounded-full bg-[#B8E0D2]" />
              </div>

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="
                h-72
                w-full
                border-b-4
                border-[#BCA7DB]
                object-cover
                transition-all
                duration-500
                group-hover:scale-105
                "
              />

              {/* Content */}

              <div className="p-7">

                <h3 className="mb-3 text-2xl font-bold text-[#49355A]">
                  {project.title}
                </h3>

                <p className="mb-6 leading-7 text-[#6E5C82]">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mb-7 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                      rounded-full
                      border-2
                      border-[#D6C8EA]
                      bg-[#FFF6FA]
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-[#7A5D99]
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4">

                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border-4
                      border-[#BCA7DB]
                      bg-[#F8DDE3]
                      px-5
                      py-3
                      font-semibold
                      text-[#49355A]
                      shadow-[4px_4px_0_#BCA7DB]
                      transition
                      hover:-translate-y-1
                      "
                    >
                      <FaGithub />
                      GitHub
                    </a>

                  )}

                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border-4
                      border-[#D79AB7]
                      bg-[#FFEAF2]
                      px-5
                      py-3
                      font-semibold
                      text-[#49355A]
                      shadow-[4px_4px_0_#D79AB7]
                      transition
                      hover:-translate-y-1
                      "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;