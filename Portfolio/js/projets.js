document.addEventListener("DOMContentLoaded", () => {
  setupSidebarToggle();
  const modalOverlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("projectModal");
  const closeModal = document.getElementById("closeModal");


  function setupSidebarToggle(){
  const app = document.getElementById('app');
  const btn = document.getElementById('toggleSidebar');
  if (!app || !btn) return;

  btn.addEventListener('click', () => {
    app.classList.toggle('collapsed');
  });
}

  // Affiche le modal
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener("click", () => {
      modalOverlay.classList.add("active");
    });
  });

  // Ferme le modal si on clique dehors
  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay || e.target === closeModal) {
      modalOverlay.classList.remove("active");
    }
  });

  // Tabs dans le modal
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const target = tab.dataset.tab;
      document.getElementById(target).classList.add("active");
    });
  });

  // Sections repliables
  document.querySelectorAll('.toggle-section').forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      target.style.display = target.style.display === "none" ? "grid" : "none";
    });
  });
});


