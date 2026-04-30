import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
  twinkle: boolean;
}

export default function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    const particleCount = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: Math.random() * -0.4 - 0.1,
      opacity: Math.random() * 0.6 + 0.2,
      opacitySpeed: Math.random() * 0.008 + 0.002,
      twinkle: Math.random() > 0.7,
    });

    const init = () => {
      resize();
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const drawStar = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = '#c9a96e';
      ctx.shadowBlur = size * 4;
      ctx.shadowColor = '#c9a96e';

      // Draw a 4-point star
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        const outerX = x + Math.cos(angle) * size * 2;
        const outerY = y + Math.sin(angle) * size * 2;
        const innerAngle = angle + Math.PI / 4;
        const innerX = x + Math.cos(innerAngle) * size * 0.5;
        const innerY = y + Math.sin(innerAngle) * size * 0.5;

        if (i === 0) ctx.moveTo(outerX, outerY);
        else ctx.lineTo(outerX, outerY);
        ctx.lineTo(innerX, innerY);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawCircle = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = '#d4b896';
      ctx.shadowBlur = size * 6;
      ctx.shadowColor = '#c9a96e';
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.twinkle) {
          p.opacity += p.opacitySpeed;
          if (p.opacity >= 0.8 || p.opacity <= 0.1) {
            p.opacitySpeed *= -1;
          }
        }

        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
          particles[i] = createParticle();
          particles[i].y = canvas.height + 10;
        }

        if (p.twinkle) {
          drawStar(p.x, p.y, p.size, p.opacity);
        } else {
          drawCircle(p.x, p.y, p.size, p.opacity);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
