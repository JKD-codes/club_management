// Sample data for clubs
const clubs = [
  { name: "Science Club", description: "Explore experiments and science projects." },
  { name: "Art Club", description: "Paint, draw, and express creativity." },
  { name: "Drama Club", description: "Acting, stage performances, and fun plays." }
];

// Display clubs in the directory
function displayClubs() {
  const list = document.getElementById("club-list");
  list.innerHTML = "";

  clubs.forEach((club, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${club.name}</h3>
      <p>${club.description}</p>
    `;
    list.appendChild(card);
  });
}

// Handle navigation
function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// Handle club creation
document.getElementById("create-club-form").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("club-name").value.trim();
  const description = document.getElementById("club-description").value.trim();

  if (name && description) {
    clubs.push({ name, description });
    displayClubs();
    showSection("directory");
    e.target.reset();
  }
});

// Initial load
displayClubs();
