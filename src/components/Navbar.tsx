import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Button from "./Button";
import Container from "./Container";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  {name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#2d1445] bg-[#050505]/90 backdrop-blur-lg">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="
text-2xl
font-extrabold
tracking-wider
text-[#D66BFF]
transition
duration-300
hover:drop-shadow-[0_0_18px_#B026FF]
"
          >
            Zasia
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-8">

            <ul className="hidden gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
text-gray-300
font-medium
transition-all
duration-300
hover:text-[#D66BFF]
hover:drop-shadow-[0_0_15px_#B026FF]
hover:scale-110
"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
                <Button href="/resume.pdf">
                  Resume
                </Button>
            </div>
            <button
              className="text-2xl text-[#D66BFF] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </Container>
      {menuOpen && (
  <div className="md:hidden border-t border-[#2d1445] bg-[#050505]">
    <ul className="flex flex-col items-center gap-6 py-8">

      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="
              text-lg
              text-gray-300
              transition-all
              duration-300
              hover:text-[#D66BFF]
              hover:drop-shadow-[0_0_12px_#B026FF]
            "
          >
            {item.name}
          </a>
        </li>
      ))}

      <Button href="/resume.pdf">
        Resume
      </Button>

    </ul>
  </div>
)}

    </nav>
  );
}

export default Navbar;