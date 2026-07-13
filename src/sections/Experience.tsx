import { motion } from "framer-motion";
import Container from "../components/Container";

function Experience() {
  return (
    <section id="experience" className="bg-[#050505] py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-14 text-center text-5xl font-bold text-[#D66BFF] drop-shadow-[0_0_20px_#B026FF]">
            Education & Experience
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-[#B026FF] bg-[#111111] p-8 transition-all duration-300 hover:shadow-[0_0_35px_#B026FF]">
              <h3 className="mb-2 text-2xl font-bold text-white">
                BRAC University
              </h3>

              <p className="text-[#D66BFF]">
                B.Sc. in Computer Science & Engineering
              </p>

              <p className="mt-2 text-gray-400">
                2021 – 2026
              </p>

              <p className="mt-6 text-gray-400">
                Focused on software engineering, web development,
                databases, AI, and UI/UX design.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B026FF] bg-[#111111] p-8 transition-all duration-300 hover:shadow-[0_0_35px_#B026FF]">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Highlights
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>✔ Developed multiple React applications</li>
                <li>✔ Built full-stack projects using Flask</li>
                <li>✔ Created UI/UX designs with Figma</li>
                <li>✔ AI & Deep Learning academic project</li>
                <li>✔ Strong problem-solving and teamwork skills</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Experience;