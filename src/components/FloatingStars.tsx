function FloatingStars() {
  const stars = Array.from({ length: 35 });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {stars.map((_, i) => (
        <div
          key={i}
          className="absolute h-2 w-2 rounded-sm bg-white opacity-70 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingStars;