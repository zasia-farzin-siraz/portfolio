import { motion } from "framer-motion";
import Container from "../components/Container";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "HTML",
    ],
  },

  {
    title: "AI / ML",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "NLTK",
    ],
  },

  {
    title: "Frontend",
    skills: [
      "React",
      "Tailwind CSS",
      "Vite",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Flask",
      "SQLite",
      "Firebase",
    ],
  },

  {
    title: "Tools",
    skills: [
      "GitHub",
      "VS Code",
      "Figma",
      "Microsoft Office",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#FFF7F5] py-32"
    >
      {/* Decorative background */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
        <h2 className="pixel-title mb-20 text-center text-[#49355A]">
          Things I Build With
        </h2>

          {/* Terminal */}

          <div
            className="
            overflow-hidden
            border-4
            border-[#BCA7DB]
            bg-[#F8DDE3]
            shadow-[10px_10px_0_#BCA7DB]
            "
          >

            {/* Top Bar */}

            <div
              className="
              flex
              items-center
              gap-3
              border-b-4
              border-[#BCA7DB]
              bg-[#EED4E9]
              px-6
              py-4
              "
            >
              <div className="h-4 w-4 rounded-full bg-[#F08080]" />
              <div className="h-4 w-4 rounded-full bg-[#FFD166]" />
              <div className="h-4 w-4 rounded-full bg-[#90EE90]" />

              <span className="ml-3 font-semibold text-[#6A547D]">
                skills.exe
              </span>
            </div>

            <div className="space-y-10 p-8">

              {skillGroups.map((group) => (

                <div key={group.title}>

                  <h3 className="mb-5 text-2xl font-bold text-[#8A6EA9]">
                    &gt; {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-4">

                    {group.skills.map((skill) => (

                      <motion.div
                        key={skill}
                        whileHover={{
                          scale: 1.08,
                          rotate: -2,
                        }}
                        className="
                        cursor-default

                        border-4

                        border-[#BCA7DB]

                        bg-white

                        px-5

                        py-3

                        font-semibold

                        text-[#5A476A]

                        shadow-[4px_4px_0_#BCA7DB]

                        transition-all
                        "
                      >
                        {skill}
                      </motion.div>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default Skills;