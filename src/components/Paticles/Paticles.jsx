import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000", // Fundo preto
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 300, // Quantidade de partículas
            density: {
              enable: true,
              value_area: 1000, 
            },
          },
          color: {
            value: "#ffffff", // Cor das partículas (brancas)
          },
          shape: {
            type: "circle", // Partículas em formato de círculo
          },
          opacity: {
            value: 0.8,
            random: false,
            anim: {
              enable: false,
            },
          },
          size: {
            value: 3, // Tamanho das partículas
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5, // Velocidade das partículas
            direction: "none",
            random: false,
            straight: false,
            outModes: "out", 
          },
          links: {
            enable: true, 
            distance: 150, 
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Partículas se afastam do mouse
            },
            onClick: {
              enable: true,
              mode: "push", // Adiciona mais partículas ao clicar
            },
          },
          modes: {
            repulse: {
              distance: 100, // Distância que as partículas se afastam do mouse
              duration: 0.4,
            },
            push: {
              quantity: 4, // Número de partículas adicionadas ao clicar
            },
          },
        },
        detectRetina: true, // Ativa alta resolução para telas retina
      }}
    />
  );
};

export default ParticlesBg;
