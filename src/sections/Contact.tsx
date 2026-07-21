import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "../components/Container";
import { personal } from "../constants/personal";

const cards = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },

  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "zasia-farzin-siraz",
    href: personal.github,
  },

  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "Connect with me",
    href: personal.linkedin,
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: personal.location,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF7F5] py-32"
    >
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

      <Container>


        <h2 className="pixel-title mb-20 text-center text-[#49355A]">
          Get In Touch
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div>

            <h3 className="mb-8 text-4xl font-bold text-[#49355A]">
              Let's build something amazing together.
            </h3>

            <p className="mb-10 text-lg leading-9 text-[#655874]">
              I'm always interested in discussing software
              engineering, AI & Machine Learning, web
              development, internships, graduate roles,
              or exciting collaboration opportunities.
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="
              inline-block

              border-4

              border-[#BCA7DB]

              bg-[#F8DDE3]

              px-8

              py-4

              font-bold

              text-[#49355A]

              shadow-[6px_6px_0_#BCA7DB]

              transition-all

              hover:-translate-y-1
              "
            >
              Send Email ✉
            </a>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            {cards.map((card) => {

              const content = (
                <div
                  className="
                  flex

                  items-center

                  gap-5

                  border-4

                  border-[#BCA7DB]

                  bg-white

                  p-6

                  shadow-[6px_6px_0_#BCA7DB]

                  transition-all

                  duration-300

                  hover:-translate-y-1
                  "
                >
                  <div className="text-3xl text-[#D79AB7]">
                    {card.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-[#49355A]">
                      {card.title}
                    </h4>

                    <p className="text-[#655874]">
                      {card.value}
                    </p>
                  </div>
                </div>
              );

              if (card.href) {
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={card.title}>
                  {content}
                </div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;