import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

function Button({ children, href }: ButtonProps) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
className="
inline-flex
items-center
justify-center
border-4
border-[#BCA7DB]
bg-[#F8DDE3]
px-7
py-3
font-bold
text-[#49355A]
shadow-[6px_6px_0_#BCA7DB]
transition-all
duration-300
hover:-translate-y-1
hover:translate-x-1
hover:shadow-[10px_10px_0_#D79AB7]
"
    >
      {children}
    </a>
  );
}

export default Button;