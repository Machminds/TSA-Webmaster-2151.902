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
    description: "Supports parks and recreation programs.",
    website: "https://www.phila.gov/departments/philadelphia-parks-recreation/"
  },
  {
    name: "Project HOME",
    type: "donate",
    category: "Housing Support",
    description: "Works to end homelessness in Philadelphia.",
    website: "https://projecthome.org/"
  },
  {
    name: "The Food Trust",
    type: "donate",
    category: "Food Support",
    description: "Improves access to healthy food.",
    website: "https://thefoodtrust.org/"
  },
  {
    name: "Cradles to Crayons Philadelphia",
    type: "volunteer",
    category: "Children and Families",
    description: "Provides essentials to children in need.",
    website: "https://www.cradlestocrayons.org/philadelphia/"
  },
  {
    name: "Broad Street Ministry",
    type: "donate",
    category: "Homeless Support",
    description: "Serves individuals experiencing poverty.",
    website: "https://www.broadstreetministry.org/"
  },
  {
    name: "MANNA",
    type: "volunteer",
    category: "Health Support",
    description: "Delivers meals to people with illness.",
    website: "https://mannapa.org/"
  },
  {
    name: "Ronald McDonald House Philadelphia",
    type: "donate",
    category: "Health Support",
    description: "Supports families of hospitalized children.",
    website: "https://rmhcphilly.org/"
  },
  {
    name: "Sunday Breakfast Rescue Mission",
    type: "donate",
    category: "Homeless Support",
    description: "Provides meals and shelter.",
    website: "https://sundaybreakfast.org/"
  },
  {
    name: "Habitat for Humanity Philadelphia",
    type: "volunteer",
    category: "Housing Support",
    description: "Builds homes with volunteers.",
    website: "https://www.habitatphiladelphia.org/"
  },
  {
    name: "Share Food Program",
    type: "volunteer",
    category: "Food Support",
    description: "Distributes food to communities.",
    website: "https://www.sharefoodprogram.org/"
  },
  {
    name: "PAWS Philadelphia",
    type: "volunteer",
    category: "Animal Welfare",
    description: "Animal rescue and adoption.",
    website: "https://phillypaws.org/"
  },
  {
    name: "ACCT Philly",
    type: "donate",
    category: "Animal Welfare",
    description: "Animal care and shelter services.",
    website: "https://acctphilly.org/"
  },
  {
    name: "Face to Face",
    type: "donate",
    category: "Community Service",
    description: "Meals, healthcare, and legal services.",
    website: "https://facetofacegermantown.org/"
  },
  {
    name: "Books Through Bars",
    type: "volunteer",
    category: "Education",
    description: "Sends books to incarcerated people.",
    website: "https://booksthroughbars.org/"
  },
  {
    name: "Free Library of Philadelphia Foundation",
    type: "donate",
    category: "Education",
    description: "Supports literacy and education.",
    website: "https://libwww.freelibrary.org/support/"
  },
  {
    name: "Boys & Girls Clubs Philadelphia",
    type: "volunteer",
    category: "Youth Development",
    description: "Mentoring and youth programs.",
    website: "https://www.bgcphila.org/"
  },
  {
    name: "Big Brothers Big Sisters Independence",
    type: "volunteer",
    category: "Youth Development",
    description: "Mentorship programs.",
    website: "https://independencebigs.org/"
  },
  {
    name: "Girl Scouts Eastern PA",
    type: "volunteer",
    category: "Youth Development",
    description: "Leadership programs for girls.",
    website: "https://www.gsep.org/"
  },
  {
    name: "Philadelphia Education Fund",
    type: "donate",
    category: "Education",
    description: "Supports student success.",
    website: "https://philaedfund.org/"
  },
  {
    name: "United Way Greater Philadelphia",
    type: "donate",
    category: "Community Service",
    description: "Supports local nonprofits.",
    website: "https://unitedforimpact.org/"
  },
  {
    name: "Red Cross SE Pennsylvania",
    type: "volunteer",
    category: "Emergency Relief",
    description: "Disaster response and support.",
    website: "https://www.redcross.org/local/pennsylvania/sepa.html"
  },
  {
    name: "Prevention Point Philadelphia",
    type: "donate",
    category: "Health Support",
    description: "Public health services.",
    website: "https://ppponline.org/"
  },
  {
    name: "Philadelphia Youth Sports Collaborative",
    type: "donate",
    category: "Youth Development",
    description: "Access to sports for youth.",
    website: "https://www.philadelphiayouthsports.org/"
  },
  {
    name: "Smith Memorial Playground",
    type: "volunteer",
    category: "Children and Families",
    description: "Playground and programs.",
    website: "https://smithplayground.org/"
  },
  {
    name: "Please Touch Museum",
    type: "donate",
    category: "Children and Families",
    description: "Children's learning museum.",
    website: "https://www.pleasetouchmuseum.org/"
  },
  {
    name: "Philadelphia Orchard Project",
    type: "volunteer",
    category: "Environment",
    description: "Community orchards.",
    website: "https://www.phillyorchards.org/"
  },
  {
    name: "Clean Air Council",
    type: "donate",
    category: "Environment",
    description: "Environmental advocacy.",
    website: "https://www.cleanair.org/"
  },
  {
    name: "Schuylkill Center",
    type: "volunteer",
    category: "Environment",
    description: "Environmental education.",
    website: "https://schuylkillcenter.org/"
  },
  {
    name: "TreePhilly",
    type: "volunteer",
    category: "Environment",
    description: "Urban tree planting.",
    website: "https://treephilly.org/"
  },
  {
    name: "Fairmount Park Conservancy",
    type: "donate",
    category: "Environment",
    description: "Supports city parks.",
    website: "https://myphillypark.org/"
  },
  {
    name: "Cobbs Creek Foundation",
    type: "donate",
    category: "Environment",
    description: "Park restoration.",
    website: "https://cobbscreek.org/"
  },
  {
    name: "Friends of the Rail Park",
    type: "volunteer",
    category: "Community Service",
    description: "Public space support.",
    website: "https://www.therailpark.org/"
  },
  {
    name: "Women Against Abuse",
    type: "donate",
    category: "Crisis Support",
    description: "Domestic violence services.",
    website: "https://www.womenagainstabuse.org/"
  },
  {
    name: "Nationalities Service Center",
    type: "volunteer",
    category: "Immigrant Support",
    description: "Immigrant services.",
    website: "https://nscphila.org/"
  },
  {
    name: "HIAS Pennsylvania",
    type: "donate",
    category: "Immigrant Support",
    description: "Refugee support.",
    website: "https://hiaspa.org/"
  },
  {
    name: "JEVS Human Services",
    type: "donate",
    category: "Workforce",
    description: "Job training programs.",
    website: "https://www.jevshumanservices.org/"
  },
  {
    name: "Career Wardrobe",
    type: "donate",
    category: "Workforce",
    description: "Career support services.",
    website: "https://careerwardrobe.org/"
  },
  {
    name: "Urban Affairs Coalition",
    type: "donate",
    category: "Community Service",
    description: "Supports nonprofits.",
    website: "https://uac.org/"
  },
  {
    name: "People's Emergency Center",
    type: "donate",
    category: "Housing Support",
    description: "Supports families.",
    website: "https://www.pec-cares.org/"
  },
  {
    name: "Bethanna",
    type: "donate",
    category: "Children and Families",
    description: "Child welfare services.",
    website: "https://bethanna.org/"
  },
  {
    name: "Caring for Friends",
    type: "volunteer",
    category: "Food Support",
    description: "Meal delivery.",
    website: "https://caringforfriends.org/"
  },
  {
    name: "Read by 4th Campaign",
    type: "donate",
    category: "Education",
    description: "Early literacy initiative.",
    website: "https://www.readby4th.org/"
  },
  {
    name: "ACHIEVEability",
    type: "donate",
    category: "Housing Support",
    description: "Self-sufficiency programs.",
    website: "https://achieveability.org/"
  },
  {
    name: "Outward Bound Philadelphia",
    type: "volunteer",
    category: "Youth Development",
    description: "Leadership programs.",
    website: "https://outwardboundphiladelphia.org/"
  },
  {
    name: "Philadelphia FIGHT",
    type: "donate",
    category: "Health Support",
    description: "Healthcare programs.",
    website: "https://fight.org/"
  },
  {
    name: "Pennsylvania SPCA",
    type: "volunteer",
    category: "Animal Welfare",
    description: "Animal rescue.",
    website: "https://www.pspca.org/"
  },
  {
    name: "Community Design Collaborative",
    type: "volunteer",
    category: "Arts and Community",
    description: "Community design projects.",
    website: "https://cdesignc.org/"
  },
  {
    name: "Philadelphia Museum of Art",
    type: "donate",
    category: "Arts and Community",
    description: "Supports art access.",
    website: "https://philamuseum.org/"
  },
  {
    name: "Philly Food Rescue",
    type: "volunteer",
    category: "Food Support",
    description: "Redistributes surplus food to communities in need.",
    website: "https://www.phillyfoodrescue.com/"
  },
  {
    name: "Sunday Love Project",
    type: "volunteer",
    category: "Food Support",
    description: "Provides meals and essentials to underserved communities.",
    website: "https://www.sundaylove.org/"
  },
  {
    name: "Habitat for Humanity International",
    type: "donate",
    category: "Housing Support",
    description: "Global housing support with strong local impact.",
    website: "https://www.habitat.org/"
  },
  {
    name: "Turning Points for Children",
    type: "donate",
    category: "Housing Support",
    description: "Supports families facing housing instability.",
    website: "https://turningpointsforchildren.org/"
  },
  {
    name: "Einstein Healthcare Network Community Programs",
    type: "volunteer",
    category: "Health Support",
    description: "Community outreach and health services.",
    website: "https://www.einstein.edu/"
  },
  {
    name: "Jefferson Health Outreach",
    type: "volunteer",
    category: "Health Support",
    description: "Healthcare support and community programs.",
    website: "https://www.jeffersonhealth.org/"
  },
  {
    name: "Philadelphia Futures",
    type: "volunteer",
    category: "Education",
    description: "Supports students with college readiness and access.",
    website: "https://www.philadelphiafutures.org/"
  },
  {
    name: "YouthBuild Philadelphia Charter School",
    type: "donate",
    category: "Education",
    description: "Education and job training for young adults.",
    website: "https://www.youthbuildphilly.org/"
  },
  {
    name: "Delaware Riverkeeper Network",
    type: "donate",
    category: "Environment",
    description: "Protects the Delaware River and surrounding ecosystems.",
    website: "https://delawareriverkeeper.org/"
  },
  {
    name: "Philadelphia Water Department Programs",
    type: "volunteer",
    category: "Environment",
    description: "Sustainability and water protection initiatives.",
    website: "https://www.phila.gov/departments/water-department/"
  },
  {
    name: "Philadelphia Volunteers",
    type: "volunteer",
    category: "Community Service",
    description: "Connects volunteers with citywide service opportunities.",
    website: "https://www.philadelphiavolunteers.org/"
  },
  {
    name: "Serve Philadelphia",
    type: "volunteer",
    category: "Community Service",
    description: "City-led volunteer engagement platform.",
    website: "https://www.phila.gov/programs/serve-philadelphia/"
  },
  {
    name: "Philadelphia Youth Network",
    type: "donate",
    category: "Youth Development",
    description: "Workforce and development programs for youth.",
    website: "https://www.pyninc.org/"
  },
  {
    name: "After School Activities Partnerships",
    type: "donate",
    category: "Youth Development",
    description: "After-school enrichment for students.",
    website: "https://www.asapconnected.com/"
  },
  {
    name: "Morris Animal Refuge",
    type: "volunteer",
    category: "Animal Welfare",
    description: "Animal rescue and adoption services.",
    website: "https://www.morrisanimalrefuge.org/"
  },
  {
    name: "New Sanctuary Movement",
    type: "volunteer",
    category: "Immigrant Support",
    description: "Supports immigrant communities through advocacy.",
    website: "https://www.sanctuaryphiladelphia.org/"
  },
  {
    name: "Philadelphia Works",
    type: "donate",
    category: "Workforce",
    description: "Workforce development and job access programs.",
    website: "https://www.philaworks.org/"
  },
  {
    name: "Covenant House Pennsylvania",
    type: "donate",
    category: "Crisis Support",
    description: "Supports youth experiencing homelessness.",
    website: "https://covenanthousepa.org/"
  }
];

