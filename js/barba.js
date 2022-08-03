import barba from '@barba/core';
import barbaCss from '@barba/css';

const animationEnter = (container) => {
  return gsap.from(container, {autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'})
}
const animationLeave = (container) => {
  return gsap.to(container, {autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none'})
}

barba.use(barbaCss);

barba.init({
  transitions: [
    {
      once({next}){
        animationEnter(next.container)
      },
      Leave({current}){
        animationEnter(current.container)
      }
    }
  ]
})

/*

barba.init({
  transitions: [{
    name: 'home',
    to:{
      namespace: ['home', 'location', 'vahi', 'menu'],
    },
    sync: true,
    once() {},
    leave(){},
    enter(){},
  },
  ]
})

 */
