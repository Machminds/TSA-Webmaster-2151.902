console.log("resources.js loaded");

// ===== RESOURCE DATA STORED IN JS (works offline + TSA + file:// ) =====
const resources = [
    {
        id: "resource-chester-county-food-bank",
        name: "Chester County Food Bank",
        type: "Support Service",
        category: "Food Assistance",
        city: "Exton",
        website: "https://chestercountyfoodbank.org/",
        description:
            "County-wide hunger relief organization that supplies fresh produce and pantry staples to partner agencies and families and offers gardening and nutrition education programs.",
        tags: ["food", "pantry", "nutrition", "county-wide"]
    },
    {
        id: "resource-lords-pantry",
        name: "Lord's Pantry of Downingtown",
        type: "Support Service",
        category: "Food Assistance",
        city: "Downingtown",
        website: "https://www.lordspantryofdowningtown.org/",
        description:
            "Local pantry in Downingtown providing groceries, household items, fresh produce, and seasonal meal kits to households in need.",
        tags: ["food", "pantry", "groceries"]
    },
    {
        id: "resource-dasd-food-programs",
        name: "Downingtown Area School District Food Programs",
        type: "Support Service",
        category: "Student Food Support",
        city: "Downingtown",
        website: "https://www.dasd.org/",
        description:
            "School-based food support including free/reduced lunch, weekend food bags, and summer meal distribution sites.",
        tags: ["students", "school", "food"]
    },
    {
        id: "resource-bvaa",
        name: "Brandywine Valley Active Aging",
        type: "Support Service",
        category: "Senior Services",
        city: "Downingtown",
        website: "https://bvactiveaging.org/",
        description:
            "Senior centers offering daily lunches, social activities, transportation support, and wellness classes.",
        tags: ["seniors", "meals", "transportation", "wellness"]
    },
    {
        id: "resource-ymca-downingtown",
        name: "YMCA – Brandywine YMCA",
        type: "Event / Program",
        category: "Youth & Family Programs",
        city: "Downingtown",
        website: "https://ymcagbw.org/locations/brandywine-ymca",
        description:
            "Fitness classes, youth sports, after-school programs, swim safety, and chronic disease management.",
        tags: ["youth", "fitness", "family", "wellness"]
    },
    {
        id: "resource-chester-county-health",
        name: "Chester County Health Department",
        type: "Support Service",
        category: "Public Health",
        city: "Chester County",
        website: "https://www.chesco.org/health",
        description:
            "Immunizations, maternal health programs, WIC services, and community health education.",
        tags: ["health", "public health", "immunizations"]
    },
    {
        id: "resource-safe-harbor",
        name: "Safe Harbor of Chester County",
        type: "Non-Profit",
        category: "Housing and Homelessness",
        city: "Chester County",
        website: "https://safeharborofcc.org/",
        description:
            "Emergency shelter, meals, and supportive services for individuals experiencing homelessness.",
        tags: ["housing", "shelter", "homelessness"]
    },
    {
        id: "resource-nami-sepa",
        name: "NAMI Southeastern Pennsylvania",
        type: "Non-Profit",
        category: "Mental Health",
        city: "Chester County",
        website: "https://namimainlinepa.org/",
        description:
            "Peer support, educational classes, and advocacy for families affected by mental health challenges.",
        tags: ["mental health", "support", "families"]
    },
    {
        id: "resource-volunteerchesco",
        name: "VolunteerChesco",
        type: "Event / Program",
        category: "Volunteer Opportunities",
        city: "Chester County",
        website: "https://www.chesco.org/",
        description:
            "Volunteer hub listing food distributions, clean-ups, park events, and community opportunities.",
        tags: ["volunteer", "community", "service"]
    },
    {
        id: "resource-techgirlz",
        name: "TechGirlz Workshops",
        type: "Youth Program",
        category: "STEM & Technology",
        city: "Chester Springs",
        website: "https://www.techgirlz.org/",
        description:
            "Free STEM workshops for middle-school girls covering coding, robotics, and game development.",
        tags: ["STEM", "girls", "technology"]
    },
    {
        id: "resource-darc",
        name: "Downingtown Area Recreation Consortium (DARC)",
        type: "Event / Program",
        category: "Recreation & Enrichment",
        city: "Downingtown",
        website: "https://www.darcinfo.com/",
        description:
            "Recreation programs, summer camps, sports, arts classes, and community events.",
        tags: ["sports", "camps", "recreation", "youth"]
    },
    {
        id: "resource-library-downingtown",
        name: "Downingtown Library",
        type: "Support Service",
        category: "Education & Digital Access",
        city: "Downingtown",
        website: "https://downingtownlibrary.org/",
        description:
            "Books, digital resources, computer/Wi-Fi access, and education programs.",
        tags: ["library", "internet", "education"]
    },
    {
        id: "resource-glenmoore-food",
        name: "Glenmoore Local Food Support",
        type: "Support Service",
        category: "Food Assistance",
        city: "Glenmoore",
        website: "",
        description:
            "Small church-based pantries serving families in Glenmoore and nearby townships.",
        tags: ["food", "church", "glenmoore"]
    },
    {
        id: "resource-romansville-community",
        name: "Romansville Community Programs",
        type: "Event / Program",
        category: "Community & Family",
        city: "Romansville",
        website: "",
        description:
            "Seasonal events, gatherings, and neighborhood support groups.",
        tags: ["community", "family", "events"]
    }
];