function getUserResources() {
  return JSON.parse(localStorage.getItem("userResources") || "[]");
}

function getAllResources() {
  return [...starterResources, ...getUserResources()];
}

let currentType = "volunteer";
let currentContainerId = "resource-list";
let typeCycleInterval = null;

function initPage(type, containerId) {
  currentType = type;
  currentContainerId = containerId;

  applyQueryPrefill();
  renderFilteredResources();
  startTypeCycle();

  const categoryFilter = document.getElementById("categoryFilter");
  const searchFilter = document.getElementById("searchFilter");

  if (categoryFilter) {
    categoryFilter.addEventListener("change", renderFilteredResources);
  }

  if (searchFilter) {
    searchFilter.addEventListener("input", renderFilteredResources);
  }
}

function applyQueryPrefill() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const search = params.get("search");

  const categoryEl = document.getElementById("categoryFilter");
  const searchEl = document.getElementById("searchFilter");

  if (category && categoryEl) {
    categoryEl.value = category;
  }

  if (search && searchEl) {
    searchEl.value = search;
  }
}

function renderFilteredResources() {
  const container = document.getElementById(currentContainerId);
  if (!container) return;

  const categoryValue =
    document.getElementById("categoryFilter")?.value || "all";
  const searchValue =
    document.getElementById("searchFilter")?.value.toLowerCase().trim() || "";

  let filtered = getAllResources().filter((item) => item.type === currentType);

  if (categoryValue !== "all") {
    filtered = filtered.filter((item) => item.category === categoryValue);
  }

  if (searchValue) {
    filtered = filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue) ||
        item.category.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue)
    );
  }

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = "<p>No resources found.</p>";
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

  const name = document.getElementById("name")?.value.trim();
  const type = document.getElementById("type")?.value;
  const category = document.getElementById("category")?.value.trim();
  const description = document.getElementById("description")?.value.trim();
  const website = document.getElementById("website")?.value.trim();

  if (!name || !type || !category || !description || !website) {
    alert("Please fill out all fields.");
    return;
  }

  const newResource = { name, type, category, description, website };
  const existing = getUserResources();
  existing.unshift(newResource);
  localStorage.setItem("userResources", JSON.stringify(existing));

  const message = document.getElementById("save-message");
  if (message) {
    message.textContent = "Resource saved successfully on this device.";
  }

  event.target.reset();
  renderRecentResources();
}

