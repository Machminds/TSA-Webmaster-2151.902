const starterResources = [
  {
    name: "Philabundance",
    type: "donate",
    category: "Food Support",
    description: "Supports hunger relief efforts across the Philadelphia region.",
    website: "https://www.philabundance.org/"
  },
  {
    name: "Mural Arts Philadelphia",
    type: "volunteer",
    category: "Arts and Community",
    description: "Connects art, neighborhoods, and public projects across the city.",
    website: "https://www.muralarts.org/"
  },
  {
    name: "Philadelphia Parks & Recreation",
    type: "volunteer",
    category: "Community Service",
    description: "Offers ways to support parks, recreation, and neighborhood activities.",
    website: "https://www.phila.gov/departments/philadelphia-parks-recreation/"
  },
  {
    name: "The Food Trust",
    type: "donate",
    category: "Health and Food Access",
    description: "Works to expand access to affordable, nutritious food.",
    website: "https://thefoodtrust.org/"
  },
  {
    name: "Cradles to Crayons Philadelphia",
    type: "volunteer",
    category: "Youth Support",
    description: "Provides essential items to children and offers volunteer opportunities.",
    website: "https://www.cradlestocrayons.org/philadelphia/"
  },
  {
    name: "Project HOME",
    type: "donate",
    category: "Housing and Support",
    description: "Supports people affected by homelessness and poverty in Philadelphia.",
    website: "https://www.projecthome.org/"
  }
];

function getAllResources() {
  const localResources = JSON.parse(localStorage.getItem("userResources") || "[]");
  return [...starterResources, ...localResources];
}

function loadResources(type, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const resources = getAllResources();
  const filtered = resources.filter((item) => item.type === type);

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = "<p>No resources found yet.</p>";
    return;
  }

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