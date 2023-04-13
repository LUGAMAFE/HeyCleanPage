const logito = document.querySelector("#loaderlogogito");
const letras = document.querySelector("#contletras");
const loadercito = document.querySelector("#loadercito");

gsap.to(logito, {
  keyframes: [
    { rotate: 360, duration: 1 },
    { duration: 1, x: 0, rotate: 0, delay: 1 },
    { duration: 0.5, scale: 6, delay: 0.5, autoAlpha: 0.3 },
    { duration: 0.2, y: -1000 },
    { scale: 0 },
  ],
});

gsap.from(letras, {
  keyframes: [
    {
      duration: 1.5,
      width: "100%",
      yoyo: true,
      repeat: 1,
    },
  ],
});
