import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Button from "../components/Button";
import Container from "../components/Container";
import { personal } from "../constants/personal";

function Hero() {
  return (
    <section
  id="home"
  className="
  flex min-h-screen items-center pt-36 bg-[#FFF7F5]
"
>
      <Container>

  {/* Background Blobs */}

  <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-pink-200 blur-[150px] opacity-60"></div>

  <div className="absolute right-20 top-20 h-80 w-80 rounded-full bg-purple-200 blur-[160px] opacity-50"></div>

  <div className="absolute bottom-10 left-1/2 h-96 w-96 rounded-full bg-rose-100 blur-[180px] opacity-60"></div>

  <div className="relative grid items-center gap-20 lg:grid-cols-2">

    {/* Giant Background Text */}

<h1
  className="
  absolute
  left-10
  top-44

  select-none

  text-[180px]
  md:text-[260px]

  font-black

  uppercase

  tracking-tight

  text-[#D79AB7]

  opacity-10

  pointer-events-none
  "
>
  ZFS
</h1>

{/* Pixel Squares */}

<div className="absolute top-56 left-40 h-3 w-3 bg-[#D79AB7]" />

<div className="absolute top-96 left-[48%] h-3 w-3 bg-[#C9B6E6]" />

<div className="absolute top-40 right-44 h-4 w-4 bg-[#BCA7DB]" />

<div className="absolute bottom-36 right-60 h-3 w-3 bg-[#D79AB7]" />
          {/* Left */}

          <motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

  {/* Badge */}

  <div
    className="
    inline-flex
    items-center
    gap-3
    border-4
    border-[#BCA7DB]
    bg-[#F8DDE3]
    px-6
    py-3
    shadow-[6px_6px_0_#BCA7DB]
    mb-10
    mb-10
    "
  >
    <div className="h-3 w-3 bg-[#D79AB7]" />
    <span className="text-[#5A476A] font-semibold">
      Available for Work
    </span>
  </div>

  {/* Heading */}

<h1
className="
pixel-title

leading-[0.95]

text-[68px]

md:text-[96px]

tracking-tight

text-[#49355A]
"
>

    Crafting

    <br />

    <span className="text-[#C8B5E8]">
      Intelligent
    </span>

    <br />

    <span className="text-[#D79AB7]">
      Experiences
    </span>

  </h1>

  {/* Animated Role */}

  <div className="mt-10">

    <TypeAnimation
      sequence={[
        "Machine Learning",
        2000,
        "Web Development",
        2000,
        "UI/UX Design",
        2000,
      ]}
      repeat={Infinity}
      className="
      text-2xl
      font-semibold
      text-[#8A6EA9]
      "
    />

  </div>

  {/* Name */}

  <h2 className="mt-8 text-4xl font-bold text-[#49355A]">
    Hi, I'm
    <br />
    Zasia Farzin Siraz
  </h2>

  {/* Description */}

  <p className="mt-8 max-w-xl text-lg leading-9 text-[#655874]">

    Computer Science graduate passionate about
    Artificial Intelligence, Machine Learning and
    modern web development.

    I enjoy building elegant applications with
    thoughtful user experiences.

  </p>

  {/* Buttons */}

  <div className="mt-10 flex gap-5">

    <Button href="#projects">
      View Projects
    </Button>

    <Button href={personal.cv}>
      Resume
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
            <div
className="
border-4
border-[#BCA7DB]
bg-[#F8DDE3]
p-4

shadow-[12px_12px_0_#BCA7DB]

transition-all
duration-500

hover:-translate-y-2
hover:shadow-[18px_18px_0_#BCA7DB]
"
>

<img
src="/profile.JPG"
alt="Zasia"

className="
h-[470px]
w-[370px]
object-cover
"
/>

</div>
          
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;