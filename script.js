// script.js

document.addEventListener("DOMContentLoaded", function () {
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");
    const sidebar = document.querySelector("[data-sidebar]");
    const navbarLinks = document.querySelectorAll(".navbar-link");
  
    sidebarBtn.addEventListener("click", function () {
      sidebar.classList.toggle("active");
    });
  
    navbarLinks.forEach(link => {
      link.addEventListener("click", function () {
        navbarLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
  
        const page = this.textContent.toLowerCase();
        const articles = document.querySelectorAll("article");
        articles.forEach(article => article.classList.remove("active"));
        document.querySelector(`[data-page="${page}"]`).classList.add("active");
      });
    });
  });
  