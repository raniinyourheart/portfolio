// ===== SKILLS DATA =====
const skillsData = {
  "frontend-list": [
    { name: "React.js", icon: "fa-brands fa-react" },
    { name: "Next.js", icon: "fa-brands fa-react" },
    { name: "TypeScript", icon: "fa-brands fa-js" },
    { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
    { name: "Vue.js", icon: "fa-brands fa-vuejs" },
    { name: "Vite.js", icon: "fa-brands fa-vite" }
  ],
  "backend-list": [
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "Express", icon: "fa-solid fa-code" },
    { name: "NestJS", icon: "fa-brands fa-node-js" },
    { name: "REST API", icon: "fa-solid fa-cloud" },
    { name: "GraphQL", icon: "fa-solid fa-project-diagram" },
    { name: "Laravel", icon: "fa-brands fa-laravel" }
  ],
  "database-list": [
    { name: "PostgreSQL", icon: "fa-solid fa-database" },
    { name: "MongoDB", icon: "fa-solid fa-leaf" },
    { name: "Redis", icon: "fa-solid fa-bolt" },
    { name: "AWS", icon: "fa-brands fa-aws" },
    { name: "Docker", icon: "fa-brands fa-docker" },
    { name: "MySQL", icon: "fa-solid fa-database" }
  ],
  "tools-list": [
    { name: "Git/GitHub", icon: "fa-brands fa-github" },
    { name: "CI/CD", icon: "fa-solid fa-arrows-rotate" },
    { name: "Agile/Scrum", icon: "fa-solid fa-people-group" },
    { name: "Linux", icon: "fa-brands fa-linux" },
    { name: "Figma", icon: "fa-brands fa-figma" },
    { name: "Jira", icon: "fa-solid fa-tasks" }
  ],
  "soft-list": [
    { name: "Problem Solving", icon: "fa-solid fa-lightbulb" },
    { name: "Continuous Learning", icon: "fa-solid fa-graduation-cap" },
    { name: "Team Collaboration", icon: "fa-solid fa-handshake" },
    { name: "Leadership", icon: "fa-solid fa-flag" },
    { name: "Communication", icon: "fa-solid fa-comments" },
    { name: "Critical Thinking", icon: "fa-solid fa-brain" }
  ]
};

// ===== CREATE MARQUEE =====
function createMarquee(id, items) {
  const container = document.getElementById(id);
  if (!container) {
    console.log('Container not found:', id);
    return;
  }
  
  // Duplicate items for seamless scroll
  const fullList = [...items, ...items, ...items];
  fullList.forEach(item => {
    const div = document.createElement('div');
    div.className = 'tech-card';
    div.innerHTML = `
      <i class="${item.icon}"></i>
      <span class="skill-name">${item.name}</span>
    `;
    container.appendChild(div);
  });
}

// ===== INIT SKILLS =====
function initSkills() {
  console.log('initSkills dipanggil!');
  
  // Render semua kategori
  Object.keys(skillsData).forEach(id => {
    console.log('Rendering:', id);
    createMarquee(id, skillsData[id]);
  });

  // ===== TOGGLE ALL SKILLS =====
  let allVisible = false;
  const showAllBtn = document.getElementById('showAllBtn');
  const showAllText = document.getElementById('showAllText');
  const showAllIcon = document.getElementById('showAllIcon');
  
  if (showAllBtn) {
    console.log('Tombol ditemukan!');
    showAllBtn.addEventListener('click', function() {
      allVisible = !allVisible;
      
      const groups = ['backend-group', 'database-group', 'tools-group', 'soft-group'];
      
      groups.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (allVisible) {
            el.classList.remove('hidden');
            el.classList.add('visible');
          } else {
            el.classList.remove('visible');
            el.classList.add('hidden');
          }
        }
      });

      if (allVisible) {
        showAllText.textContent = 'Sembunyikan Tech Stack';
        showAllIcon.style.transform = 'rotate(180deg)';
        showAllBtn.classList.add('expanded');
      } else {
        showAllText.textContent = 'Lihat Tech Stack Lainnya';
        showAllIcon.style.transform = 'rotate(0deg)';
        showAllBtn.classList.remove('expanded');
      }
    });
  } else {
    console.log('Tombol tidak ditemukan!');
  }
}

// ===== JALANKAN =====
console.log('Skills JS loaded!');

// Tunggu DOM siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, initSkills dijalankan');
    initSkills();
  });
} else {
  console.log('DOM sudah siap, initSkills dijalankan langsung');
  initSkills();
}