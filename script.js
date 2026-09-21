document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  const ownerLabel = 'Ali Hamza · Purwa Tariq';
  document.querySelectorAll('.user-chip').forEach(chip => {
    chip.innerHTML = `<span class="status-dot"></span> ${ownerLabel}`;
  });
  const footer = document.querySelector('footer');
  if (footer) {
    footer.firstElementChild.textContent = 'OpsFlow / DevOps Lab';
    footer.lastElementChild.textContent = ownerLabel;
  }
  const pageEyebrow = document.querySelector('.eyebrow');
  if (pageEyebrow && page === 'dashboard') {
    pageEyebrow.innerHTML = '<span class="pulse"></span> DevOps Lab / Ali Hamza + Purwa Tariq';
  }
  if (pageEyebrow && page === 'playbooks') {
    pageEyebrow.innerHTML = '<span class="pulse"></span> DevOps Lab / practical library';
  }
  if (pageEyebrow && page === 'status') {
    pageEyebrow.innerHTML = '<span class="pulse"></span> DevOps Lab / live system status';
  }

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  menuButton?.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.textContent = nav.classList.contains('open') ? 'Close' : 'Menu';
  });

  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.playbook-card');
  const search = document.querySelector('.search-box input');
  const filterCards = () => {
    const active = document.querySelector('.filter.active')?.dataset.filter || 'all';
    const query = search?.value.toLowerCase() || '';
    cards.forEach(card => {
      const matchesFilter = active === 'all' || card.dataset.category === active;
      const matchesSearch = !query || card.textContent.toLowerCase().includes(query);
      card.hidden = !(matchesFilter && matchesSearch);
    });
  };
  filters.forEach(filter => filter.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    filter.classList.add('active');
    filterCards();
  }));
  search?.addEventListener('input', filterCards);

  document.querySelectorAll('.button, .text-link').forEach(link => {
    link.addEventListener('click', event => {
      if (link.getAttribute('href') === '#') event.preventDefault();
    });
  });
});