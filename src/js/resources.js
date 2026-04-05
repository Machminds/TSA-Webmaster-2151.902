async function loadResources(type, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch("../../data/resources.json");
    const resources = await response.json();

    const localResources = JSON.parse(localStorage.getItem("userResources") || "[]");
    const combined = [...resources, ...localResources];

    const filtered = combined.filter((item) => item.type === type);

    container.innerHTML = "";

    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className = "resource-card";

      card.innerHTML = `
        <h2>${item.name}</h2>
        <p><strong>Category:</strong> ${item.category}</p>
        <p>${item.description}</p>
        <a href="${item.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p>Unable to load resources right now.</p>";
    console.error(error);
  }
}

function saveResource(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value.trim();
  const description = document.getElementById("description").value.trim();
  const website = document.getElementById("website").value.trim();

  const newResource = { name, type, category, description, website };

  const existing = JSON.parse(localStorage.getItem("userResources") || "[]");
  existing.push(newResource);
  localStorage.setItem("userResources", JSON.stringify(existing));

  alert("Resource saved on this device.");
  event.target.reset();
}