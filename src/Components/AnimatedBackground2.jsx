import { useEffect, useRef } from "react";
import "../Styles/animated-background.css";

const AnimatedBackground2 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

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

    const start = performance.now();

    const draw = (time) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const t = (time - start) * 0.00025;

      ctx.clearRect(0, 0, width, height);

      // Base
      ctx.fillStyle = "#08090c";
      ctx.fillRect(0, 0, width, height);

      /*
       * ORB 1
       */
      const x1 =
        width * 0.2 +
        Math.sin(t * 2.1) * width * 0.12;

      const y1 =
        height * 0.3 +
        Math.cos(t * 1.4) * height * 0.12;

      const glow1 = ctx.createRadialGradient(
        x1,
        y1,
        0,
        x1,
        y1,
        width * 0.38
      );

      glow1.addColorStop(
        0,
        "rgba(0, 180, 255, 0.13)"
      );

      glow1.addColorStop(
        0.45,
        "rgba(0, 120, 255, 0.05)"
      );

      glow1.addColorStop(
        1,
        "rgba(0, 0, 0, 0)"
      );

      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      /*
       * ORB 2
       */
      const x2 =
        width * 0.8 +
        Math.cos(t * 1.7) * width * 0.13;

      const y2 =
        height * 0.65 +
        Math.sin(t * 1.2) * height * 0.15;

      const glow2 = ctx.createRadialGradient(
        x2,
        y2,
        0,
        x2,
        y2,
        width * 0.4
      );

      glow2.addColorStop(
        0,
        "rgba(130, 60, 255, 0.11)"
      );

      glow2.addColorStop(
        0.5,
        "rgba(90, 40, 220, 0.04)"
      );

      glow2.addColorStop(
        1,
        "rgba(0, 0, 0, 0)"
      );

      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      /*
       * MOVING AURORA BAND
       */
      ctx.save();

      ctx.globalAlpha = 0.12;

      ctx.beginPath();

      ctx.moveTo(0, height * 0.55);

      for (let x = 0; x <= width; x += 20) {
        const wave =
          Math.sin(x * 0.006 + t * 3) * 70 +
          Math.sin(x * 0.002 + t * 1.5) * 45;

        ctx.lineTo(
          x,
          height * 0.55 + wave
        );
      }

      for (let x = width; x >= 0; x -= 20) {
        const wave =
          Math.sin(x * 0.006 + t * 3) * 70 +
          Math.sin(x * 0.002 + t * 1.5) * 45;

        ctx.lineTo(
          x,
          height * 0.72 + wave
        );
      }

      ctx.closePath();

      const aurora = ctx.createLinearGradient(
        0,
        0,
        width,
        0
      );

      aurora.addColorStop(
        0,
        "rgba(0, 180, 255, 0)"
      );

      aurora.addColorStop(
        0.35,
        "rgba(0, 180, 255, 1)"
      );

      aurora.addColorStop(
        0.65,
        "rgba(130, 70, 255, 1)"
      );

      aurora.addColorStop(
        1,
        "rgba(130, 70, 255, 0)"
      );

      ctx.fillStyle = aurora;
      ctx.filter = "blur(35px)";
      ctx.fill();

      ctx.restore();

      /*
       * SUBTLE GRID
       */
      ctx.filter = "none";
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(255,255,255,0.018)";

      const gridSize = 80;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animationFrame =
        requestAnimationFrame(draw);
    };

    animationFrame =
      requestAnimationFrame(draw);

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

export default AnimatedBackground2;