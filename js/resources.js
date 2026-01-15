console.log('resources.js loaded');

let resourceListElement;
let resourceCountElement;
let noResultsMessageElement;
let searchInputElement;
let typeFilterElement;
let locationFilterElement;
async function loadResources() {
  const response = await fetch('data/resources.json');
  resources = await response.json();
  renderResources(resources);
}
function renderResources(list) {
  resourceListElement.innerHTML = '';
    list = [...list].sort((a, b) => a.name.localeCompare(b.name));

  if (list.length === 0) {
    resourceCountElement.textContent = 'Showing 0 resources.';
    noResultsMessageElement.hidden = false;
    return;
  }

  noResultsMessageElement.hidden = true;
  resourceCountElement.textContent =
      `Showing ${list.length} resource${list.length === 1 ? '' : 's'}.`;

  list.forEach(resource => {
    const card = document.createElement('article');
    card.className = 'card resource-card';
    card.id = resource.id;

    const title = document.createElement('h3');
    title.textContent = resource.name;

    const type = document.createElement('p');
    type.className = 'card-meta';
    type.textContent = `${resource.type} · ${resource.category}`;

    const location = document.createElement('p');
    location.className = 'card-meta';
    location.textContent = `Location: ${resource.city}`;

    const desc = document.createElement('p');
    desc.textContent = resource.description;

    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(location);
    card.appendChild(desc);

    if (resource.website) {
      const link = document.createElement('a');
      link.href = resource.website;
      link.target = '_blank';
      link.className = 'card-link';
      link.textContent = 'Visit website →';
      card.appendChild(link);
    }

    resourceListElement.appendChild(card);
  });
}

function applyFilters() {
  const searchText = searchInputElement.value.trim().toLowerCase();
  const selectedType = typeFilterElement.value;
  const selectedLocation = locationFilterElement.value;

  const filtered = resources.filter(resource => {
    const matchesType =
        selectedType === 'all' || resource.type === selectedType;

    const matchesLocation =
        selectedLocation === 'all' || resource.city === selectedLocation;

    const haystack =
        (resource.name + ' ' + resource.category + ' ' + resource.city + ' ' +
         resource.description + ' ' + (resource.tags || []).join(' '))
            .toLowerCase();

    return (
        (searchText === '' || haystack.includes(searchText)) && matchesType &&
        matchesLocation);
  });

  renderResources(filtered);
}

function handleHashScroll() {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  target.scrollIntoView({behavior: 'smooth'});
  target.classList.add('highlight-pulse');
  setTimeout(() => target.classList.remove('highlight-pulse'), 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  resourceListElement = document.getElementById('resourceList');
  resourceCountElement = document.getElementById('resourceCount');
  noResultsMessageElement = document.getElementById('noResultsMessage');
  searchInputElement = document.getElementById('searchInput');
  typeFilterElement = document.getElementById('typeFilter');
  locationFilterElement = document.getElementById('locationFilter');

  loadResources();

  searchInputElement.addEventListener('input', applyFilters);
  typeFilterElement.addEventListener('change', applyFilters);
  locationFilterElement.addEventListener('change', applyFilters);

  handleHashScroll();
  window.addEventListener('hashchange', handleHashScroll);
});
