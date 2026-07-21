import { motion } from "framer-motion";
import Container from "../components/Container";

const timeline = [
  {
    title: "B.Sc. Computer Science & Engineering",
    subtitle: "BRAC University",
    year: "2021 – 2026",
    description:
      "Completed coursework in software engineering, artificial intelligence, databases, web development and human-computer interaction.",
    emoji: "🎓",
  },

  {
    title: "Undergraduate Thesis",
    subtitle: "Mortality Risk Prediction using Extended LSTM + CNN",
    year: "2026",
    description:
      "Designed and developed a deep learning model for predicting ICU patient mortality using MIMIC datasets.",
    emoji: "🧠",
  },

  {
    title: "Featured Projects",
    subtitle: "Machine Learning & Full Stack",
    year: "2025 – 2026",
    description:
      "Built AI dashboards, sentiment analysis applications, healthcare systems, and responsive web applications using React and Flask.",
    emoji: "💻",
  },

  {
    title: "Currently",
    subtitle: "Open to Opportunities",
    year: "Present",
    description:
      "Seeking entry-level Software Engineering, AI/ML, and Full Stack Development opportunities where I can continue learning and building impactful products.",
    emoji: "🚀",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#FFF7F5] py-32"
    >
      <Container>

        <p className="mb-4 text-center text-lg font-semibold uppercase tracking-[6px] text-[#D79AB7]">
          My Journey
        </p>

        <h2 className="pixel-title mb-20 text-center text-[#49355A]">
          Education & Experience
        </h2>

        <div className="relative mx-auto max-w-4xl">

          {/* Vertical line */}

          <div className="absolute left-8 top-0 h-full w-1 bg-[#BCA7DB]" />

          {timeline.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-12 flex gap-8"
            >

              {/* Circle */}

              <div
                className="
                z-10
                flex
                h-16
                w-16
                items-center
                justify-center
                border-4
                border-[#BCA7DB]
                bg-[#F8DDE3]
                text-3xl
                shadow-[5px_5px_0_#BCA7DB]
                "
              >
                {item.emoji}
              </div>

              {/* Card */}

              <div
                className="
                flex-1
                border-4
                border-[#BCA7DB]
                bg-white
                p-6
                shadow-[8px_8px_0_#BCA7DB]
                transition-all
                duration-300
                hover:-translate-y-1
                "
              >

                <span className="text-sm font-bold uppercase tracking-[3px] text-[#D79AB7]">
                  {item.year}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-[#49355A]">
                  {item.title}
                </h3>

                <p className="mt-1 font-semibold text-[#8A6EA9]">
                  {item.subtitle}
                </p>

                <p className="mt-5 leading-8 text-[#655874]">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Experience;