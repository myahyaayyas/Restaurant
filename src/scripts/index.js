/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const initializeApp = async () => {
  const App = await import('./views/app');
  const swRegister = await import('./utils/sw-register');

  const app = new App.default({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });

  const handleViewMoreClick = (event) => {
    const viewMoreBtn = event.target.closest('.view-more-btn');
    if (viewMoreBtn) {
      const descriptionPreview = viewMoreBtn.previousElementSibling;
      const fullDescription = viewMoreBtn.nextElementSibling;

      descriptionPreview.classList.toggle('hidden');
      fullDescription.classList.toggle('hidden');
      viewMoreBtn.style.display = 'none';
    }
  };

  document.addEventListener('click', handleViewMoreClick);

  const setActiveLink = () => {
    const currentPage = window.location.hash;
    const links = document.querySelectorAll('.app-bar__navigation ul li a');

    links.forEach((link) => {
      const linkPath = link.getAttribute('href').slice(1);
      if (currentPage === `#${linkPath}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('hashchange', () => {
    app.renderPage();
    setActiveLink();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister.default();
    setActiveLink();
  });
};

initializeApp();
