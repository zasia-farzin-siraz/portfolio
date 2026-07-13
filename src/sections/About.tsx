import { motion } from "framer-motion";
import Container from "../components/Container";

function About() {
  return (
    <section id="about" className="bg-[#050505] py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10 text-center text-5xl font-bold text-[#D66BFF] drop-shadow-[0_0_20px_#B026FF]">
            About Me
          </h2>

          <p className="mx-auto max-w-4xl text-center text-lg leading-9 text-gray-400">
          I'm a Computer Science and Engineering graduate passionate
          about software development, UI/UX design, AI, and creating
          modern web experiences. I enjoy turning ideas into elegant,
          functional applications while continuously learning new
          technologies.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;