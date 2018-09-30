const resume = require('../ej_resume.pdf');
const image = require('./candy.png');

export default {
  section: 'about',
  heading: 'The Emily Jones',
  content: `
    <p>I am a Los Angeles based, enthusiastic digital project manager with an edge in dev/design. I’m a creative problem solver who works hard, and <strike>plays</strike> works harder but I somehow still don’t take myself too seriously. In my work I value humor, collaboration, organization, pixel perfection and on-point GIF responses. I was the Hermione Granger you probably knew in school, and now as a young professional I am still as tenacious and tireless as ever. And finally have the wild hair under control (phew).</p>
    <p>I’m a full time cat lover, gamer and temporary tattoo enthusiast. When I’m not working I enjoy attending comic conventions (WonderCon, SDCC and RTX are favorites), tracking down the best latte in Los Angeles, and pretending Parks and Recreation isn’t over.</p>
  `,
  email: 'theemilyjones@gmail.com',
  resume,
  currently:  [
    {
      icon: 'fa-book',
      action: 'Reading',
      value: 'Sense and Sensibility - Jane Austen'
    },
    {
      icon: 'fa-music',
      action: 'Listening To',
      value: 'Lights - Skin&Earth'
    },
    {
      icon: 'fa-laptop',
      action: 'Playing',
      value: 'League of Legends'
    },
    {
      icon: 'fa-twitter',
      action: 'Tweeting',
      value: 'theemilyjones92',
      link: 'https://twitter.com/theemilyjones92'
    },
    {
      icon: 'fa-instagram',
      action: 'Photographing',
      value: 'theemilyjones',
      link: 'https://www.instagram.com/theemilyjones'
    },
  ],
  image,
  caption: 'Me, unafraid of a challenge as per usual.'
};