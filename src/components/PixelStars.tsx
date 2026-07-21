function PixelStars() {
  const stars = Array.from({ length: 120 });

  return (
    <>
      {stars.map((_, i) => (
        <span
          key={i}
          className="pixel-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </>
  );
}

export default PixelStars;