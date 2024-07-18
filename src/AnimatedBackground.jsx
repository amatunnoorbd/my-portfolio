import { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('galaxyCanvas');
    const ctx = canvas.getContext('2d');

    const particlesArray = [];
    const numberOfParticles = 800;

    function initParticles() {
      particlesArray.length = 0; // Clear the array to avoid stacking particles on resize
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 0.5 - 0.2;
        const speedY = Math.random() * 0.5 - 0.2;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particlesArray.push(new Particle(x, y, size, speedX, speedY, color));
      }
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    class Particle {
      constructor(x, y, size, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > window.innerWidth || this.x < 0) this.speedX *= -1;
        if (this.y > window.innerHeight || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="background-container">
      <canvas id="galaxyCanvas"></canvas>
      <div className="gradient-overlay"></div>
    </div>
  );
};

export default AnimatedBackground;
