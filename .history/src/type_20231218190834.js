'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 100,
}) // Dream Coder|
  .move(-11)
  .type('프론트엔드 ') //Amazing |Dream Coder
  .pause(1000)
  .move(null, { to: 'END' }) //Amazing Dream Coder|
  .delete() //|
  .type('Front-end Engineer') //Front-end Engineer|
  .pause(1000)
  .move(-9) //Front-end| Engineer
  .delete(9) //| Engineer
  .type('호기심 많은') //Back-end| Engineer
  .pause(1000)
  .delete(6) //| Engineer
  // .type('Full-stack') //Full-stack| Engineer
  // .pause(1000)
  // .move(9) //Full-stack Engineer|
  .delete()
  .go();
