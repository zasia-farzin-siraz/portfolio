import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", scroll);

    return () =>
      window.removeEventListener("scroll", scroll);
  }, []);

  const backToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      onClick={backToTop}
      className={`
      fixed
      bottom-8
      right-8
      z-50

      border-4
      border-[#BCA7DB]

      bg-[#F8DDE3]

      p-4

      shadow-[6px_6px_0_#BCA7DB]

      transition-all
      duration-300

      ${
        visible
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-5"
      }

      hover:-translate-y-1
      hover:shadow-[8px_8px_0_#D79AB7]
      `}
    >
      <FaArrowUp
        className="text-xl text-[#8A6EA9]"
      />
    </button>
  );
}

export default BackToTop;