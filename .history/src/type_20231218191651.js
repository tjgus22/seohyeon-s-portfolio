'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 100,
}) // Dream Coder|
  // .move(-11)
  // .type('Amazing ') //Amazing |Dream Coder
  // .pause(1000)
  // .move(null, { to: 'END' }) //Amazing Dream Coder|
  // .delete() //|
  // .type('Front-end Engineer') //Front-end Engineer|
  // .pause(1000)
  // .move(-9) //Front-end| Engineer
  // .delete(9) //| Engineer
  // .type('Back-end') //Back-end| Engineer
  // .pause(1000)
  // .delete(8) //| Engineer
  // .type('Full-stack') //Full-stack| Engineer
  // .pause(1000)
  // .move(9) //Full-stack Engineer|
  // .delete()
  // .go();
  .move(-7)
  .type('호기심 많은 ') //Amazing |Dream Coder
  .pause(1000)
  .move(null, { to: 'END' }) //Amazing Dream Coder|
  .move(-3) //Front-end| Engineer
  .delete(7) //| Engineer
  .pause(1000)
  .move(-3) //Front-end| Engineer
  .delete(7) //| Engineer
  .type('프론트 엔드') //Back-end| Engineer
  .pause(1000)
  // .type('Front-end Engineer') //Front-end Engineer|
  // .pause(1000)
  // .move(-9) //Front-end| Engineer
  // .delete(9) //| Engineer
  // .type('Back-end') //Back-end| Engineer
  // .pause(1000)
  // .delete(8) //| Engineer
  // .type('Full-stack') //Full-stack| Engineer
  // .pause(1000)
  // .move(9) //Full-stack Engineer|
  .delete()
  .go();
