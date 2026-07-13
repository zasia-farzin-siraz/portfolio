import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Container from "../components/Container";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] py-28"
    >
      <Container>

        <h2 className="mb-6 text-center text-4xl font-bold text-[#D66BFF]">
          Let's Connect
        </h2>

        <p className="mb-12 text-center text-gray-400">
          Feel free to reach out through any of these platforms.
        </p>

        <div className="flex justify-center gap-8">

          {/* Email */}
          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="text-[#D66BFF] text-4xl transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_20px_#B026FF]"
          >
            <FaEnvelope />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/zasia-farzin-siraz"
            target="_blank"
            rel="noreferrer"
            className="text-[#D66BFF] text-4xl transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_20px_#B026FF]"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noreferrer"
            className="text-[#D66BFF] text-4xl transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_20px_#B026FF]"
          >
            <FaLinkedin />
          </a>

        </div>

      </Container>
    </section>
  );
}

export default Contact;