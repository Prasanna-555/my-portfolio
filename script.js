// Toggle the dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Show project details dynamically
function showProjectDetails(key) {
  const modal = document.getElementById("projectDetails");
  modal.classList.remove("hidden");
  let content = '';

  if (key === "resume") {
    content = `
      <div class='modal-content'>
        <h3>AI-Powered Resume Screening System</h3>
        <p>A Flask-based app using NLP to score and rank resumes based on job descriptions. Includes front-end upload form, Python backend, and model logic for text analysis.</p>
        <button onclick='closeModal()'>Close</button>
      </div>`;
  } else if (key === "csp") {
    content = `
      <div class='modal-content'>
        <h3>Community Service Project</h3>
        <p>A web application to raise awareness of diseases caused by poor drainage. Based on field data, it helped in proposing solutions and spreading hygiene practices.</p>
        <button onclick='closeModal()'>Close</button>
      </div>`;
  }

  modal.innerHTML = content;
}

// Close modals
function closeModal() {
  document.getElementById("projectDetails").classList.add("hidden");
  document.getElementById("educationModal").classList.add("hidden");
  document.getElementById("aboutModal")?.classList.add("hidden");
}

// Show About modal
function showAboutModal() {
  document.getElementById('aboutModal').classList.remove('hidden');
}
function closeAboutModal() {
  document.getElementById("aboutModal").classList.add("hidden");
}

// Populate education timeline dynamically
function populateEducationTimeline() {
  const timeline = document.getElementById("educationTimeline");
  const educationData = [
    {
      year: "2022–2026",
      degree: "B.Tech - CSE",
      institute: "Vignan’s Institute of Information Technology",
      detail: "Current CGPA: 76.22%",
     
    },
    {
      year: "2019–2021",
      degree: "Intermediate (MPC)",
      institute: "Sri Chaitanya Junior College",
      detail: "Aggregate: 98.3%",
     },
    {
      year: "2018–2019",
      degree: "SSC",
      institute: "Sri Chaitanya School",
      detail: "Aggregate: 98%",
     
    }
  ];

  timeline.innerHTML = "";

  educationData.forEach((edu, index) => {
    const card = document.createElement("div");
    card.className = `education-card ${index % 2 === 0 ? "left" : "right"}`;
    card.innerHTML = `
      <img src="${edu.image}" alt="${edu.degree}" />
      <div class="edu-info">
        <h3>${edu.degree}</h3>
        <p>${edu.institute}</p>
        <span>${edu.year}</span>
      </div>
    `;
    card.addEventListener("click", () => showEducationDetail(edu));
    timeline.appendChild(card);
  });
}

// Show education modal with details
function showEducationDetail(edu) {
  const modal = document.getElementById("educationModal");
  const content = modal.querySelector(".modal-content");
  content.innerHTML = `
    <span class="close-btn" onclick="closeModal()">&times;</span>
    <h3>${edu.degree}</h3>
    <p><strong>Institute:</strong> ${edu.institute}</p>
    <p><strong>Year:</strong> ${edu.year}</p>
    <p><strong>Details:</strong> ${edu.detail}</p>
  `;
  modal.classList.remove("hidden");
}

// Initial load
populateEducationTimeline();
window.onclick = function(event) {
  const modal = document.getElementById("aboutModal");
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
}

