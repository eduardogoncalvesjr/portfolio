/* eslint-disable max-len */
import newVets from '../Assets/images/newVets.jpg';
import dictionaryApp from '../Assets/images/dictionaryApp.jpg';

const projects = [
  {
    id: 1,
    name: 'newVets',
    github: 'https://github.com/eduardogoncalvesjr/newVets',
    deploy: 'https://eduardogoncalvesjr.github.io/newVets/',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
    text: 'This is a mock website for a fantasy vet clinic. It was made with bootstrap and is responsive for desktop, tablet and mobile',
    imagePath: newVets,
  },
  {
    id: 2,
    name: 'dictionaryApp',
    github: 'https://github.com/eduardogoncalvesjr/dictionaryApp',
    deploy: 'https://dictionary-app-kappa-five.vercel.app/',
    technologies: ['REACT JS', 'CSS', 'JAVASCRIPT', 'TAILWIND'],
    text: 'Dictionary website made with Tailwind with light/dark mode available. It fetches definitions from Free Dictionary API.',
    imagePath: dictionaryApp,
  },
];

export default projects;
