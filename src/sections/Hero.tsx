import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Button from "../components/Button";
import Container from "../components/Container";
import { personal } from "../constants/personal";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-br from-[#050505] via-[#0B0612] to-[#050505] pt-20"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-lg font-medium tracking-wide text-[#D66BFF]">
              Hi, I'm
            </p>

            <h1 className="
text-5xl
md:text-7xl
font-extrabold
leading-tight
text-[#D66BFF]
transition-all
duration-300
cursor-default
hover:drop-shadow-[0_0_30px_#B026FF]
hover:scale-105
">
              {personal.name}
            </h1>

            <h2 className="mt-4 text-2xl font-medium text-gray-200">
              {personal.title}
            </h2>

            <div className="
mt-6
text-2xl
font-bold
text-[#D66BFF]
drop-shadow-[0_0_18px_#B026FF]
">
              <TypeAnimation
                sequence={[
                  ...personal.roles.flatMap(role => [role, 2000]),
                ]}
                repeat={Infinity}
              />
            </div>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">
              {personal.description}
            </p>

            <div className="mt-10 flex gap-4">

              <Button href="#projects">
                View Projects
              </Button>

              <Button href="/resume.pdf">
                Download CV
              </Button>

            </div>
            
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/profile.JPG"
              alt="Zasia"
              className="
h-96
w-96
rounded-full
object-cover
border-4
border-[#B026FF]
shadow-[0_0_70px_rgba(176,38,255,0.45)]
transition-all
duration-500
hover:rotate-1
hover:scale-105
hover:shadow-[0_0_110px_rgba(176,38,255,0.95)]
"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;