// ===== DOM SETUP =====
let resourceListElement;
let resourceCountElement;
let noResultsMessageElement;
let searchInputElement;
let typeFilterElement;
let locationFilterElement;

// RENDER RESOURCE CARDS
function renderResources(list) {
    resourceListElement.innerHTML = "";

    if (list.length === 0) {
        resourceCountElement.textContent = "Showing 0 resources.";
        noResultsMessageElement.hidden = false;
        return;
    }

    noResultsMessageElement.hidden = true;
    resourceCountElement.textContent = `Showing ${list.length} resource${list.length === 1 ? "" : "s"}.`;

    list.forEach(resource => {
        const card = document.createElement("article");
        card.className = "card resource-card";
        card.id = resource.id;

        const title = document.createElement("h3");
        title.textContent = resource.name;

        const type = document.createElement("p");
        type.className = "card-meta";
        type.textContent = `${resource.type} · ${resource.category}`;

        const location = document.createElement("p");
        location.className = "card-meta";
        location.textContent = `Location: ${resource.city}`;

        const desc = document.createElement("p");
        desc.textContent = resource.description;

        card.appendChild(title);
        card.appendChild(type);
        card.appendChild(location);
        card.appendChild(desc);

        if (resource.website) {
            const link = document.createElement("a");
            link.href = resource.website;
            link.target = "_blank";
            link.className = "card-link";
            link.textContent = "Visit website →";
            card.appendChild(link);
        }

        resourceListElement.appendChild(card);
    });
}

// FILTER LOGIC
function applyFilters() {
    const searchText = searchInputElement.value.trim().toLowerCase();
    const selectedType = typeFilterElement.value;
    const selectedLocation = locationFilterElement.value;

    const filtered = resources.filter(resource => {
        const matchesType =
            selectedType === "all" || resource.type === selectedType;

        const matchesLocation =
            selectedLocation === "all" || resource.city === selectedLocation;

        const haystack = (
            resource.name +
            " " +
            resource.category +
            " " +
            resource.city +
            " " +
            resource.description +
            " " +
            (resource.tags || []).join(" ")
        ).toLowerCase();

        return (
            (searchText === "" || haystack.includes(searchText)) &&
            matchesType &&
            matchesLocation
        );
    });

    renderResources(filtered);
}

// SCROLL TO HASH
function handleHashScroll() {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
    target.classList.add("highlight-pulse");
    setTimeout(() => target.classList.remove("highlight-pulse"), 2000);
}

// INIT PAGE
document.addEventListener("DOMContentLoaded", () => {
    resourceListElement = document.getElementById("resourceList");
    resourceCountElement = document.getElementById("resourceCount");
    noResultsMessageElement = document.getElementById("noResultsMessage");
    searchInputElement = document.getElementById("searchInput");
    typeFilterElement = document.getElementById("typeFilter");
    locationFilterElement = document.getElementById("locationFilter");

    renderResources(resources);

    searchInputElement.addEventListener("input", applyFilters);
    typeFilterElement.addEventListener("change", applyFilters);
    locationFilterElement.addEventListener("change", applyFilters);

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
});
