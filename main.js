const secondaryText = document.getElementsByClassName('section__container-text');

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

scrollReveal().reveal(".section__container-text", {
  ...scrollRevealOption,
});
scrollReveal().reveal(".main-heading-1", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});

scrollReveal().reveal(".main-heading-2", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1000,
});
scrollReveal().reveal(".btn", {
  ...scrollRevealOption,
  delay: 1500,
});
scrollReveal().reveal(".link__opt", {
  ...scrollRevealOption,
  origin: "top",
  interval: 300,
  delay: 2000,
});
