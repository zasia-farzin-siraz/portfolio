import Container from "../components/Container";

function Footer() {
  return (
    <footer className="border-t border-[#2d1445] bg-[#050505] py-8">
      <Container>
        <p className="text-center text-gray-400">
          © 2026 Zasia Farzin Siraz. Built with React, TypeScript & Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;