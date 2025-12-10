const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Minimal subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/30"></div>
    </div>
  );
};

export default AnimatedBackground;
