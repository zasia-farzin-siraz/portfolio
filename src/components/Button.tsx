import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

function Button({ children, href }: ButtonProps) {
  return (
    <a
      href={href}
      className="
rounded-xl
bg-[#B026FF]
px-6
py-3
font-semibold
text-white
transition-all
duration-300
hover:bg-[#C84DFF]
hover:shadow-[0_0_25px_rgba(176,38,255,0.8)]
hover:scale-105
"
    >
      {children}
    </a>
  );
}

export default Button;
