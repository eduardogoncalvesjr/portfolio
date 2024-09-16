/* eslint-disable max-len */
import newVets from '../Assets/images/newVets.jpg';
import dictionaryApp from '../Assets/images/dictionaryApp.jpg';
import cartomancyWebsite from '../Assets/images/landingPage1.png';

const projects = [
  {
    id: 1,
    name: 'newVets',
    github: 'https://github.com/eduardogoncalvesjr/newVets',
    deploy: 'https://eduardogoncalvesjr.github.io/newVets/',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'RESPONSIVE'],
    text: 'This is a mock website for a fantasy vet clinic. It was made with bootstrap and is responsive for desktop, tablet and mobile.',
    imagePath: newVets,
  },
  {
    id: 2,
    name: 'dictionaryApp',
    github: 'https://github.com/eduardogoncalvesjr/dictionaryApp',
    deploy: 'https://dictionary-app-kappa-five.vercel.app/',
    technologies: ['REACT JS', 'CSS', 'JAVASCRIPT', 'TAILWIND', 'RESPONSIVE'],
    text: 'Dictionary website made with Tailwind with light/dark mode available. It fetches definitions from Free Dictionary API.',
    imagePath: dictionaryApp,
  },
  {
    id: 3,
    name: 'Professional Landing Page',
    deploy: 'https://bruna-site.vercel.app/',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'RESPONSIVE'],
    text: 'I was hired to make this website to promote my client\'s work on cartomancy. She has been constantly telling me new clients have been reaching her through the website.',
    imagePath: cartomancyWebsite,
  },
];

export default projects;
