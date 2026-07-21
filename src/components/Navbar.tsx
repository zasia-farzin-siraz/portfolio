import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Button from "./Button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
          flex
          items-center
          justify-between
          border-4
          border-[#BCA7DB]
          bg-[#F7D8DE]
          px-8
          py-5
          shadow-[8px_8px_0_#BCA7DB]
          "
        >

          {/* Logo */}

          <a
            href="#home"
            className="
            pixel-title
            text-xl
            text-[#D48CB5]
            "
          >
            ZFS.
          </a>

          {/* Desktop Navigation */}

          <ul className="hidden md:flex items-center gap-10">

            {navItems.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  className="
                  text-[#5B476B]
                  font-semibold
                  transition
                  hover:text-[#D48CB5]
                  "
                >
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

          {/* Resume */}

          <div className="hidden md:block">

            <Button href="#contact">
              Hire Me
            </Button>

          </div>

          {/* Mobile */}

          <button
            className="md:hidden text-2xl text-[#5B476B]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {menuOpen && (

          <div
            className="
            border-4
            border-t-0
            border-[#BCA7DB]
            bg-[#F7D8DE]
            shadow-[8px_8px_0_#BCA7DB]
            md:hidden
            "
          >

            <ul className="flex flex-col items-center gap-6 py-8">

              {navItems.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                    text-[#5B476B]
                    font-semibold
                    hover:text-[#D48CB5]
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}

              <Button href="#contact">
                Hire Me
              </Button>

            </ul>

          </div>

        )}

      </div>

    </nav>
  );
}

export default Navbar;