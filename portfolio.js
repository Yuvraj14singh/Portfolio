const cards = document.querySelectorAll(".about-card, .project-card, .skill-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(34, 211, 238, 0.16), rgba(255,255,255,0.05) 35%)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255,255,255,0.05)";
  });
});