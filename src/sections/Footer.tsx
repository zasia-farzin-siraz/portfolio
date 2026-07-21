import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Container from "../components/Container";
import { personal } from "../constants/personal";

const tech = [
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
];

function Footer() {
  return (
    <footer className="relative mt-24 pb-14">
      <Container>

        <div className="
          border-4
          border-[#BCA7DB]
          bg-[#F8DDE3]
          px-8
          py-10
          shadow-[8px_8px_0_#BCA7DB]
          text-center
        ">

          <p className="pixel-small text-[#7C618F]">
            Thanks for Visiting!
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-[#6D5A78]">
            Whether you're a recruiter, developer, or fellow learner,
            thank you for taking the time to explore my portfolio.
          </p>

          {/* Social Icons */}

          <div className="mt-8 flex justify-center gap-6 text-2xl text-[#8A6EA9]">

            <a href={personal.github}>
              <FaGithub />
            </a>

            <a href={personal.linkedin}>
              <FaLinkedin />
            </a>

            <a href={`mailto:${personal.email}`}>
              <FaEnvelope />
            </a>

          </div>

          {/* Divider */}

          <div className="my-8 border-t border-[#BCA7DB]" />

          {/* Tech badges */}

          <p className="mb-4 text-sm tracking-[0.3em] uppercase text-[#D79AB7]">
            Made With
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            {tech.map((item) => (

              <span
                key={item}
                className="
                border-2
                border-[#BCA7DB]
                bg-white
                px-4
                py-2
                text-sm
                font-semibold
                shadow-[3px_3px_0_#BCA7DB]
                "
              >
                {item}
              </span>

            ))}

          </div>

          <p className="mt-8 text-sm text-[#7C618F]">
            © 2026 Zasia Farzin Siraz
          </p>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;