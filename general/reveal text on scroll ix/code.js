// Text animation
gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');
splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: ['chars', 'words'] });
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});
