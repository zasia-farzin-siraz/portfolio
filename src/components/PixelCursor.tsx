import { useEffect, useState } from "react";

function PixelCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="relative">

        {/* Main pixel */}
        <div className="h-4 w-4 border-2 border-[#BCA7DB] bg-[#F8DDE3]" />

        {/* Small pixel shadow */}
        <div className="absolute left-4 top-4 h-2 w-2 bg-[#BCA7DB]" />

      </div>
    </div>
  );
}

export default PixelCursor;