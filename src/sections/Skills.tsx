import { motion } from "framer-motion";
import Container from "../components/Container";

const skills = [
  "Python",
  "C++",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "HTML",
  "JavaScript",
  "Flask",
  "SQLite",
  "Figma",
  "Git & GitHub",
  "Microsoft Office",
  "AI/ML",
  ]

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#050505] py-32"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold text-[#B026FF]"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="
                cursor-pointer
                rounded-2xl
                border
                border-[#B026FF]
                bg-[#111111]
                p-6
                text-center
                text-lg
                font-semibold
                text-white
                transition-all
                duration-300
                hover:shadow-[0_0_25px_rgba(176,38,255,0.8)]
              "
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;