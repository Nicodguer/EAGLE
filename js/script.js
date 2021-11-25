anime.timeline({})
  .add({
    targets: '.tituloPrincipal .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.tituloPrincipal',
    opacity: 100,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
