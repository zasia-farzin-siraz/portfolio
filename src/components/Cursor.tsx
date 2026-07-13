import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Outer Glow */}
      <div
        className="pointer-events-none fixed z-[9999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B026FF] bg-[#B026FF]/10 transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          boxShadow: "0 0 25px #B026FF",
        }}
      />

      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed z-[10000] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D66BFF]"
        style={{
          left: position.x,
          top: position.y,
          boxShadow: "0 0 15px #D66BFF",
        }}
      />
    </>
  );
}

export default Cursor;