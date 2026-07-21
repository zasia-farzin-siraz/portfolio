import { motion } from "framer-motion";
import Container from "../components/Container";
import { personal } from "../constants/personal";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFF7F5] py-32"
    >
      {/* Background Decoration */}

      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />

      {/* Giant Background Text */}

      <h1
        className="
        absolute
        left-10
        top-10

        text-[170px]

        font-black

        text-[#D79AB7]

        opacity-10

        select-none

        pointer-events-none
        "
      >
        ABOUT
      </h1>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="mb-4 text-center text-lg font-semibold uppercase tracking-[6px] text-[#D79AB7]">
            Get To Know Me
          </p>

          <h2 className="pixel-title mb-20 text-center text-[#49355A]">
            About Me
          </h2>

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left Card */}

            <div
              className="
              border-4
              border-[#BCA7DB]
              bg-[#F8DDE3]
              p-8

              shadow-[10px_10px_0_#BCA7DB]
              "
            >

              <h3 className="mb-8 text-3xl font-bold text-[#49355A]">
                Profile
              </h3>

              <div className="space-y-6 text-lg">

                <div>
                  <span className="font-bold text-[#8A6EA9]">
                    Name
                  </span>

                  <p className="text-[#49355A]">
                    {personal.name}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-[#8A6EA9]">
                    Education
                  </span>

                  <p className="text-[#49355A]">
                    B.Sc. in Computer Science & Engineering
                  </p>
                </div>

                <div>
                  <span className="font-bold text-[#8A6EA9]">
                    Location
                  </span>

                  <p className="text-[#49355A]">
                    {personal.location}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-[#8A6EA9]">
                    Languages
                  </span>

                  <p className="text-[#49355A]">
                    English • Bengali
                  </p>
                </div>

                <div>
                  <span className="font-bold text-[#8A6EA9]">
                    Interests
                  </span>

                  <p className="text-[#49355A]">
                    Artificial Intelligence, Machine Learning, UI/UX Design,
                    Full Stack Development
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <h3 className="mb-8 text-4xl font-bold text-[#49355A]">
                Building thoughtful digital experiences.
              </h3>

              <p className="mb-8 text-lg leading-9 text-[#655874]">
                {personal.about}
              </p>

              <p className="mb-10 text-lg leading-9 text-[#655874]">
                My interests include Artificial Intelligence,
                Machine Learning, Natural Language Processing,
                and modern web development. I enjoy turning
                ideas into polished applications that are both
                visually appealing and practical.
              </p>

              <div className="flex flex-wrap gap-4">

                <div className="border-4 border-[#BCA7DB] bg-white px-6 py-4 shadow-[5px_5px_0_#BCA7DB]">
                  🤖 AI / ML
                </div>

                <div className="border-4 border-[#BCA7DB] bg-white px-6 py-4 shadow-[5px_5px_0_#BCA7DB]">
                  💻 Full Stack
                </div>

                <div className="border-4 border-[#BCA7DB] bg-white px-6 py-4 shadow-[5px_5px_0_#BCA7DB]">
                  🎨 UI / UX
                </div>

              </div>

            </div>

          </div>

        </motion.div>
      </Container>
    </section>
  );
}

export default About;