function renderRecentResources() {
  const container = document.getElementById("recent-resource-list");
  if (!container) return;

  const userResources = getUserResources();
  const fallbackResources = starterResources.slice(0, 3);

  const recentResources =
    userResources.length > 0
      ? [...userResources.slice(0, 3)]
      : [...fallbackResources];

  container.innerHTML = "";

  recentResources.forEach((item) => {
    const card = document.createElement("div");
    card.className = "resource-card";

    card.innerHTML = `
      <h2>${item.name}</h2>
      <p><strong>Type:</strong> ${item.type}</p>
      <p><strong>Category:</strong> ${item.category}</p>
      <p>${item.description}</p>
      <a href="${item.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

function startTypeCycle() {
  const el = document.getElementById("typeCycle");
  if (!el) return;

  const words = JSON.parse(el.dataset.words || "[]");
  const speed = parseInt(el.dataset.speed || "3000", 10);

  if (!words.length) return;

  if (typeCycleInterval) {
    clearInterval(typeCycleInterval);
  }

  let index = 0;
  el.textContent = words[0];
  el.classList.add("type-show");

  typeCycleInterval = setInterval(() => {
    index = (index + 1) % words.length;
    el.classList.remove("type-show");
    void el.offsetWidth;
    el.textContent = words[index];
    el.classList.add("type-show");
  }, speed);
}