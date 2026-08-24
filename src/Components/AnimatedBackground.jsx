import { useEffect, useRef } from "react";
import "../Styles/animated-background.css";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    const particles = [];
    const particleCount = 45;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,

        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.35 + 0.1,
      });
    }

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      /*
       * -------------------------
       * SOFT GLOW
       * -------------------------
       */

      const gradient1 = ctx.createRadialGradient(
        width * 0.25,
        height * 0.25,
        0,
        width * 0.25,
        height * 0.25,
        width * 0.55
      );

      gradient1.addColorStop(
        0,
        "rgba(80, 120, 255, 0.08)"
      );

      gradient1.addColorStop(
        1,
        "rgba(80, 120, 255, 0)"
      );

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      const gradient2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.75,
        0,
        width * 0.8,
        height * 0.75,
        width * 0.5
      );

      gradient2.addColorStop(
        0,
        "rgba(150, 70, 255, 0.07)"
      );

      gradient2.addColorStop(
        1,
        "rgba(150, 70, 255, 0)"
      );

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      /*
       * -------------------------
       * PARTICLES
       * -------------------------
       */

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();

        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      /*
       * -------------------------
       * CONNECTIONS
       * -------------------------
       */

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 130) {
            const opacity =
              (1 - distance / 130) * 0.12;

            ctx.beginPath();

            ctx.strokeStyle =
              `rgba(150,170,255,${opacity})`;

            ctx.lineWidth = 0.6;

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.stroke();
          }
        }
      }

      animationFrame =
        requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="animated-background"
    />
  );
};

export default AnimatedBackground;