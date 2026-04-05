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
    name: "Project HOME",
    type: "donate",
    category: "Housing Support",
    description: "Works to prevent and end homelessness in Philadelphia.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "The Food Trust",
    type: "donate",
    category: "Food Support",
    description: "Improves access to affordable and healthy food in communities.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Cradles to Crayons Philadelphia",
    type: "volunteer",
    category: "Children and Families",
    description: "Provides children with essential items through donations and service.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Broad Street Ministry",
    type: "donate",
    category: "Homeless Support",
    description: "Serves individuals experiencing deep poverty and housing instability.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "MANNA",
    type: "volunteer",
    category: "Health Support",
    description: "Delivers nourishing meals to people with serious illnesses.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Ronald McDonald House Charities Philadelphia",
    type: "donate",
    category: "Health Support",
    description: "Supports families with children receiving medical care.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Sunday Breakfast Rescue Mission",
    type: "donate",
    category: "Homeless Support",
    description: "Provides meals, shelter, and recovery services to those in need.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Habitat for Humanity Philadelphia",
    type: "volunteer",
    category: "Housing Support",
    description: "Builds and repairs homes with community volunteers.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Share Food Program",
    type: "volunteer",
    category: "Food Support",
    description: "Distributes food to families, seniors, and school communities.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Philadelphia Animal Welfare Society",
    type: "volunteer",
    category: "Animal Welfare",
    description: "Supports animal rescue, adoption, and care efforts.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "ACCT Philly",
    type: "donate",
    category: "Animal Welfare",
    description: "Provides shelter and care for animals across Philadelphia.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Face to Face",
    type: "donate",
    category: "Community Service",
    description: "Offers meals, healthcare, and legal services to neighbors in need.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Books Through Bars",
    type: "volunteer",
    category: "Education",
    description: "Sends books and educational materials to incarcerated people.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Free Library of Philadelphia Foundation",
    type: "donate",
    category: "Education",
    description: "Supports literacy, learning, and library programs citywide.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Boys & Girls Clubs of Philadelphia",
    type: "volunteer",
    category: "Youth Development",
    description: "Provides mentoring, learning, and enrichment for young people.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Big Brothers Big Sisters Independence",
    type: "volunteer",
    category: "Youth Development",
    description: "Builds mentoring relationships that support youth success.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Girl Scouts of Eastern Pennsylvania",
    type: "volunteer",
    category: "Youth Development",
    description: "Empowers girls through leadership, service, and learning programs.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "YouthBuild Philadelphia Charter School",
    type: "donate",
    category: "Education",
    description: "Helps young adults continue education and career pathways.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Philadelphia Education Fund",
    type: "donate",
    category: "Education",
    description: "Supports students through college and career readiness initiatives.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "United Way of Greater Philadelphia and Southern New Jersey",
    type: "donate",
    category: "Community Service",
    description: "Funds programs that strengthen families and local communities.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Red Cross Southeastern Pennsylvania",
    type: "volunteer",
    category: "Emergency Relief",
    description: "Responds to disasters and supports emergency preparedness.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Prevention Point Philadelphia",
    type: "donate",
    category: "Health Support",
    description: "Provides health services and harm reduction resources.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Philadelphia Youth Sports Collaborative",
    type: "donate",
    category: "Youth Development",
    description: "Expands access to sports and healthy activities for youth.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Smith Memorial Playground",
    type: "volunteer",
    category: "Children and Families",
    description: "Offers safe play spaces and family programming in Philadelphia.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Please Touch Museum",
    type: "donate",
    category: "Children and Families",
    description: "Supports hands-on learning experiences for children.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Philadelphia Orchard Project",
    type: "volunteer",
    category: "Environment",
    description: "Plants and maintains orchards in community-based spaces.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Clean Air Council",
    type: "donate",
    category: "Environment",
    description: "Advocates for clean air and environmental protection.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Schuylkill Center for Environmental Education",
    type: "volunteer",
    category: "Environment",
    description: "Connects people to nature through education and stewardship.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "TreePhilly",
    type: "volunteer",
    category: "Environment",
    description: "Supports tree planting and urban greening across neighborhoods.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Fairmount Park Conservancy",
    type: "donate",
    category: "Environment",
    description: "Protects and improves Philadelphia parks and public spaces.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Cobbs Creek Foundation",
    type: "donate",
    category: "Environment",
    description: "Invests in restoration, recreation, and community renewal.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Philadelphia Water Department Green City Program",
    type: "volunteer",
    category: "Environment",
    description: "Supports green stormwater and sustainability initiatives.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Friends of the Rail Park",
    type: "volunteer",
    category: "Community Service",
    description: "Supports public space, programming, and neighborhood engagement.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Friends of Clark Park",
    type: "volunteer",
    category: "Community Service",
    description: "Organizes events and supports upkeep for a shared park space.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Friends of Wissahickon",
    type: "volunteer",
    category: "Environment",
    description: "Protects trails, habitats, and green spaces in Wissahickon Valley.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Women Against Abuse",
    type: "donate",
    category: "Crisis Support",
    description: "Provides services for survivors of domestic violence.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Laurel House",
    type: "donate",
    category: "Crisis Support",
    description: "Supports individuals and families affected by domestic abuse.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Child Guidance Resource Centers",
    type: "donate",
    category: "Mental Health",
    description: "Provides behavioral health and family support services.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Nationalities Service Center",
    type: "volunteer",
    category: "Immigrant Support",
    description: "Helps immigrants and refugees with settlement and support.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "HIAS Pennsylvania",
    type: "donate",
    category: "Immigrant Support",
    description: "Assists refugees and immigrants with legal and social services.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "JEVS Human Services",
    type: "donate",
    category: "Workforce Development",
    description: "Provides job training, education, and career services.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Philadelphia Works",
    type: "volunteer",
    category: "Workforce Development",
    description: "Supports workforce growth and employment readiness programs.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Career Wardrobe",
    type: "donate",
    category: "Workforce Development",
    description: "Helps people transition into work with clothing and coaching.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Truancy Intervention and Prevention Services",
    type: "volunteer",
    category: "Youth Development",
    description: "Supports students and families with school attendance challenges.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Urban Affairs Coalition",
    type: "donate",
    category: "Community Service",
    description: "Strengthens nonprofits and initiatives serving the region.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "People's Emergency Center",
    type: "donate",
    category: "Housing Support",
    description: "Supports families through housing, education, and social services.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Bethanna",
    type: "donate",
    category: "Children and Families",
    description: "Provides adoption, child welfare, and family support programs.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Caring for Friends",
    type: "volunteer",
    category: "Food Support",
    description: "Prepares and delivers meals to homebound individuals.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Aid for Friends",
    type: "donate",
    category: "Food Support",
    description: "Supports volunteers delivering meals and companionship.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Philadelphians Organized to Witness Empower and Rebuild",
    type: "volunteer",
    category: "Community Service",
    description: "Engages communities in service, outreach, and rebuilding efforts.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Read by 4th Campaign",
    type: "donate",
    category: "Education",
    description: "Promotes early literacy and reading success for children.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "ACHIEVEability",
    type: "donate",
    category: "Housing Support",
    description: "Helps low-income families work toward self-sufficiency and stability.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Outward Bound Philadelphia",
    type: "volunteer",
    category: "Youth Development",
    description: "Builds leadership and resilience through outdoor education.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Camp Sojourner Girl Leadership Camp",
    type: "donate",
    category: "Youth Development",
    description: "Supports leadership and growth opportunities for girls.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Philadelphia FIGHT",
    type: "donate",
    category: "Health Support",
    description: "Provides care, education, and advocacy related to public health.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Pennsylvania SPCA",
    type: "volunteer",
    category: "Animal Welfare",
    description: "Protects animals through rescue, care, and advocacy.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Community Design Collaborative",
    type: "volunteer",
    category: "Arts and Community",
    description: "Connects volunteer design work with community needs.",
    website: "PASTE_URL_HERE"
  },
  {
    name: "Philadelphia Museum of Art",
    type: "donate",
    category: "Arts and Community",
    description: "Supports exhibitions, education, and public access to art.",
    website: "PASTE_URL_HERE"
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