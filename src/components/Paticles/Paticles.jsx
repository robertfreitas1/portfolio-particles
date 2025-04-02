import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        background: { color: "#0a0a0a" },
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          links: { enable: true, color: "#fff" },
        },
      }}
    />
  );
};

export default ParticlesBg;
